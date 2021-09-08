<template>
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
        <li v-for="pokemon in searchPokemon" :key="pokemon.url">
          <Pokemon :name="pokemon.name" :url="pokemon.url" />
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import "../assets/css/poketypes.css";
import Pokemon from "./Pokemon/Pokemon.vue";
import api from "../api/index";

export default {
  name: "Pokedex",
  components: {
    Pokemon,
  },
  data() {
    return {
      pokemons: [],
      search: "",
    };
  },
  created() {
    api
      .get(api.baseURL)
      .then((res) => {
        this.pokemons = res.data.results;
        // console.log(this.pokemons);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {},
  computed: {
    searchPokemon() {
      if (this.search == "" || this.search == " ") {
        return this.pokemons;
      } else {
        return this.pokemons.filter((pokemon) => pokemon.name == this.search.toLowerCase());
      }
    },
  },
};
</script>

<style>
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
