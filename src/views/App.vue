<script setup>

</script>

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
            <button type="submit" v-on="click">Continuar</button>
        </form>
    </section>
</main>
</template>

<style scoped>

</style>