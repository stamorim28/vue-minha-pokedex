<template>
  <transition>
    <section v-if="show">
      <div class="modal box-pokemon grass">
        <div class="modal__up">
          <div class="modal__up--img">
            <img
              src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"
              alt=""
            />
          </div>
          <h1>#1 Bulbasaur</h1>
        </div>
        <div class="modal__down">
          <div class="modal__down--body">
            <div>
              <span> height </span>
              <h3>0.7 m</h3>
            </div>
            <div>
              <span> weight </span>
              <h3>6.9 kg</h3>
            </div>
          </div>
          <div class="modal__down--abilities">
            <div>
              <span> abilities </span>
              <h2>Overgrow</h2>
            </div>
          </div>
          <div class="modal__down--types">
            <p>types</p>
            <div class="grass">
              <h3>grass</h3>
            </div>
            <div class="poison">
              <h3>poison</h3>
            </div>
          </div>
        </div>
        <!-- <div class="x-icon" @click="show = !show" @click="$emit='close'"> -->
        <div class="x-icon" @click="$emit='emitClick'">
          <img src="../../public/img/x-mark-24.png" alt="x-icon" />
        </div>
      </div>
    </section>
  </transition>
</template>

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

    .modal {
      width: 100%;
      max-width: 620px;
      height: 500px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: column;
      position: relative;
      // background-color: #30a7d7;
      // background: $white;

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
        &--img {
          background: $white;
          width: 250px;
          height: 250px;
          border-radius: 50%;
          // border: 5px solid $white;
          // left: 2%;
        }
      }

      &__down {
        width: 100%;
        height: 35%;
        padding: 1.5rem 5%;
        background: #313131;
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

        &--types {
          & p {
            margin-bottom: 0.5rem;
          }

          & div {
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
  }
</style>
