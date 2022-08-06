import { defineStore } from 'pinia'
import axios from "axios"
// import state from "./state";
// import getters from "./getters";
// import actions from "./actions";

export const usePokedexStore = defineStore('pokedex', {
  state: () => ({ pokemons: [] }),
  actions: {

      async fetchPokemons() {
        try {
          const data = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0")
            this.pokemons = data.data
          }
          catch (error) {
            alert(error)
            console.log(error)
        }
      }
  },
})

// export const usePokedexStore = defineStore('pokedex', {
//   state,
//   getters,
//   actions,
// })
