<script setup>
</script>

<template>
  <header class="header">
    <nav>
       <router-link to="/home"> <span class="logo-text">tinkerflux</span></router-link>
    <router-link to="/home">Home </router-link>
    <router-link to="/products">Catálogo </router-link>
    <router-link to="/about">Sobre </router-link>
    <router-link to="/ia">IA</router-link>
    <router-link to="/contact">Contate-nos</router-link>
    </nav>
    <router-link to="/cart"><img src="/public/cart-image.svg" alt="cart-image" class="cart-link"></router-link>
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
  font-size: 1.7rem;
  margin-top: 0.5rem;
  font-weight: 500;
}

.cart-link {
  width: 2.5rem;
  height: 2.5rem;
  margin: 1.3rem 0 0 0;
}
</style>
