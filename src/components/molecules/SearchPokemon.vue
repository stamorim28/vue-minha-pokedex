<template>
  <div class="search-poke">
    <input
      type="text"
      placeholder="Encontre um pokémon..."
      v-model="search"
      @keyup.enter="handleSearchPokemons(search)"
    />

    <ButtonSeeMore title="Buscar" @click="handleSearchPokemons(search)" />
  </div>
  <Loading v-if="loading" />
</template>

<script setup>
  import { usePokedexStore } from "../../../store";
  import { ref } from "vue";

  const search = ref("");
  const loading = ref(false);
  const store = usePokedexStore();
  const { searchPokemons } = store;

  async function handleSearchPokemons(value) {
    try {
      loading.value = true;
      await searchPokemons(value.toLowerCase());
    } catch (error) {
      alert(error);
      console.log(error);
    } finally {
      loading.value = false;
      search.value = "";
    }
  }
</script>

<style lang="scss" scoped>
  .search-poke {
    width: 100%;
    margin: 2rem 0;
    display: flex;
    justify-content: center;

    & input {
      width: 70%;
      padding: 0.75rem;
      border: none;
      background: $white;
      color: $black;

      &::placeholder {
        color: $black;
      }
    }

    @media (max-width: map-get($media-breakpoints, "sm")) {
      & input {
        width: 90%;
      }
    }
  }
</style>
