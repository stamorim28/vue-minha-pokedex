<template>
  <div>
    <main>
      <GitHub />
      <Logo />

      <section>
        <SearchPokemon />

        <Pagination>
          <Loading />
        </Pagination>

        <Container>
          <PokemonList />
        </Container>
      </section>

      <Pagination>
        <Loading />
      </Pagination>

      <Loading v-if="loading" />
    </main>

    <transition>
      <PokemonSkillsModal v-if="show" />
    </transition>
  </div>
</template>

<script setup>
  import { usePokedexStore } from "../../store";
  import { storeToRefs } from "pinia";
  import { ref, onBeforeMount } from "vue";

  const store = usePokedexStore();
  const { show } = storeToRefs(store);

  const { fetchPokemons } = store;
  const loading = ref(false);

  onBeforeMount(async () => {
    try {
      loading.value = true;
      await Promise.all([fetchPokemons()]);
    } catch (error) {
      alert(error);
      console.log(error);
    } finally {
      loading.value = false;
    }
  });
</script>

<style lang="scss">
  main {
    width: 100%;
    min-height: 100vh;
    padding: 2rem 10%;
    background: $bg-red;
    background-size: contain;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  section {
    width: 100%;
  }

  @media (max-width: map-get($media-breakpoints, "sm")) {
    main {
      padding: 2rem 2.5%;
    }
  }

  .v-enter-active,
  .v-leave-active {
    transition: opacity 0.5s ease;
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }
</style>
