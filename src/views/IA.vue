<script setup>
  import { ref } from 'vue';
  import { VMarkdownView} from 'vue3-markdown'
  import 'vue3-markdown/dist/vue3-markdown.css'
  import { watch } from 'vue';

  const API_KEY = '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'
  const MODEL_ID = 'deepseek/deepseek-r1:free'

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
      {
        role: 'user', content: 'Você é um assistente objetivo e factual. Formate APENAS o guia recebido no estilo iFixit seguindo estritamente: Saída em português. Respectivamente: título, seção "O que você precisa:" e passos numerados. Sem texto adicional. Se incerto, responda: "Preciso de mais informações ou de uma avaliaçã física". Produza apenas o conteúdo final; não se autoanucie nem explique decisões.'}
    ],
    stream: true,
    // temperature: 0.0;
  })
});

function initIFixitScraper(messagesRef) {
  function palavrasCrapeMessage(text = '') {
    const t = String(text).toLowerCase();
    if (!t) {
      return false
    };
    if (t.includes('pt.ifixit.com') || t.includes('ifixit')) {
      return true;
    }
    if (t.includes('guia') || t.includes('tutorial') || t.includes('passo a passo') || t.includes('passo-a-passo') || t.includes('passo-passo') || t.includes('receita') || t.includes('corrig') || t.includes('refaz') || t.includes('restaur') || t.includes('refaz') || t.includes('consert') || t.includes('arrum') || t.includes('como arrum') || t.includes('ajeit') || t.includes('como ajeit') || t.includes('dar um jeito') || t.includes('repar') || t.includes('como repar') || t.includes('emend') || t.includes('troc') || t.includes('como troc') || t.includes('como consert')) {
      return true;
    return false;
    }
  }
} 

function extractIfixitUrls(text = '') {
  const re = /https?:\/\/pt\.ifixit\.com\/Guide[^\s'")<>]*/gi;
  const matches = Array.from(String(text).matchAll(re)).map(m => m[0]);
  return matches;
}

async function fetchHtml(url) {
  try {
    const res = await fetch(url, { method: 'GET'});
    if (!res.ok) {
      throw new Error('HTTP ' + res.status);
      return await res.text();
  } catch (err) {
    try {
      const proxy = 'https://api.alloworigins.win/raw?url=' + encodeURIComponent(url);
      const res2 = await fetch(proxy, {method: 'GET' });
      if (!res2.ok) {
        throw new Error('Proxy HTTP ' + res2.status);
        return await res2.text();
    } catch(err2) {
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









</script>

<template>
  <main>

  </main>
</template>
