<template>
  <div class="bloco-pokemons" data-aos="fade-up" data-aos-duration="2000">
    <PokemonCard
      v-for="pokemon in getPokemons"
      :key="pokemon.data.name"
      @click="handleModal(pokemon.data)"
      :skills="pokemon.data"
    />
  </div>
</template>

<script>
  import { usePokedexStore } from "../../../store";
  import { mapActions, mapState } from "pinia";

  export default {
    computed: {
      ...mapState(usePokedexStore, ["pokemonsSkills"]),

      getPokemons() {
        return this.pokemonsSkills;
      },
    },

    methods: {
      ...mapActions(usePokedexStore, ["setPokemon", "statusModal"]),

      handleModal(poke) {
        this.statusModal();
        this.setPokemon(poke);
      },
    },
  };
</script>

<style lang="scss" scoped>
  .bloco-pokemons {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 1.5rem;

    @media (max-width: map-get($media-breakpoints, "lg")) {
      & {
        grid-template-columns: repeat(4, 1fr);
        gap: 1rem;
      }
    }

    @media (max-width: map-get($media-breakpoints, "lg-m")) {
      & {
        grid-template-columns: repeat(3, 1fr);
      }
    }

    @media (max-width: map-get($media-breakpoints, "sm")) {
      & {
        grid-template-columns: repeat(2, 1fr);
      }
    }
  }
</style>
