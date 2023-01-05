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
        <a
          href="/"
          rel="noopener noreferrer"
        >
          <img
            src="../public/img/poke_logo.svg"
            alt="logo"
            loading="lazy"
            id="top"
          />
        </a>
      </div>

      <section>
        <div class="search-poke">
          <input
            type="text"
            placeholder="Encontre um pokémon..."
            v-model="search"
            @keyup.enter="handleSearchPokemons(search)"
          />

          <button class="button-see-more" @click="handleSearchPokemons(search)">Buscar</button>
        </div>

        <Pagination>
          <Loading />
        </Pagination>

        <div class="container-pokemons">
          <ul
            class="bloco-pokemons"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <li v-for="pokemon in getPokemons" :key="pokemon.data.name">
              <Pokemon
                @click="handleModal(pokemon.data)"
                :skills="pokemon.data"
              />
            </li>
          </ul>
        </div>
      </section>
      <Pagination>
        <Loading />
      </Pagination>
      <Loading v-if="loading"/>
    </main>
    <transition>
      <PokemonSkillsModal v-if="show" />
    </transition>

  </div>
</template>

<script>
  import Pokemon from "@/components/Pokemon/index";
  import Pagination from "@/components/Pagination/index";
  import Loading from "@/components/Loading/index";
  import PokemonSkillsModal from "./partials/PokemonSkillsModal";
  import { usePokedexStore } from "../store";
  import { mapActions, mapState } from "pinia";

  export default {
    name: "App",
    components: {
      Pokemon,
      PokemonSkillsModal,
      Pagination,
      Loading
    },

    data() {
      return {
        search: "",
        loading: false,
      };
    },

    async created() {
      try {
        this.loading = !this.loading;
        await Promise.all([this.fetchPokemons()]);
      } catch (error) {
        alert(error);
        console.log(error);
      } finally {
        this.loading = !this.loading;
      }
    },

    computed: {
      ...mapState(usePokedexStore, ["pokemonsSkills", "getPokemon", "counter", "show", "prev", "next"]),

      getPokemons() {
        return this.pokemonsSkills;
      },

    },

    methods: {
      ...mapActions(usePokedexStore, [
        "fetchPokemons",
        "setPokemon",
        "setPaginationPrev",
        "setPaginationNext",
        "statusModal",
        "searchPokemons"
      ]),

      async handlePrev() {
        try {
          this.loading = !this.loading;
          await this.setPaginationPrev();
        } catch (error) {
          alert(error);
          console.log(error);
        } finally {
          this.loading = !this.loading;
        }
      },

      async handleNext() {
        try {
          this.loading = !this.loading;
          await this.setPaginationNext();
        } catch (error) {
          alert(error);
          console.log(error);
        } finally {
          this.loading = !this.loading;
        }
      },

      async handleSearchPokemons(value) {
        try {
          this.loading = !this.loading;
          await this.searchPokemons(value.toLowerCase());
        } catch (error) {
          alert(error);
          console.log(error);
        } finally {
          this.search = ""
          this.loading = !this.loading;
        }
      },

      handleModal(poke) {
        this.statusModal();
        this.setPokemon(poke);
      },
    },
  };
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
      padding: 0.75rem;
      border: none;
      background: $white;
      color: $black;

      &::placeholder {
        color: $black;
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

  .button-see-more {
      background: $dark-black;
      border: none;
      padding: 0.5rem;
      color: $white;
      font-weight: bold;
      cursor: pointer;

      &:hover {
        filter: drop-shadow(5px 5px $white);
        transition: all ease 0.3s;
      }
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

  .v-enter-active,
  .v-leave-active {
    transition: opacity 0.5s ease;
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }

</style>
