<script setup>
</script>

<template>
  <section class="main-content">
    <h1>Soluções Inovadoras para Você</h1>
    <p>Descrição breve e cativante sobre o que a empresa oferece.</p>
    <button class="saiba-mais">Saiba mais</button>
  </section>
</template>

<style scoped>
.main-content {
  background: linear-gradient(to bottom, #b7d7ff 0%, #e3f0fc 40%, #f6f8fa 100%);
  padding: 3rem 10rem 15rem 10rem;
  margin: auto;
  text-align: left;
  border-radius: 15px;
}
.main-content h1 {
  font-size: 6rem;
  font-weight: 700;
  margin-bottom: 4rem;
  color: #222;
}
.main-content p {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #444;
}
.main-content h1,
.main-content p {
  max-width: 80%;
  width: 80%;
  text-align: left;
  margin-left: 0;
  margin-right: 0;
}
.saiba-mais {
  background: #4584D3;
  color: #fff;
  border: none;
  padding: 1.5rem 2.5rem;
  border-radius: 6px;
  font-size: 2rem;
  cursor: pointer;
  font-weight: 500;
  transition: background 0.2s;
  margin-top: 2rem;
}
.saiba-mais:hover {
  background: #1558b0;
}
</style>