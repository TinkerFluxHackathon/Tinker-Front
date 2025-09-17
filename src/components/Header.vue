<script setup>
</script>

<template>
  <header class="header">
    <nav class="cabecalho">
    <span class="logo-text">tinkerflux</span>
    <router-link to="/">Home </router-link>
    <router-link to="/products">Produtos </router-link>
    <router-link to="/about">Sobre </router-link>
      <router-link to="/login">Login </router-link>
    </nav>
  </header>

</template>

<style scoped>
header {
  background-color: #4584D3;
  color: white;
  position: fixed;
  z-index: 10;
  width: 100%;
  top: 0;
  left: 0;
  height: 6rem;
  display: flex;
  align-items: center;
}
.cabecalho {
  display: flex;
  align-items: flex-start;

}

.logo-text {
  font-size: 3rem;
  font-weight: bold;
  margin-right: 40rem;
  margin-left: 5rem;
}

header a {
  color: white;
  text-decoration: none;
  margin-right: 3rem;
  font-size: 2rem;
  margin-top: 0.5rem;
}
</style>
