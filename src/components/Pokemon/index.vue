<template>
  <div :class="`boxPokemon ${pokemon.type1}`">
    <img
      v-if="pokemon.id < 10"
      :src="
        `https://assets.pokemon.com/assets/cms2/img/pokedex/full/00${pokemon.id}.png`
      "
      :alt="name"
    />
    <img
      v-else-if="pokemon.id < 100"
      :src="
        `https://assets.pokemon.com/assets/cms2/img/pokedex/full/0${pokemon.id}.png`
      "
      :alt="name"
    />
    <img
      v-else
      :src="
        `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokemon.id}.png`
      "
      :alt="name"
    />
    <h1>{{ name }}</h1>
    <small>{{ pokemon.type2 }}</small>
  </div>
</template>

<script>
import api from "@/api";

export default {
  name: "Pokemon",
  props: {
    name: String,
    url: String,
  },
  data() {
    return {
      pokemon: {
        type1: "",
        type2: "",
        id: "",
      },
    };
  },

  created() {
    api
      .get(this.url)
      .then((res) => {
        this.pokemon.type1 = res.data.types[0].type.name;
        this.pokemon.type2 = res.data.types
          .map((typeInfo) => typeInfo.type.name)
          .join(" | ");
        this.pokemon.id = res.data.id;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {},
};
</script>

<style>
.boxPokemon {
  width: 100%;
  padding: 1rem;
  text-align: center;
  border-radius: 10px;
  filter: drop-shadow(5px 5px 5px #4d4d4d);
  cursor: pointer;
}

.boxPokemon img {
  filter: drop-shadow(5px 5px #fff);
  transition: all ease 0.3s;
}

.boxPokemon:hover img {
  transform: scale(1.1);
}

.boxPokemon h1 {
  text-transform: capitalize;
  color: #fff;
  text-shadow: 2px 2px 5px #707070;
}

.boxPokemon small {
  color: #fff;
  font-weight: bolder;
  text-shadow: 2px 2px 5px #707070;
}

@media (max-width: 576px) {
  .boxPokemon h1 {
    font-size: 1.25rem;
  }
}
</style>
