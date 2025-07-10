<script setup>
</script>

<template>
  <header class="header">
    <nav class="cabecalho">
    <span class="logo-text">tinkerflux</span>
      <a href="#home">Home</a>
      <a href="#sobre">Sobre</a>
      <a href="#produtos">Produtos</a>
      <a href="#contato">Contato</a>
    </nav>
  </header>

</template>

<style scoped>
header {
  background-color: #4584d3;
  color: white;
  padding: 2rem 2rem 2rem 2rem; /* padding superior e inferior menores */
}
.cabecalho {
  display: flex;
  align-items: flex-start; /* Alinha tudo ao topo */
  padding: 0;
}

.logo-text {
  font-size: 4rem;
  font-weight: bold;
  margin-right: 50rem; /* Ajuste conforme necessário */
  margin-left: 5rem;
}

header a {
  color: white;
  text-decoration: none;
  margin-right: 3rem; /* Menor espaçamento entre os links */
  font-size: 2rem;
  margin-top: 1rem; /* Opcional: sobe ainda mais os links */
}
</style>
