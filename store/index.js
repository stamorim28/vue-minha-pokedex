import { defineStore } from 'pinia'
import axios from "axios"
// import state from "./state";
// import getters from "./getters";
// import actions from "./actions";

const resource = "https://pokeapi.co/api/v2/pokemon";

export const usePokedexStore = defineStore('pokedex', {
  state: () => ({ pokemonsSkills: [] }),
  actions: {
      async fetchPokemons() {
        try {
            const skill = []
            const getPokemonUrl = id => (resource + "/" + id)
            for (let i = 1; i < 152; i++) {
              skill.push(await axios.get(getPokemonUrl(i)))
            }
            const data = await Promise.all(skill)
            this.pokemonsSkills = data
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
