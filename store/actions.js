import axios from "axios"

const resource = "https://pokeapi.co/api/v2/pokemon";

export default {
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
};
