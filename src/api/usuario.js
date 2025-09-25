import axios from "axios";

const API_BASE_URL = "http://localhost:8000/api/usuario/";

export default class UsuarioAPI {
    async getUsuarioAll() {
        try {
            const response = await axios.get(API_BASE_URL);
            return response.data;
        } catch (error) {
            console.error("Erro ao buscar usuário:", error);
            throw error;
        }
    }

    async addUsuario(usuario) {
        try {
            const response = await axios.post(API_BASE_URL, usuario);
            return response.data;
        } catch (error) {
            console.error("Erro ao adicionar usuário:", error);
            throw error;
        }
    }
    async updateUsuario(usuario) {
        try {
            const url = `${API_BASE_URL}${usuario.id}/`;
            const response = await axios.put(url, usuario);
            return response.data;
        } catch (error) {
            console.error("Erro ao atualizar usuário:", error);
            throw error;
        }
    }

    async deleteUsuario(id) {
        try {
            const url = `${API_BASE_URL}${id}/`;
            const response = await axios.delete(url);
            return response;
        } catch (error) {
            console.error("Erro ao excluir usuário:", error);
            throw error;
        }
    }
}