<template>
  <transition>
    <section v-if="show">
      <div :class="`modal box-pokemon ${getPokemon.types[0].type.name}`">
        <div class="modal__up">
          <div class="modal__up--img">
            <img :src="getImgPokemon" :alt="getPokemon.name" loading="lazy" />
          </div>
          <h1>{{ getPokemon.name + " " + "#" + getPokemon.id }}</h1>
        </div>
        <div class="modal__down">
          <div class="modal__down--body">
            <div>
              <span> height </span>
              <h3>{{ getHeight }} m</h3>
            </div>
            <div>
              <span> weight </span>
              <h3>{{ getWeight }} kg</h3>
            </div>
          </div>
          <div class="modal__down--abilities">
            <div>
              <span> abilities </span>
              <div v-for="pokemon in getAbilities" :key="pokemon.url">
                <h3>{{ pokemon.ability.name }}</h3>
              </div>
            </div>
          </div>
          <div class="modal__down--types">
            <p>types</p>
            <div v-for="pokemon in getTypes" :key="pokemon.url">
              <div :class="pokemon.type.name">
                <h3>{{ pokemon.type.name }}</h3>
              </div>
            </div>
          </div>
        </div>
        <div class="x-icon" @click="statusModal">
          <img src="../../../public/img/x-mark-24.png" alt="x-icon" />
        </div>
      </div>
    </section>
  </transition>
</template>

<script setup>
  import { usePokedexStore } from "../../../store";
  import { storeToRefs } from "pinia";
  import { computed, onBeforeMount } from "vue";

  const store = usePokedexStore();
  const { getPokemon, show } = storeToRefs(store);
  const { getPokemonsSkills, statusModal } = store;

  const getImgPokemon = computed(() => {
    return getPokemon.value.sprites.other["official-artwork"].front_default;
  });

  const getAbilities = computed(() => {
    return getPokemon.value.abilities.filter((abi) => abi.ability);
  });

  const getTypes = computed(() => {
    return getPokemon.value.types.filter((types) => types.type);
  });

  const getHeight = computed(() => {
    let height = getPokemon.value.height.toString();
    if (height.length >= 1) {
      return height / 10;
    } else if (height.length > 2) {
      return height / 100;
    }
  });

  const getWeight = computed(() => {
    let weight = getPokemon.value.weight.toString();
    if (weight.length > 1) {
      return weight / 10;
    } else if (weight.length > 2) {
      return weight / 100;
    }
  });

  onBeforeMount(async () => {
    try {
      await getPokemonsSkills(getPokemon.value.id);
    } catch (error) {
      alert(error);
      console.log(error);
    }
  });
</script>

<style lang="scss" scoped>
  section {
    width: 100%;
    padding: 2rem 7.5%;
    min-height: 100vh;
    position: fixed;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba($color: $black, $alpha: 0.5);
    z-index: 1;

    .box-pokemon {
      cursor: auto;
    }

    .modal {
      width: 100%;
      max-width: 620px;
      height: 500px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: column;
      position: relative;

      .x-icon {
        position: absolute;
        top: 2%;
        right: 2%;

        img {
          filter: none;
        }
      }

      &__up {
        display: flex;
        flex-direction: column;
        align-items: center;
        &--img {
          background: $white;
          width: 250px;
          height: 250px;
          border-radius: 50%;
        }

        & h1 {
          font-size: 1.5rem;
        }
      }

      &__down {
        width: 100%;
        height: 35%;
        padding: 1.25rem 2%;
        background: $dark-black;
        border-radius: 10px;
        display: flex;
        justify-content: space-around;
        align-items: flex-start;
        color: $white;

        &--body {
          & div {
            margin-bottom: 1rem;
          }
        }

        &--abilities {
          & div h3 {
            text-transform: capitalize;
          }
        }

        &--types {
          & p {
            margin-bottom: 0.5rem;
          }

          & div div {
            margin-bottom: 0.75rem;
            padding: 0.35rem;
            border-radius: 10px;

            h3 {
              text-shadow: 2px 2px 5px $gray;
            }
          }
        }
      }
    }

    .x-icon {
      cursor: pointer;
    }
  }
</style>
