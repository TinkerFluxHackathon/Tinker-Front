<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const produtos = ref([])      
const loading = ref(true)
const errorMsg = ref(null)

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000', 
  withCredentials: true,           
})

onMounted(async () => {
  try {
    const response = await api.get('/api/produtos/') 
    console.log('AXIOS RESPONSE:', response)

    if (Array.isArray(response.data)) {
      produtos.value = response.data
    } else if (response.data && Array.isArray(response.data.results)) {
      produtos.value = response.data.results
    } else {
      produtos.value = response.data ?? []
    }

    console.log('produtos.value =>', produtos.value)
  } catch (err) {
    console.error('Erro ao buscar produtos (detalhes):', err)
    if (err.response) {
      console.error('status:', err.response.status)
      console.error('data:', err.response.data)
      console.error('headers:', err.response.headers)
    } else {
      console.error('request error / network:', err.message)
    }
    errorMsg.value = err.response?.data ?? err.message
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <section>
    <div v-if="loading">Carregando produtos...</div>
    <div v-else-if="errorMsg">Erro: {{ errorMsg }}</div>
    <div v-else>
      <ul v-if="produtos.length">
        <li v-for="produto in produtos" :key="produto.id">
          <div v-if="produto.fotoPrincipal">
            <h2>{{ produto.nome }}</h2>
            <img
              :src="(
                produto.fotoPrincipal.startsWith('http')
                  ? produto.fotoPrincipal
                  : `http://127.0.0.1:8000${produto.fotoPrincipal}`
              )"
              :alt="produto.nome"
            />
            <p>{{ produto.descricao }}</p>
          </div>
          <button>
            Ver mais
          </button>
        </li>
      </ul>

      <div v-else>
        Nenhum produto encontrado.
      </div>
    </div>
  </section>
</template>

<style scoped>
  div ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 1vw 1vw 1vw 1vw;
  }

  div ul li {
    margin: 0 10vw 3vw 0;
    list-style: none;
    width: 300px;
    height: auto;
    justify-content: center;
    border: 1px solid black;
    align-items: center;
  }

  div ul li h2 {
    text-align: center;
    font-weight: 400;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  div ul li p {
    height: 50px;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  div ul li img {
    width: 200px;
    height: auto;
    border: 1px solid black;
  }

  div ul li button {;
    background-color: #434343
  }


</style>