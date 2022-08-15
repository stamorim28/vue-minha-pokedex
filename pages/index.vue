<template>
  <div>
    <main>
      <div class="github">
        <a
          href="https://github.com/stamorim28"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="../public/img/gh.png" alt="github" />
        </a>
      </div>
      <div class="logo">
        <img src="../public/img/poke_logo.svg" alt="logo" loading="lazy" />
      </div>

      <section>
        <div class="search-poke">
          <input
            type="text"
            placeholder="Encontre um pokémon..."
            v-model="search"
          />
        </div>

        <div class="container-pokemons">
          <ul
            class="bloco-pokemons"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <li v-for="pokemon in searchPokemon" :key="pokemon.data.name">
              <Pokemon
                @click="handleModal(pokemon.data)"
                :skills="pokemon.data"
              />
            </li>
          </ul>
        </div>
      </section>
      <button class="button-see-more" v-if="counter < 906" @click="handleSeeMore()">Ver mais</button>
    </main>
    <transition>
      <PokemonSkillsModal v-if="show" />
    </transition>
  </div>
</template>

<script>
  import Pokemon from "@/components/Pokemon/index";
  import PokemonSkillsModal from "./partials/PokemonSkillsModal";
  import { usePokedexStore } from "../store";
  import { mapActions, mapState } from "pinia";

  export default {
    name: "App",
    components: {
      Pokemon,
      PokemonSkillsModal,
    },

    data() {
      return {
        search: "",
        show: false,
      };
    },

    async created() {
      await Promise.all([this.fetchPokemons()]);
    },

    computed: {
      ...mapState(usePokedexStore, ["pokemonsSkills", "getPokemon", "counter"]),

      getPokemons() {
        return this.pokemonsSkills;
      },

      getPokemonSkills(){
        return this.getPokemon
      },

      searchPokemon() {
        if (this.search == "" || this.search == " ") {
          return this.getPokemons;
        } else {
          return this.getPokemons.filter(
            (pokemon) => pokemon.data.name == this.search.toLowerCase()
          );
        }
      },
    },

    mounted(){
      console.log(this.counter)
    },

    methods: {
      ...mapActions(usePokedexStore, ["fetchPokemons", "setPokemon", "setPagination"]),

      showModal() {
        this.show = !this.show;
      },

      handleSeeMore(){
        this.setPagination()
      },

      handleModal(poke) {
        this.showModal();
        this.setPokemon(poke)
      },
    },
  };
</script>

<style lang="scss">
  main {
    width: 100%;
    min-height: 100vh;
    padding: 2rem 10%;
    background: linear-gradient(90deg, $bg-colors);
    background-size: contain;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .github {
    position: fixed;
    top: 2%;
    right: 2%;
    z-index: 2;
  }

  .logo {
    width: 100%;
    margin-bottom: 2rem;
    display: flex;
    justify-content: center;

    & img {
      width: 30vw;
    }
  }

  section {
    width: 100%;
  }

  .search-poke {
    width: 100%;
    margin: 2rem 0;
    display: flex;
    justify-content: center;

    & input {
      width: 70%;
      padding: 0.75rem 0;
      border: none;
      border-bottom: 2px solid $white;
      background: transparent;
      color: $white;

      &::placeholder {
        color: $white;
      }
    }
  }

  .container-pokemons,
  .bloco-pokemons {
    width: 100%;
  }

  .bloco-pokemons {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 1.5rem;
  }

  @media (max-width: map-get($media-breakpoints, "lg")) {
    .bloco-pokemons {
      grid-template-columns: repeat(4, 1fr);
      gap: 1rem;
    }
  }

  @media (max-width: map-get($media-breakpoints, "lg-m")) {
    .bloco-pokemons {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (max-width: map-get($media-breakpoints, "sm")) {
    main {
      padding: 2rem 2.5%;
    }

    .github {
      position: absolute;
    }

    .logo {
      margin-bottom: 0;

      & img {
        width: 70vw;
      }
    }

    .search-poke input {
      width: 90%;
    }

    .bloco-pokemons {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  .button-see-more{
    margin-top: 2rem;
    background: $dark-black;
    border: none;
    padding: .5rem;
    color: $white;
    font-weight: bold;
    cursor: pointer;

    &:hover{
      filter: drop-shadow(5px 5px $white);
      transition: all ease 0.3s;
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
