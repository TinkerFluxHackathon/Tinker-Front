<script setup>

import Header from './components/Header.vue';
import MainContent from './components/MainContent.vue';
import Highlights from './components/Highlights.vue';
import Products from './components/EnterProducts.vue';
import Footer from './components/Footer.vue';

</script>

<template>
  <div id="app">
    <Header />
    <router-view/>
    <MainContent />
    <Highlights />
    <Products />
    <Footer />
  </div>
</template>

<style scoped>

</style>

