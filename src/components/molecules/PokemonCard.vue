<template>
  <div :class="`box-pokemon ${getPokemonFirstType}`">
    <img :src="getImgPokemon" :alt="skills.name" loading="lazy" />
    <h1>{{ skills.name }}</h1>
    <small>#{{ skills.id }}</small>
  </div>
</template>

<script setup>
  import { computed, ref } from "vue";

  const props = defineProps({
    skills: Object,
  });

  const skills = ref(props.skills);
  const getPokemonFirstType = computed(() => skills.value.types[0].type.name);

  const getImgPokemon = computed(() => {
    return skills.value.sprites.other["official-artwork"].front_default;
  });
</script>

<style lang="scss">
  .box-pokemon {
    width: 100%;
    padding: 1rem;
    text-align: center;
    border-radius: 10px;
    filter: drop-shadow(5px 5px 5px $dark-gray);
    cursor: pointer;
    position: relative;

    & img {
      filter: drop-shadow(5px 5px $white);
      transition: all ease 0.3s;
      z-index: 3;
    }

    &:hover img {
      transform: scale(1.1);
    }

    & h1 {
      text-transform: capitalize;
      color: $white;
      text-shadow: 2px 2px 5px $gray;

      @media (max-width: map-get($media-breakpoints, "sm")) {
        font-size: 1.25rem;
      }
    }

    & small {
      padding: 0.25rem;
      background-color: $dark-black;
      border-radius: 10px;
      color: $white;
      font-weight: bolder;
      position: absolute;
      top: 2%;
      left: 2%;
    }
  }
</style>
