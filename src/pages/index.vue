<template>
  <div>
    <main>
      <GitHub />
      <Logo />

      <section>
        <SearchPokemon />

        <Pagination>
          <Loading />
        </Pagination>

        <Container>
          <PokemonList />
        </Container>
      </section>

      <Pagination>
        <Loading />
      </Pagination>

      <Loading v-if="loading" />
    </main>

    <transition>
      <PokemonSkillsModal v-if="show" />
    </transition>
  </div>
</template>

<script>
  import { usePokedexStore } from "../../store";
  import { mapActions, mapState } from "pinia";

  export default {
    name: "App",

    data() {
      return {
        loading: false,
      };
    },

    async created() {
      try {
        this.loading = !this.loading;
        await Promise.all([this.fetchPokemons()]);
      } catch (error) {
        alert(error);
        console.log(error);
      } finally {
        this.loading = !this.loading;
      }
    },

    computed: {
      ...mapState(usePokedexStore, [
        "getPokemon",
        "counter",
        "show",
        "prev",
        "next",
      ]),
    },

    methods: {
      ...mapActions(usePokedexStore, [
        "fetchPokemons",
        "setPaginationPrev",
        "setPaginationNext",
      ]),

      async handlePrev() {
        try {
          this.loading = !this.loading;
          await this.setPaginationPrev();
        } catch (error) {
          alert(error);
          console.log(error);
        } finally {
          this.loading = !this.loading;
        }
      },

      async handleNext() {
        try {
          this.loading = !this.loading;
          await this.setPaginationNext();
        } catch (error) {
          alert(error);
          console.log(error);
        } finally {
          this.loading = !this.loading;
        }
      },
    },
  };
</script>

<style lang="scss">
  main {
    width: 100%;
    min-height: 100vh;
    padding: 2rem 10%;
    background: $bg-red;
    background-size: contain;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  section {
    width: 100%;
  }

  .button-see-more {
    background: $dark-black;
    border: none;
    padding: 0.5rem;
    color: $white;
    font-weight: bold;
    cursor: pointer;

    &:hover {
      filter: drop-shadow(5px 5px $white);
      transition: all ease 0.3s;
    }
  }

  @media (max-width: map-get($media-breakpoints, "sm")) {
    main {
      padding: 2rem 2.5%;
    }
  }

  .v-enter-active,
  .v-leave-active {
    transition: opacity 0.5s ease;
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }
</style>
