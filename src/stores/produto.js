import { ref } from 'vue'
import { defineStore } from 'pinia'
import ProdutoAPI from '@/api/produto'

const produtoApi = new ProdutoAPI()

export const useProdutoStore = defineStore('produto', () => {
  const produtos = ref([])

  async function getProdutos() {
    try {
      const data = await produtoApi.getProdutosAll()
      produtos.value = data
    } catch (error) {
      console.error('Erro no store ao buscar produtos:', error)
      throw error
    }
  }

  async function addProduto(produtoParaAdicionar) {
    try {
      const novoProduto = await produtoApi.addProduto(produtoParaAdicionar)
      // antes: estados.value.push(novoProduto) -> corrigido para produtos
      produtos.value.push(novoProduto)
    } catch (error) {
      console.error('Erro no store ao adicionar produto:', error)
      throw error
    }
  }

  async function updateProduto(produtoParaAtualizar) {
    try {
      // antes: produ.updateProduto -> corrigido para produtoApi.updateProduto
      const produtoAtualizado = await produtoApi.updateProduto(produtoParaAtualizar)
      const index = produtos.value.findIndex(pro => pro.id === produtoAtualizado.id)
      if (index !== -1) {
        produtos.value[index] = produtoAtualizado
      }
    } catch (error) {
      console.error('Erro no store ao atualizar produtos:', error)
      throw error
    }
  }

  async function deleteProduto(idParaExcluir) {
    try {
      await produtoApi.deleteProduto(idParaExcluir)
      produtos.value = produtos.value.filter(pro => pro.id !== idParaExcluir)
    } catch (error) {
      console.error('Erro no store ao excluir produto:', error)
      throw error
    }
  }

  return { produtos, getProdutos, addProduto, updateProduto, deleteProduto }
})
