<template>
  <div :class="`boxPokemon ${getPokemonType1}`">
    <img
      v-if="skills.id < 10"
      :src="
        `https://assets.pokemon.com/assets/cms2/img/pokedex/full/00${skills.id}.png`
      "
      :alt="skills.name"
    />
    <img
      v-else-if="skills.id < 100"
      :src="
        `https://assets.pokemon.com/assets/cms2/img/pokedex/full/0${skills.id}.png`
      "
      :alt="skills.name"
    />
    <img
      v-else
      :src="
        `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${skills.id}.png`
      "
      :alt="skills.name"
    />
    <h1>{{ skills.name }}</h1>
    <small>{{ getPokemonTypes }}</small>
  </div>
</template>

<script>

export default {
  name: "Pokemon",
  props: {
    skills: {
        type: Object,
        default: () => null,
      },
  },
  computed: {
    getPokemonType1(){
      return this.skills.types[0].type.name
    },

    getPokemonTypes(){
      return this.skills.types.map((typeInfo) => typeInfo.type.name).join(" | ");
    }
  },
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
