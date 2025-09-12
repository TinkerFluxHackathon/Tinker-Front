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
  background: #4584D3;
  padding: 3rem 10rem 15rem 10rem;
  margin: auto;
  text-align: left;
}
.main-content h1 {
  font-size: 6rem;
  font-weight: 600;
  margin-bottom: 4rem;
  color: #ffffff;
}
.main-content p {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #ffffff;
}
.main-content h1,
.main-content p {
  max-width: 60%;
  width: 60%;

}
.saiba-mais {
  background: #ffffff;
  color: #414141;
  border: none;
  padding: 1.5rem 2.5rem;
  border-radius: 20px;
  font-size: 2rem;
  cursor: pointer;
  font-weight: 450;
  margin-top: 2rem;
  transition: all 0.3s ease;
}
.saiba-mais:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 3);
}
</style>
