import axios from "axios";

const resource = "https://pokeapi.co/api/v2/pokemon";

export default {
  async fetchPokemons() {
    try {
      const skill = [];
      const getPokemonUrl = (id) => resource + "/" + id;
      for (let i = this.prev; i < this.next; i++) {
        skill.push(await axios.get(getPokemonUrl(i)));
      }
      const data = await Promise.all(skill);
      this.pokemonsSkills = data;
    } catch (error) {
      alert(error);
      console.log(error);
    }
  },

  async searchPokemons(search) {
    try {
      if (search.length > 0) {
        const data = await axios.get(resource + "/" + search);
        this.pokemonsSkills = [data];
      } else {
        await this.fetchPokemons();
      }
    } catch (error) {
      alert("Pokémon não encontrado! 😓");
      console.log(error);
    }
  },

  async getPokemonsSkills(id) {
    try {
      const data = await axios.get(resource + "/" + id);
      this.getPokemon = data.data;
    } catch (error) {
      alert(error);
      console.log(error);
    }
  },

  setPokemon(data) {
    this.getPokemon = data;
  },

  async setPaginationPrev() {
    if (this.prev >= 900) {
      this.next = this.next - 5;
    } else {
      this.next = this.next - 25;
    }
    this.prev = this.prev - 25;
    await this.fetchPokemons();
  },

  async setPaginationNext() {
    if (this.next >= 900) {
      this.next = this.next + 5;
    } else {
      this.next = this.next + 25;
    }
    this.prev = this.prev + 25;

    await this.fetchPokemons();
  },

  statusModal() {
    this.show = !this.show;
  },
};
