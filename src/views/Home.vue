<script setup>

import Header from '@/components/Header.vue';
import MainContent from '@/components/home/MainContentComponent.vue';
import Highlights from '@/components/home/AssistantComponent.vue';
import Products from '@/components/home/ProductsComponent.vue';
import Footer from '@/components/Footer.vue';
import AssistantComponent from '@/components/home/AssistantComponent.vue';

</script>

<template>
  <div id="app">
    <Header />
      <MainContent />
      <AssistantComponent />
    <Products />
    <Footer />
  </div>
</template>

<style scoped>

</style>

