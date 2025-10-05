import { ref } from 'vue';
import { defineStore } from 'pinia';
import UsuarioAPI from '@/api/usuario';

const usuarioApi = new UsuarioAPI();

export const useUsuarioStore = defineStore('usuario', () => {
    const usuarios = ref([]);

    async function getUsuario() {
        try {
            const data = await usuarioApi.getUsuarioAll();
            usuarios.value = data;
        } catch (error) {
            console.error("Erro no store ao buscar estados:", error);
            throw error;
        }
    }
    
    async function addUsuario(usuarioParaAdicionar) {
        try {
            const novoUsuario = await usuarioApi.addUsuario(usuarioParaAdicionar);
            usuarios.value.push(novoUsuario);
        } catch (error) {
            console.error("Erro no store ao adicionar usuario:", error);
            throw error;
        }
    }

    async function updateUsuario(usuarioParaAtualizar) {
        try {
            const usuarioAtualizado = await usuarioApi.updateUsuario(usuarioParaAtualizar);
            const index = usuarios.value.findIndex(usu => usu.id === usuarioAtualizado.id);
            if (index !== -1) {
                usuarios.value[index] = usuarioAtualizado;
            }
        } catch (error) {
            console.error("Erro no store ao atualizar o usuário:", error);
            throw error;
        }
    }

    async function deleteUsuario(idParaExcluir) {
        try {
            await usuarioApi.deleteUsuario(idParaExcluir);
            usuarios.value = usuarios.value.filter(usu => usu.id !== idParaExcluir);
        } catch (error) {
            console.error("Erro no store ao excluir usuário:", error);
            throw error;
        }
        
    }

    return { usuarios, getUsuario, addUsuario, updateUsuario, deleteUsuario };


});