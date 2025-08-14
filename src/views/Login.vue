<template>
<main>
    <section class="login-section">
        <form>
          <h1>Login</h1>
            <div class="labels-inputs-login">
                <label for="email/name">Seu nome de Usuário / Seu email  </label> <br>
                <input type="text" id="email" name="email/name" placeholder="emaildecontato@gmail.com" required> <br>

                <label for="password">Sua Senha  </label> <br>
                <input type="password" id="password" name="password" placeholder="42069" required>
            </div>

            <nav>
                <router-link to="/home" class="button-to-home">
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

form {
  margin: auto;
}

label {
    font-weight: 370;
    color: #FFFFFF;
    font-size: 11px;
}

.labels-inputs-login {
    line-height: 1.4vw;

}

input::placeholder {
font-weight: 400;
color: #FFFFFF;
}

input{
    width: 17vw;
    border: 1px solid #ccc;
    border-radius: 1px;
    background-color: #1C2532;
    padding: 2.5px;
}

section.login-section {
    margin: auto;
    padding: 20px;
    border: 2px solid #ccc;
    border-radius: 8px;
    background-color: #1C2532;
    width: 33.4vw;
    height: 26vw;

}

section.login-section h1 {
    text-align: center;
    font-size: 2vw;
    font-weight: 500;
    color: #F5F7FA;
}

main {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 77vh;
}


</style>
