<template>
  <section class="highlights">
    <h2>Destaques</h2>
    <div class="cards">
      <div class="card">
        <span class="icon">💎</span>
        <h3>Recurso 1</h3>
        <p>Lorem ipsum duommet consectetur sibrae o que a empresa ofe...</p>
      </div>
      <div class="card">
        <span class="icon">⚙️</span>
        <h3>Recurso 2</h3>
        <p>Lorem ipsum dojomet consectetur sobre a que erora deserunt.</p>
      </div>
      <div class="card">
        <span class="icon">⚡</span>
        <h3>Recurso 3</h3>
        <p>Lorem ipsum duama et consectetur aliquam et rudaerom ut.</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.highlights {
  padding: 3rem 0 2rem 0;
}
.highlights h2 {
  font-size: 2rem;
  margin-bottom: 2rem;
}
.cards {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
}
.card {
  background: #fff;
  border: 1px solid #e3eaf3;
  border-radius: 12px;
  padding: 2rem 1.5rem;
  flex: 1 1 220px;
  min-width: 200px;
  max-width: 260px;
  text-align: center;
  box-shadow: 0 2px 8px #0001;
}
.icon {
  font-size: 2rem;
  margin-bottom: 1rem;
  display: block;
}
</style>