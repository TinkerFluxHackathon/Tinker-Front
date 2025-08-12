<template>
<main>
    <section class="login-section">
        <h1>Login</h1>
        <form>
            <div class="labels-inputs-login">
                <label for="email/name">Seu nome de Usuário / Seu email  </label> <br>
                <input type="text" id="email" name="email/name" required> <br>

                <label for="password">Sua Senha  </label> <br>
                <input type="password" id="password" name="password" required>
            </div>

            <nav>
                <router-link to="/home">

                  <div class="continue-button">
                    Continuar
                  </div>

            </router-link>
          
            </nav>
               
         
        </form>

    </section>
</main>
</template>

<script setup>

</script>

<style scoped>

.labels-inputs-login {
    font-weight: bold;
    color: #FFFFFF;
    font-size: 10px;
    line-height: 1.4vw;
    
}

input{
    width: 15vw;
    border: 1px solid #ccc;
    border-radius: 1px;
    background-color: #1C2532;
}

section.login-section {
    max-width: 400px;
    margin: auto;
    padding: 20px;
    border: 2px solid #ccc;
    border-radius: 8px;
    background-color: #1C2532;
}

section.login-section h1 {
    text-align: center;
    font-size: 2vw;
    font-weight: 500;
    color: #F5F7FA
}


</style>