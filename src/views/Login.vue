<template>
<main>
    <section class="login-section">
        <h1>Login</h1>
        <form>
            <div>
                <label for="email">Seu email</label> 
                <input type="text" id="email" name="email" required>
            </div>
            <div>
                <label for="password">Sua Senha</label>
                <input type="password" id="password" name="password" required>
            </div>
            <button @click="enviar">Continuar</button>
        </form>
    </section>
</main>
</template>

<script setup>
function enviar(event) {
    event.preventDefault();

}
</script>

<style scoped>

</style>