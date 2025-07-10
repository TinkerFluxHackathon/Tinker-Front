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
  background: linear-gradient(to bottom, #b7d7ff 0%, #e3f0fc 40%, #fff 100%);
  padding: 3rem 10rem 15rem 10rem;
  border: 1px solid #bcd;
  border-radius: 8px;
  margin: auto;
  text-align: left;
}
.main-content h1 {
  font-size: 8rem;
  font-weight: 700;
  margin-bottom: 2rem;
  color: #222;
}
.main-content p {
  font-size: 3rem;
  margin-bottom: 24px;
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
  background: #297be6;
  color: #fff;
  border: none;
  padding: 1.5rem 2.5rem;
  border-radius: 6px;
  font-size: 2rem;
  cursor: pointer;
  font-weight: 600;
  transition: background 0.2s;
  margin-top: 2rem;
}
.saiba-mais:hover {
  background: #1558b0;
}
</style>