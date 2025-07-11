<template>
  <section class="highlights">
    <div class="assistente-container">
      <div class="assistente-info">
        <h1>Nosso Assistente Virtual</h1>
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"Lorem ipsum dolor sit amet, consectetur adipiscing.
        </p>
        <button class="assistente-btn">Clique aqui</button>
      </div>
      <div class="assistente-img">
        <img src="@/assets/daorinha2.0.png" alt="Assistente Virtual" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.highlights {
  background: #f6f8fa; /* cinza claro minimalista */
  padding: 3rem 4rem 15rem 10rem; /* padding lateral menor */
  border-radius: 8px;
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
  font-size: 4.5rem;         /* igual ao main-content h1 */
  font-weight: 600;
  margin-bottom: 2rem;
  color: #222;
}

.assistente-info p {
  font-size: 2rem;         /* menor que antes, se quiser */
  margin-bottom: 2rem;
  color: #444;
  max-width: 100%;         /* ocupa toda a largura possível */
  width: 100%;
  text-align: left;
  margin-left: 0;
  margin-right: 0;
}

.assistente-btn {
  background: #306bb4;
  color: #fff;
  border: none;
  padding: 1.5rem 2.5rem;
  border-radius: 6px;
  font-size: 2rem;
  width: 80%;
  cursor: pointer;
  font-weight: 500;
  transition: background 0.2s;
  display: block;
}

.assistente-btn:hover {
  background: #1558b0;
}

.assistente-img {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.assistente-img img {
  width: 25rem;
  height: auto;
}
</style>