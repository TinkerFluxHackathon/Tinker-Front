<script setup>
  import { ref } from 'vue';
  import { VMarkdownView} from 'vue3-markdown'
  import 'vue3-markdown/dist/vue3-markdown.css'

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
</script>

<template>
  <main>

  </main>
</template>
