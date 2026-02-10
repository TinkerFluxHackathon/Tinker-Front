<script setup></script>

<template>
    <div class="englishKey-image">
    </div>
    <section class="main-content">
      <div>
        <h1>Soluções Inovadoras para Você</h1>
        <p>
          Na TinkerFlux você aprende a consertar e melhorar seus eletrônicos com ajuda de nossa IA e
          encontra as peças certas para restaurar seus aparelhos.
        </p>
        <router-link to="/about" class="saiba-mais">Saiba mais </router-link>
      </div>
    </section>
</template>

<style scoped>


.main-content {
  background: url('/public/home/chave-inglesa.png') no-repeat;
  background-position: 140% 20%;
  padding: 3rem 10rem 15rem 10rem;
  margin: auto;
  text-align: left;
  background-color: #4584d3;
}

.main-content h1 {
  font-size: 6rem;
  font-weight: 600;
  margin-bottom: 4rem;
  color: #ffffff;
}
.main-content p {
  font-size: 2.1rem;
  margin-bottom: 4.5rem;
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
  padding: 1.2rem 2.1rem;
  border-radius: 20px;
  font-size: 2rem;
  cursor: pointer;
  font-weight: 450;
  margin-top: 2rem;
  transition: all 0.3s ease;
}
.saiba-mais:hover {
  transform: scale(1.05);
}
</style>
