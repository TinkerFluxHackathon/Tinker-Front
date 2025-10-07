
<script setup>
  import { ref, onMounted } from 'vue';
  import axios from 'axios'

  const produtos = ref([]);
  
  onMounted( async () => {
    let response = await axios.get("https://tinker-backend-on5j.onrender.com/api/produtos/?format=json");
    produtos.value = response.get;
  });

</script>

<template>
  <div>
    <ul>
      <li v-for="produto in produtos" :key="produto.id">{{ produto.id }} - {{ produto.nome }} - {{ produto.preco }}</li>
    </ul>
  </div>
</template>