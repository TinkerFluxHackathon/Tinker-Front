<template>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400&display=swap" rel="stylesheet">

<main>
    <section class="login-section">
        <form>
          <h1>Login</h1>
            <div class="labels-inputs-login">
                <div class="nome-login">
                    <label for="email/name">Seu nome de Usuário / Seu email  </label> <br>
                <input type="text" id="email" name="email/name" placeholder="emaildecontato@gmail.com" required> <br>
                </div>
                
              <div class="senha-login">
                <label for="password">Sua Senha  </label> <br>
                <input type="password" id="password" name="password" placeholder="42069" required>
              </div>
                
            </div>

            <nav>
                <router-link to="/" class="home-link">
                    Continuar
            </router-link>

            </nav>

        </form>

    </section>
</main>
</template>

<script setup>

</script>

<style scoped>

.senha-login {
    padding: 28px 0
}

form {
  margin: auto;
}

label {
    font-weight: 300;
    color: #FFFFFF;
    font-size: 20.5px;
}

.labels-inputs-login {
    line-height: 1.8vw;
    padding: 16px 34px 16px 34px;

}

input::placeholder {
font-weight: 200;
font-size: 18px ;
color: rgb(239, 239, 239);
}

input{
    width: 35vw;
    border: 1.5px solid #ccc;
    border-radius: 2.5px;
    background-color: #1C2532;
    padding: 5.3px;
}

section.login-section {
    margin: auto;
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
    padding: 13px 0 ;
}


main {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90vh;
}


</style>
