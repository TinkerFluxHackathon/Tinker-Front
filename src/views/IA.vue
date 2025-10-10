<script setup>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import { ref, watch, onUnmounted } from 'vue';
import { VMarkdownView } from 'vue3-markdown';
import 'vue3-markdown/dist/vue3-markdown.css';

// Modelo Gemini 2.5 Flash
const MODEL_ID = 'gemini-2.5-flash';
const API_KEY = import.meta.env.VITE_API_KEY;

const messages = ref([]);
const userInput = ref('');

const DEFAULT_CONTEXT_CHAR_LIMIT = 6000;
const RETRY_CONTEXT_CHAR_LIMIT = 2000;
const SUMMARY_LIMIT = 1200;

const fullGuides = new Map();

function safeTruncate(str, charLimit = 2000) {
  if (!str) return '';
  if (str.length <= charLimit) return str;
  const sliced = str.slice(0, charLimit);
  const lastLineBreak = sliced.lastIndexOf('\n');
  if (lastLineBreak > Math.floor(charLimit * 0.6)) {
    return sliced.slice(0, lastLineBreak) + '\n\n…(conteúdo truncado)';
  }
  return sliced + '\n\n…(conteúdo truncado)';
}

function buildContext(messagesPayload = [], charLimit = DEFAULT_CONTEXT_CHAR_LIMIT) {
  const parts = [];
  let total = 0;
  for (let i = messagesPayload.length - 1; i >= 0; i--) {
    const m = messagesPayload[i];
    const roleLabel = (m.role || 'unknown').toUpperCase();
    const safeContent = safeTruncate(String(m.content || ''), 2000);
    const piece = `${roleLabel}: ${safeContent}`;
    if (total + piece.length > charLimit) break;
    parts.unshift(piece);
    total += piece.length;
  }
  return parts.join('\n\n');
}

async function sendGeminiRequest(payload) {
  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${MODEL_ID}:generateContent`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-goog-api-key': API_KEY
      },
      body: JSON.stringify(payload)
    }
  );

  const txt = await res.text();
  let data;
  try {
    data = txt ? JSON.parse(txt) : {};
  } catch (e) {
    throw new Error(`Resposta não-JSON da Gemini: ${txt}`);
  }

  if (!res.ok) {
    const msg = data?.error?.message || JSON.stringify(data);
    throw new Error(`Erro Gemini (${res.status}): ${msg}`);
  }

  const candidateText =
    data?.candidates?.[0]?.content?.parts?.[0]?.text ||
    data?.outputs?.[0]?.content?.parts?.[0]?.text ||
    data?.text ||
    data?.response?.text ||
    '';

  const finishReason =
    data?.candidates?.[0]?.finishReason ||
    data?.usageMetadata?.finishReason ||
    null;

  return { text: candidateText, finishReason, raw: data };
}

async function callGeminiDirect(messagesPayload) {
  const contextText = buildContext(messagesPayload, DEFAULT_CONTEXT_CHAR_LIMIT);

  const payload = {
    contents: [{ parts: [{ text: contextText }] }],
    generationConfig: {
      temperature: 0.0,
      topP: 0.8,
      topK: 40
    }
  };

  const { text, raw } = await sendGeminiRequest(payload);
  if (text) return text;
  return JSON.stringify(raw);
}

function initIFixitScraper(messagesRef) {
  function shouldScrapeMessage(text = '') {
    const t = String(text).toLowerCase();
    if (!t) return false;
    if (t.includes('pt.ifixit.com') || t.includes('ifixit')) return true;
    if (
      t.includes('guia') ||
      t.includes('tutorial') ||
      t.includes('passo a passo') ||
      t.includes('passo-a-passo') ||
      t.includes('passo-passo') ||
      t.includes('receita') ||
      t.includes('corrig') ||
      t.includes('refaz') ||
      t.includes('restaur') ||
      t.includes('consert') ||
      t.includes('arrum') ||
      t.includes('como arrum') ||
      t.includes('ajeit') ||
      t.includes('como ajeit') ||
      t.includes('dar um jeito') ||
      t.includes('repar') ||
      t.includes('como repar') ||
      t.includes('emend') ||
      t.includes('troc') ||
      t.includes('como troc') ||
      t.includes('como consert')
    )
      return true;
    return false;
  }

  function extractIfixitUrls(text = '') {
    const re = /https?:\/\/pt\.ifixit\.com\/Guide[^\s'"\)<>]*/gi;
    const matches = Array.from(String(text).matchAll(re)).map(m => m[0]);
    return matches;
  }

  async function fetchHtml(url) {
    try {
      const res = await fetch(url, { method: 'GET' });
      if (!res.ok) throw new Error('HTTP ' + res.status);
      return await res.text();
    } catch (err) {
      try {
        const proxy = 'https://api.allorigins.win/raw?url=' + encodeURIComponent(url);
        const res2 = await fetch(proxy, { method: 'GET' });
        if (!res2.ok) throw new Error('Proxy HTTP ' + res2.status);
        return await res2.text();
      } catch (err2) {
        console.error('fetchHtml erro:', err, err2);
        throw err2;
      }
    }
  }

  function parseGuideHtml(html) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html || '', 'text/html');

    const h1 = doc.querySelector('h1');
    const title = h1 ? h1.innerText.trim() : '';

    const stepsEls = doc.querySelectorAll('ol.steps-container.container li');
    const steps = Array.from(stepsEls).map(li => li.innerText.trim()).filter(Boolean);

    const needEl = doc.querySelector('.css-e5oax3');
    const altNeedEl = !needEl ? doc.querySelector('[class*="need"], [class*="tools"], .tools-list') : null;
    const needs = (needEl || altNeedEl) ? (needEl || altNeedEl).innerText.trim() : '';

    return { title, steps, needs };
  }

  async function fetchIFixitGuide(url) {
    const html = await fetchHtml(url);
    return parseGuideHtml(html);
  }

  const stop = watch(messagesRef, async (newVal) => {
    try {
      const last = Array.isArray(newVal) ? newVal[newVal.length - 1] : null;
      if (!last || String(last.role || '').toLowerCase() !== 'user') return;
      const text = String(last.content || '');
      if (!shouldScrapeMessage(text)) return;
      let urls = extractIfixitUrls(text);
      let guideUrl = urls && urls.length ? urls[0] : '';

      if (!guideUrl) {
        const searchUrl = 'https://pt.ifixit.com/search?query=' + encodeURIComponent(text);
        let searchHtml;
        try {
          searchHtml = await fetchHtml(searchUrl);
        } catch (errSearch) {
          console.warn('Busca iFixit falhou:', errSearch);
          return;
        }
        const parser = new DOMParser();
        const doc = parser.parseFromString(searchHtml || '', 'text/html');
        const a = Array.from(doc.querySelectorAll('a')).find(a => a && a.getAttribute && a.getAttribute('href') && a.getAttribute('href').includes('/Guide/'));
        if (a) {
          const href = a.getAttribute('href');
          guideUrl = href.startsWith('http') ? href : ('https://pt.ifixit.com' + href);
        }
      }

      if (!guideUrl) return;

      const assistantIndex = messagesRef.value.push({ role: 'assistant', content: 'Pesquisando guia no iFixit...' }) - 1;

      try {
        const data = await fetchIFixitGuide(guideUrl);

        let fullReply = '';
        if (data.title) fullReply += `**Guia:** ${data.title}\n\n`;
        if (data.needs) fullReply += `**O que você precisa:**\n${data.needs}\n\n`;
        if (data.steps && data.steps.length) {
          fullReply += '**Passos:**\n';
          data.steps.forEach((s, i) => {
            fullReply += `${i + 1}. ${s}\n`;
          });
        } else {
          fullReply += 'Nenhum passo encontrado no guia.';
        }

        try {
          fullGuides.set(guideUrl, fullReply);
        } catch (e) {
          console.warn('Não foi possível salvar fullGuide:', e);
        }

        let shortReply = fullReply.length > SUMMARY_LIMIT
          ? fullReply.slice(0, SUMMARY_LIMIT) + '\n\n…(guia completo guardado internamente; digite "mostrar guia completo" para ver tudo)'
          : fullReply;

        messagesRef.value[assistantIndex].content = shortReply;
      } catch (err) {
        messagesRef.value[assistantIndex].content = 'Erro ao obter o guia do iFixit: ' + (err && err.message ? err.message : String(err));
      }
    } catch (err) {
      console.error('Erro no watcher iFixit:', err);
    }
  });

  return {
    stop: () => {
      if (stop) stop();
    }
  };
}

const ifixit = initIFixitScraper(messages);

onUnmounted(() => {
  if (ifixit && ifixit.stop) ifixit.stop();
});

async function sendMessage() {
  const text = userInput.value.trim();
  if (!text) return;

  if (/^(mostrar guia completo|mostrar guia|ver guia completo)$/i.test(text)) {
    const lastGuide = Array.from(fullGuides.values()).pop();
    if (lastGuide) {
      messages.value.push({ role: 'assistant', content: lastGuide });
    } else {
      messages.value.push({ role: 'assistant', content: 'Nenhum guia completo armazenado para mostrar.' });
    }
    userInput.value = '';
    return;
  }

  messages.value.push({ role: 'user', content: text });
  userInput.value = '';

  const assistantIndex = messages.value.push({ role: 'assistant', content: 'Pensando...' }) - 1;

  try {
    const replyText = await callGeminiDirect(messages.value);
    messages.value[assistantIndex].content = replyText || '[sem conteúdo retornado]';
  } catch (err) {
    console.error('Erro ao chamar Gemini:', err);
    messages.value[assistantIndex].content = 'Erro ao chamar Gemini: ' + (err && err.message ? err.message : String(err));
  }
}
</script>

<template>
  <Header />
  <main>
    <div class="chat-container">
      <Transition name="titulo-transicao">
        <h1 v-if="!messages.length >= 1">Olá, como posso te ajudar?</h1>
      </Transition>
      <Transition name="mensagem-transicao">
        <div v-show="messages.length >= 1" class="messages">
          <div v-for="(msg, idx) in messages" :key="idx" :class="msg.role === 'user' ? 'msg-user' : 'msg-assistant'">
            <strong>{{ msg.role === 'user' ? '' : '' }}</strong>
            <VMarkdownView mode="transparent" :content="msg.content" />
          </div>
        </div>
      </Transition>

      <p class="input-area">
        <input v-model="userInput" @keyup.enter="sendMessage" placeholder="Digite algo que deseja consertar..." />
        <button @click="sendMessage" aria-label="Enviar mensagem">
          <img src="/public/enviar-mensagem 1.png" alt="Enviar" />
        </button>
      </p>
    </div>
  </main>
  <Footer />
</template>




<style>

main{
  flex: 1;
  min-height: 83.5dvh;
}

.titulo-transicao-enter-active,
.titulo-transicao-leave-active {
  transition: all 0.8s ease-out;
}

.titulo-transicao-enter-from,
.titulo-transicao-leave-to {
  opacity: 0;
}

.mensagem-transicao-enter-active,
.mensagem-transicao-leave-active {
  transition: opacity 0.8s ease-in 0.8s;
}

.mensagem-transicao-enter-from,
.mensagem-transicao-leave-to {
  opacity: 0;
  transform: translateY(-20px) scale(0.95);
  filter: blur(1px);
}


.chat-container {
  max-width: 78.125vw;
  margin: auto;
  border: 1px solid #cccccc00;
  padding: 5vw;
}

.chat-container h1 {
  text-align: center;
  font-size: 2vw;
  margin: 0 0 10vw 0;
}

.messages {
  font-size: 0.8vw;
  margin: 0 0 1vw 0;
  flex-direction: column;
  display: flex;
  box-shadow: 0px 0px 2vw 5px rgba(69, 133, 211, 0.102);
  border-radius: 20px;
  max-height: 26.8vw;
  min-height: 26.8vw;
  overflow: auto;
}

.msg-user {
  align-self: flex-end;
  display: inline-block;
  color: #343F43;
  text-align: right;
  margin: 2vw 3.8vw 0 20vw;
  background-color: #4585d310;
  padding: 1vw 1vw 1vw 1vw;
  border-radius: 10px;
  width: fit-content;
  max-width: 50%;
}

.msg-assistant {
  align-self: flex-start;
  display: inline-block;
  text-align: left;
  color: black;
  margin: 1vw 20vw 2vw 3.8vw;
  padding: 1vw 1vw 1vw 1vw;
  width: fit-content;
  max-width: 83.5%;
  border-radius: 10px;
  border: 1px solid #3866a328;
}

.input-area {
  border-radius: 1.875rem;
  font-size: 1vw;
  border: 0.0625rem solid #4585d38b;
  display: flex;
  top: 85%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  position: absolute;
}

input[type="text"],
input {
  flex: 1;
  padding: 8px;
  border: none;
  background: none;
  outline: none;
  font-size: 0.8vw;
  color: #343F43;
  margin: 0 0 0 1vw;
}

button {
  padding: 8px 12px;
  background: white;
  border: none;
  background: none;
  font-size: 0.2vw;
  
}

button img {
  max-width: 1.4vw;
  margin: 0 0.7vw 0 0;
  transform: rotate(-90deg);
}
</style>
