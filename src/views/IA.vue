<script setup>
  import Header from '@/components/Header.vue';
  import Footer from '@/components/Footer.vue';
  import { watch } from 'vue'
  import { ref } from 'vue'
  import { VMarkdownView } from 'vue3-markdown'
import 'vue3-markdown/dist/vue3-markdown.css'
    const API_KEY = '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'
    const MODEL_ID = 'deepseek/deepseek-r1:free'  // Modelo DeepSeek R1 (free)
    
    const messages = ref([])
    const userInput = ref('')


    fetch("https://openrouter.ai/api/v1/chat/completions", {
  method: "POST",
  headers: {
    'Authorization': 'Bearer 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',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    model: 'deepseek/deepseek-r1:free',
    messages: [
      { role: 'user', content: 'Você é um assistente objetivo e factual. Formate APENAS o guia recebido no estilo iFixit seguindo estritamente: Saída em português. Exatamente: título, seção "O que você precisa:" e passos numerados. Sem texto adicional. Se incerto, responda: "Preciso de mais informações ou de uma avaliação física". Produza apenas o conteúdo final; NÃO revele pensamentos internos, raciocínios, autodiálogo, planos mentais ou etapas de tomada de decisão.' }
    ],
    stream: true,
    temperature: 0.0
  })
});


function initIFixitScraper(messagesRef) {
  function shouldScrapeMessage(text = '') {
    const t = String(text).toLowerCase();
    if (!t) return false;
    if (t.includes('pt.ifixit.com') || t.includes('ifixit')) return true;
    if (t.includes('guia') || t.includes('tutorial') || t.includes('passo a passo') || t.includes('passo-a-passo') || t.includes('passo-passo') || t.includes('receita') || t.includes('corrig') || t.includes('refaz') || t.includes('restaur') || t.includes('refaz') || t.includes('consert') || t.includes('arrum') || t.includes('como arrum') || t.includes('ajeit') || t.includes('como ajeit') || t.includes('dar um jeito') || t.includes('repar') || t.includes('como repar') || t.includes('emend') || t.includes('troc') || t.includes('como troc') || t.includes('como consert')) return true;
    return false;
  }

  function extractIfixitUrls(text = '') {
    const re = /https?:\/\/pt\.ifixit\.com\/Guide[^\s'")<>]*/gi;
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


  let initialized = false;
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
        let reply = '';
        if (data.title) reply += `**Guia:** ${data.title}\n\n`;
        if (data.needs) reply += `**O que você precisa:**\n${data.needs}\n\n`;
        if (data.steps && data.steps.length) {
          reply += '**Passos:**\n';
          data.steps.forEach((s, i) => {
            const short = s.length > 1000 ? s.slice(0, 1000) + '…' : s;
            reply += `${i + 1}. ${short}\n`;
          });
        } else {
          reply += 'Nenhum passo encontrado no guia.';
        }
        messagesRef.value[assistantIndex].content = reply;
      } catch (err) {
        messagesRef.value[assistantIndex].content = 'Erro ao obter o guia do iFixit: ' + (err && err.message ? err.message : String(err));
      }
    } catch (err) {
      console.error('Erro no watcher iFixit:', err);
    }
  });

  initialized = true;

  return {
    stop: () => {
      if (stop) stop();
    }
  };
}

const ifixit = initIFixitScraper(messages);


async function sendMessageStream() {
  const text = userInput.value.trim()
  if (!text) return

  messages.value.push({ role: 'user', content: text })
  userInput.value = ''

  const assistantIndex = messages.value.push({ role: 'assistant', content: '' }) - 1

  const payload = {
    model: MODEL_ID,
    messages: messages.value,
    stream: true,
    temperature: 0.0,
    top_p: 0.8
  }

  try {
    const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })

    if (!res.ok) {
      messages.value[assistantIndex].content = `Erro: ${res.status} ${res.statusText}`
      return
    }

    if (!res.body) {
      const data = await res.json()
      const botMessage = data.choices?.[0]?.message?.content ?? data.choices?.[0]?.text ?? '[sem conteúdo]'
      messages.value[assistantIndex].content = botMessage
      return
    }

    const reader = res.body.getReader()
    const decoder = new TextDecoder('utf-8')
    let buffer = ''
    let streamDone = false

    while (!streamDone) {
      const read = await reader.read()
      if (read.done) break

      buffer += decoder.decode(read.value, { stream: true })

      let nlIndex
      while ((nlIndex = buffer.indexOf('\n')) !== -1) {
        const line = buffer.slice(0, nlIndex).trim()
        buffer = buffer.slice(nlIndex + 1)

        if (!line) continue
        if (!line.startsWith('data:')) continue

        const payloadStr = line.replace(/^data:\s*/, '')

        if (payloadStr === '[DONE]') {
          streamDone = true
          break
        }

        try {
          const parsed = JSON.parse(payloadStr)
          const delta = parsed?.choices?.[0]?.delta?.content
          const msgContent = parsed?.choices?.[0]?.message?.content
          const textChunk = parsed?.choices?.[0]?.text
          const chunk = delta ?? msgContent ?? textChunk
          if (chunk) messages.value[assistantIndex].content += chunk
        } catch (e) {
          continue
        }
      }
    }

    if (buffer.trim()) {
      const lines = buffer.split('\n').map(l => l.trim()).filter(Boolean)
      for (const line of lines) {
        if (!line.startsWith('data:')) continue
        const payloadStr = line.replace(/^data:\s*/, '')
        if (payloadStr === '[DONE]') break
        try {
          const parsed = JSON.parse(payloadStr)
          const delta = parsed?.choices?.[0]?.delta?.content
          const msgContent = parsed?.choices?.[0]?.message?.content
          const textChunk = parsed?.choices?.[0]?.text
          const chunk = delta ?? msgContent ?? textChunk
          if (chunk) messages.value[assistantIndex].content += chunk
        } catch (e) {}
      }
    }

  } catch (err) {
    console.error('Erro no stream:', err)
    messages.value[assistantIndex].content = 'Erro de rede ou parsing do stream.'
  }
}




</script>

<template>
  <Header />
  <div class="chat-container">
  <h1>Olá, como posso te ajudar?</h1>
    <div class="messages">
      <div 
        v-for="(msg, idx) in messages" 
        :key="idx" 
        :class="msg.role === 'user' ? 'msg-user' : 'msg-assistant'"
      >
        <strong>{{ msg.role === 'user' ? 'Você' : 'Assistente' }}:</strong>
          <VMarkdownView
            mode="light"
            :content="msg.content">  
          </VMarkdownView>


        <!-- {{ msg.content }} -->
      </div>
    </div>
    <p class="input-area">

      <input 
        v-model="userInput" 
        @keyup.enter="sendMessageStream" 
        placeholder="Digite algo que deseja concertar..."
      />
      <button @click="sendMessageStream">
        <img src="/public/enviar-mensagem 1.png"></img>
      </button>
    </p>
  </div>
  <Footer />
</template>


<style>

.chat-container {
  max-width: 78.125vw; 
  margin: auto; 
  border: 1px solid #cccccc00; 
  padding: 5vw;
}

.chat-container h1 {
  text-align: center;
  font-size: 2vw;
  margin: 0 0 15vw 0;
}

.messages {
  max-height: 700px; 
  overflow-y: auto; 
  margin: 0 0 1vw 0;
  flex-direction: column;
  display: flex;
}
.msg-user {
  align-self: flex-end;
  display: inline-block;
  color: #343F43; 
  text-align: right;
  margin: 5px 3.8vw 0 20vw;
  background-color: #3866a31f;
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
  margin: 1vw 0 0.5vw 3.8vw;
  padding: 1vw;
  width: fit-content;
  max-width: 83.5%;
  border-radius: 10px;
  border: 1px solid #3866a328;
}
.input-area {
  display: flex;
  border-radius: 30px;
  font-size: 1vw;
  border: 1px solid #3867A3;
}

input[type="text"], input {
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
}

</style>
