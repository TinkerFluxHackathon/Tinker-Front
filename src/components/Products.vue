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
  <div class="catalogo-section">
    <h3>
    Clique no botão ao lado para acessar o nosso catálogo completo de produtos
  </h3>
  <img src="@/assets/arrow.svg" alt="arrow" class="catalogo-link" width="70" height="70"/>
  </div>
</section>
</template>

<style scoped>
.products {
  background: #f6f8fa;
  padding: 9rem 4rem 4rem 1rem;
  box-sizing: border-box;
  text-align: left;
  border-radius: 15px;
}
.products h1 {
  font-size: 4.5rem;
  font-weight: 600;
  margin-bottom: 5rem;
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
  transition: all 0.2s;
  display: block;
  margin-left: 2.7rem;
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
  margin-left: 2rem;
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
  margin-right: 10rem;
}

.catalogo-section {
  margin-top: 6rem;
  display: flex;
  justify-content: center;
}

.catalogo-section h3 {
  margin-top: 4px;
  font-size: 2.5rem;
  font-weight: 500;
  color: #223136;
}

.catalogo-link {
  cursor: pointer;
  margin-left: 2rem;
  transition: all 0.3s ease;
}

.catalogo-link:hover {
  transform: scale(1.1);
}
</style>
