<script setup>
import router from '@/router';
import { ref } from 'vue';
const email = ref('');
const password = ref('');
function linkToHome() {
  if (email.value !== '' && password.value !== '') {
    router.push('/');

  } else {
    alert('Por favor, preencha todos os campos.');
  }
}
</script>

<template>
  <main>
    <section class="login-section">
      <form>
        <h1>Login</h1>
        <div class="todo-conteudo-login">
          <div class="labels-inputs-login">
            <div class="nome-login">
              <label for="email/name">Seu nome de Usuário / Seu email </label>
              <input
              v-model="email"
                type="email"
                id="email"
                name="email/name"
                placeholder="Digite o seu email / Nome de usuário"
                class="input-preenchimento"
              />
            </div>

            <div class="senha-login">
              <label for="password">Sua Senha </label>
              <input
              v-model="password"
                type="password"
                id="password"
                name="password"
                placeholder="Digite a sua senha"
                class="input-preenchimento"
              />
            </div>

            <input type="radio" id="manter" name="manter" />
            <label for="manter" class="manter-logado">Manter-me logado</label>
          </div>
          <nav>
            <button class="home-link" type="submit" @click="linkToHome">
              Continuar
            </button> 
            </nav>
        </div>
        <router-link to="/sign" class="sign-link"> Clique aqui para cadastrar-se </router-link>
      </form>
    </section>
  </main>
</template>

<style scoped>

.sign-link {
  font-weight: 500;
  color: #ffffff;
  font-size: 18px;
  padding-left: 7.5px;
  margin-top: 15px;
}

nav {
  text-align: center;
  margin: 23px;
}

.home-link {
  font-weight: 700;
  padding: 10px 265px;
  font-size: 28px;
  color: #ffffff;
  border-radius: 12px;
  border: 2px solid #ffffff;
  background-color: #1c2532;
}

.todo-conteudo-login {
  padding: 1.2vw 0;
}

.manter-logado {
  font-weight: 300;
  color: #ffffff;
  font-size: 18px;
  padding-left: 7.5px;
}

.senha-login {
  padding: 28px 0;
}

label {
  font-weight: 300;
  color: #ffffff;
  font-size: 21.5px;
}

.labels-inputs-login {
  line-height: 1.8vw;
  padding: 16px 34px 16px 34px;
}

input::placeholder {
  font-weight: 200;
  font-size: 21px;
  color: rgb(239, 239, 239);
}

input.input-preenchimento {
  width: 35vw;
  border: 1.5px solid #ccc;
  border-radius: 2.5px;
  background-color: #1c2532;
  padding: 9px;
  color: #ffffff;
  font-size: 21px;
}

section.login-section {
  border: 2px solid #ffffff;
  border-radius: 4px;
  background-color: #1c2532;
  width: 40vw;
  height: 34vw;
  padding: 10px;
}

section.login-section h1 {
  letter-spacing: 3px;
  text-align: center;
  font-size: 4vw;
  font-weight: 600;
  color: #f5f7fa;
  border-bottom: 1px solid #ffffff;
  margin: 0 10vw 0 10vw;
}

main {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #1c2532;
}

</style>
