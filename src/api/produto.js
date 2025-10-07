import axios from "axios";

const API_BASE_URL = "https://tinker-backend-on5j.onrender.com/api/";

export default class ProdutoAPI {
    async getProdutosAll() {
        try {
            const response = await axios.get(API_BASE_URL);
            return response.data;
        } catch (error) {
            console.error("Erro ao buscar produtos:", error);
            throw error;
        }
    }

    async addProduto(produto) {
        try {
            const response = await axios.post(API_BASE_URL, produto);
            return response.data;
        } catch (error) {
            console.error("Erro ao adicionar produto:", error);
            throw error;
        }
    }

    async updateProduto(produto) {
        try {
            const url = `${API_BASE_URL}${produto.id}/`;
            const response = await axios.put(url, produto);
            return response.data;
        } catch (error) {
            console.error("Erro ao atualizar produto:", error);
            throw error;
        }
    }

    async deleteProduto(id) {
        try {
            const url = `${API_BASE_URL}${id}/`;
            const response = await axios.delete(url);
            return response;
        } catch (error) {
            console.error("Erro ao excluir produto:", error);
            throw error;
        }
    }
}