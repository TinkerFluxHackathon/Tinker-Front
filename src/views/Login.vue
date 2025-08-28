<script setup>

</script>

<template>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400&display=swap" rel="stylesheet">

<main>
    <section class="login-section">
        <form>
          <h1>Login</h1>
            <div class="todo-conteudo-login">
               <div class="labels-inputs-login">
                <div class="nome-login">
                    <label for="email/name">Seu nome de Usuário / Seu email  </label> <br>
                <input type="text" id="email" name="email/name" placeholder="emaildecontato@gmail.com" required class="input-preenchimento"> <br>
                </div>

              <div class="senha-login">
                <label for="password">Sua Senha  </label> <br>
                <input type="password" id="password" name="password" placeholder="42069" required class="input-preenchimento">
              </div>

               <input type="radio" id="manter" name="manter">
              <label for="manter" class="manter-logado">Manter-me logado</label>
            </div>

            <nav>
                <router-link to="/" class="home-link">
                    Continuar
            </router-link>

            </nav>
            </div>


        </form>

    </section>
</main>
</template>

<style scoped>

.home-link {
    margin: 0 15.3vw;
    font-weight: 900;
    text-decoration: none;
    padding: 10px 20px;
    font-size: 20px;
    color: #FFFFFF;
    border-radius: 5px;
    margin-top: 20px;
    border: 2px solid #FFFFFF;
}

.todo-conteudo-login {
    padding: 1.2vw 0;
}

.manter-logado {
    font-weight: 300;
    color: #FFFFFF;
    font-size: 18px;
    padding-left: 7.5px;
}

.senha-login {
    padding: 28px 0
}

form {
  margin:
   auto;
}

label {
    font-weight: 300;
    color: #FFFFFF;
    font-size: 21.5px;
}

.labels-inputs-login {
    line-height: 1.8vw;
    padding: 16px 34px 16px 34px;

}

input::placeholder {
font-weight: 200;
font-size: 23px ;
color: rgb(239, 239, 239);
}

input.input-preenchimento {
    width: 35vw;
    border: 1.5px solid #ccc;
    border-radius: 2.5px;
    background-color: #1C2532;
    padding: 6.5px;
}

section.login-section {
    margin: auto;
    border: 2px solid #FFFFFF;
    border-radius: 4px;
    background-color: #1C2532;
    width: 40vw;
    height: 34vw;
    padding: 10px;

}

section.login-section h1 {
    letter-spacing: 3px;
    text-align: center;
    font-size: 4vw;
    font-weight: 600;
    color: #F5F7FA;
    border-bottom: 1px solid #FFFFFF;
     margin: 0 10vw 0 10vw;
}


main {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #1C2532;
}


</style>
