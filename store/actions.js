const resource = "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0";
export default function action() {
  return {
    async fetchPokemons({ commit }){
      const { data } = await this.$axios.$get(resource);
      commit("SET_POKEMONS", data);
    },
  }
};
