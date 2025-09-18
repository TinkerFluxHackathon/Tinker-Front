<script setup>
</script>

<template>
  <header class="header">
    <nav class="cabecalho">
    <span class="logo-text">tinkerflux</span>
      <a href="#home">Home</a>
      <router-link to="/about">Sobre nós</router-link>
      <a href="#produtos">Produtos</a>
      <a href="#contato">Contato</a>
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
  align-items: flex-start; /* Alinha tudo ao topo */

}

.logo-text {
  font-size: 3rem;
  font-weight: bold;
  margin-right: 40rem; /* Ajuste conforme necessário */
  margin-left: 5rem;
}

header a {
  color: white;
  text-decoration: none;
  margin-right: 3rem; /* Menor espaçamento entre os links */
  font-size: 2rem;
  margin-top: 0.5rem; /* Opcional: sobe ainda mais os links */
}
</style>
