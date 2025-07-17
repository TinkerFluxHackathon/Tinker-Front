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

            <nav>
                <router-link to="/">

                  <button >

                    Continuar

                    </button>

            </router-link>
          
            </nav>
               
         
        </form>

    </section>
</main>
</template>

<script setup>

</script>

<style scoped>
section.login-section {
    max-width: 400px;
    margin: auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
}
section.login-section h1 {
  color: white;
}

</style>