<template>
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
    <div class="searchPoke">
      <input
        type="text"
        placeholder="Encontre um pokémon..."
        v-model="search"
      />
    </div>

    <div class="containerPokemons">
      <ul class="blocoPokemons" data-aos="fade-up" data-aos-duration="2000">
        <li v-for="pokemon in searchPokemon" :key="pokemon.name">
          <!-- <Pokemon :skills="getPokemons" /> -->
          <Pokemon :name="pokemon.name" :url="pokemon.url" />
        </li>
      </ul>
    </div>
  </section>
  </main>
</template>

<script>
import "@/assets/css/poketypes.css";
import Pokemon from "@/components/Pokemon/index";
import { usePokedexStore } from "../store";
import { mapActions, mapState } from 'pinia'

export default {
  name: "App",
  components: {
    Pokemon
  },

   data() {
    return {
      search: "",
    };
  },

  async created() {
      // this.fetchPokemons()
      await Promise.all([this.fetchPokemons(), this.fetchPokemonsSkills()]);
  },

  computed: {
    ...mapState(usePokedexStore, ['pokemons', 'pokemonsSkills']),

    getPokemons() {
      return this.pokemons.results
    },

    getPokemonsSkills() {
      return this.pokemonsSkills.data
    },

    searchPokemon() {
      if (this.search == "" || this.search == " ") {
        return this.getPokemons;
      } else {
        return this.getPokemons.filter((pokemon) => pokemon.name == this.search.toLowerCase());
      }
    },
  },

  // mounted() {
  //   console.log(this.getPokemons.map(pokemon => pokemon.name))
  // },

  methods: {
    ...mapActions(usePokedexStore, ['fetchPokemons', 'fetchPokemonsSkills'])
  }
}
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
}

.logo img {
  width: 30vw;
}

@media (max-width: 596px) {
  main {
    padding: 2rem 2.5%;
  }

  .github {
    position: absolute;
  }

  .logo {
    margin-bottom: 0;
  }

  .logo img {
    width: 70vw;
  }
}

section {
  width: 100%;
}

.searchPoke {
  width: 100%;
  margin: 2rem 0;
  display: flex;
  justify-content: center;
}

.searchPoke input {
  width: 70%;
  padding: 0.75rem 0;
  border: none;
  border-bottom: 2px solid #fff;
  background: transparent;
  color: #fff;
}

.searchPoke input::placeholder {
  color: #fff;
}

.containerPokemons,
.blocoPokemons {
  width: 100%;
}

.blocoPokemons {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1.5rem;
}

@media (max-width: 989px) {
  .blocoPokemons {
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
  }
}

@media (max-width: 810px) {
  .blocoPokemons {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 596px) {
  .searchPoke input {
    width: 90%;
  }

  .blocoPokemons {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
