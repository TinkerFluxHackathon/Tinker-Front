<script setup>
  import { ref } from 'vue';
  import { VMarkdownView} from 'vue3-markdown'
  import 'vue3-markdown/dist/vue3-markdown.css'

  const API_KEY = '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'
  const MODEL_ID = 'deepseek/deepseek-r1:free'

  const messages = ref([])
  const userInput = ref('')
  
</script>

<template>
  <main>

  </main>
</template>
