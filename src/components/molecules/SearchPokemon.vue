<template>
  <div class="search-poke">
    <input
      type="text"
      placeholder="Encontre um pokémon..."
      v-model="search"
      @keyup.enter="handleSearchPokemons(search)"
    />

    <button class="button-see-more" @click="handleSearchPokemons(search)">
      Buscar
    </button>
  </div>
</template>

<script>
  import { usePokedexStore } from "@/store";
  import { mapActions } from "pinia";

  export default {
    data() {
      return {
        search: "",
      };
    },

    methods: {
      ...mapActions(usePokedexStore, ["searchPokemons"]),

      async handleSearchPokemons(value) {
        try {
          this.loading = !this.loading;
          await this.searchPokemons(value.toLowerCase());
        } catch (error) {
          alert(error);
          console.log(error);
        } finally {
          this.search = "";
          this.loading = !this.loading;
        }
      },
    },
  };
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
