import { defineStore } from 'pinia'
import axios from "axios"
// import state from "./state";
// import getters from "./getters";
// import actions from "./actions";

const resource = "https://pokeapi.co/api/v2/pokemon";

export const usePokedexStore = defineStore('pokedex', {
  state: () => ({ pokemons: [], pokemonsSkills: [] }),
  actions: {
      async fetchPokemons() {
        try {
            const data = await axios.get(resource + "?limit=151&offset=0")
            this.pokemons = data.data
          }
          catch (error) {
            alert(error)
            console.log(error)
        }
      },
      async fetchPokemonsSkills() {
        try {
            const getPokemonUrl = id => (resource + "/" + id)
            for (let i = 1; i < 150; i++) {
              this.pokemonsSkills.push(await axios.get(getPokemonUrl(i)))
            }
            this.pokemonsSkills = await Promise.all(this.pokemonsSkills)
          }
          catch (error) {
            alert(error)
            console.log(error)
        }
      },
  },
})

// export const usePokedexStore = defineStore('pokedex', {
//   state,
//   getters,
//   actions,
// })
