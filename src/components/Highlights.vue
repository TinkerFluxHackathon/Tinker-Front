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
  background: #306bb4; /* cinza claro minimalista */
  padding: 10rem 4rem 15rem 10rem; /* padding lateral menor */
  box-sizing: border-box;
  text-align: left;
  border: 1px solid #306bb4; /* borda sutil */
  border-radius: 15px;
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
  font-size: 3.3rem;         /* igual ao main-content h1 */
  font-weight: 700;
  margin-bottom: 2rem;
  color: #fff;
}

.assistente-info p {
  font-size: 1.8rem;         /* menor que antes, se quiser */
  margin-bottom: 2rem;
  color: #f0e8e8;
  max-width: 100%;         /* ocupa toda a largura possível */
  width: 100%;
  text-align: left;
  margin-left: 0;
  margin-right: 0;
  margin-top: 5rem;
}

.assistente-btn {
  background: #fff;
  color: #306bb4;
  border: none;
  padding: 1.5rem 2.5rem;
  border-radius: 6px;
  font-size: 2rem;
  width: 80%;
  cursor: pointer;
  font-weight: 500;
  transition: background 0.2s;
  display: block;
  margin-top: 4rem;
}

.assistente-btn:hover {
  background: #c6ccd3;
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