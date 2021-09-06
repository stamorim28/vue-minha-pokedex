<template>
  <main>
    <div class="logo">
      <img src="../public/img/poke_logo.svg" alt="logo" loading="lazy" />
    </div>

    <Pokedex />
  </main>
  <!-- <img src="../public/img/back_poke1.png" alt="" /> -->
</template>

<script>
import Pokedex from "./components/Pokedex.vue";

export default {
  name: "App",
  components: {
    Pokedex,
  },
};
</script>

<style scoped>
main {
  width: 100%;
  min-height: 100vh;
  padding: 2rem 10%;
  background: linear-gradient(90deg, #ff7373, #7edb75, #88fbff);
  background-size: contain;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.logo {
  width: 100%;
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
}

.logo img {
  width: 30vw;
}

@media (max-width: 596px) {
  main {
    padding: 2rem 2.5%;
  }

  .logo img {
    width: 70vw;
  }
}
</style>
