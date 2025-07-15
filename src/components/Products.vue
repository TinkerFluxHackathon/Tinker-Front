<script setup>

</script>

<template>
<section class="products">
  <h1>Produtos</h1>
  <div class="product-list">
    <div class="product-item">
        <h2>Produto 1</h2>
      <img src="@/assets/furadeira.png" alt="Produto 1" />
        <p>Descrição breve do produto 1.</p>
        <button class="explore-btn">Ver mais</button>
    </div>
    <div class="product-item">
        <h2>Produto 2</h2>
      <img src="@/assets/furadeira.png" alt="Produto 2" />
        <p>Descrição breve do produto 2.</p>
        <button class="explore-btn">Ver mais</button>
    </div>
    <div class="product-item">
        <h2>Produto 3</h2>
      <img src="@/assets/furadeira.png" alt="Produto 3" />
        <p>Descrição breve do produto 3.</p>
        <button class="explore-btn">Ver mais</button>
    </div>
  </div>
</section>
</template>

<style scoped>
.products {
  background: #f6f8fa; /* cinza claro minimalista */
  padding: 3rem 4rem;
  border-radius: 8px;
  box-sizing: border-box;
  text-align: left;
}
.products h1 {
  font-size: 4.5rem;
  font-weight: 600;
  margin-bottom: 2rem;
  color: #222;
  padding-left: 6rem;
}
.explore-btn {
  background: #306bb4;
  color: #fff;
  border: none;
  padding: 1rem 7rem;
  border-radius: 6px;    
  font-size: 2rem;    
  cursor: pointer;
  font-weight: 500;
  transition: background 0.2s;
  display: block;
  margin-left: 4rem;
  border-radius: 15px;
  margin-top: 2rem;
}
.explore-btn:hover {
  background: #1558b0;
}
.product-list {
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
}
.product-item {
  flex: 1;
  text-align: center;
  background-color: #E5E5EA;
  padding: 0rem 0rem 3rem 0rem;
  margin: 0rem 3rem 0rem 3rem;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  border: 1px solid rgb(194, 187, 187);
}
.product-item img {
  width: 10rem;
  height: auto;
  margin-bottom: 2rem;
  margin-right: 3rem;
}
.product-item h2 {
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 6rem;
  color: #222;
  margin-right: 14rem;
}
</style>