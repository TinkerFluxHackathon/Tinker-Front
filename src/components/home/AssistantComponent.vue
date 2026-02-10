<script setup>



</script>


<template>
  <section class="highlights">
    <div class="assistente-container">
      <div class="assistente-info">
        <h1>Nosso <span>Assistente Virtual</span></h1>
        <button class="assistente-btn">Clique aqui</button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.highlights {
  background: #ffffff;
  padding: 10rem 4rem 15rem 10rem;
  box-sizing: border-box;
  text-align: left;
}

.assistente-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
}

.assistente-info {
  flex: 1;
}

.assistente-info h1 {
  font-size: 3.3rem;
  font-weight: 700;
  margin-bottom: 2rem;
  color: #343F43;
}


.assistente-info h1 span {
  font-size: 3.3rem;
  font-weight: 700;
  margin-bottom: 2rem;
  color: #343F43;
  text-decoration: underline;
}

.assistente-info p {
  font-size: 1.8rem;
  margin-bottom: 2rem;
  color: #414141;
  margin-top: 5rem;
  font-weight: 500;
}

.assistente-btn {
  background: #4584D3;
  color: #fff;
  border: none;
  padding: 0.5rem 0.5rem;
  border-radius: 15px;
  font-size: 2rem;
  width: 80%;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
  margin-top: 4rem;
}

.assistente-btn:hover {
  transform: scale(1.05);
}

.assistente-img img {
  width: 25rem;
  height: auto;
}
</style>
