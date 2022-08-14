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
