<template>
  <div class="pagination">
    <button
      class="button-see-more"
      v-if="prev >= 26"
      @click="handlePrev()"
    >
      Anterior
    </button>
    <button
      class="button-see-more"
      v-if="next < 906"
      @click="handleNext()"
    >
      Próximo
    </button>
  </div>
  <!-- <Loading v-if="loading"/> -->
  <slot v-if="loading"/>
</template>

<script>
  import { usePokedexStore } from "../../../store";
  import { mapActions, mapState } from "pinia";
  import Loading from "../Loading"

  export default {
    name: "Pagination",
    components: {Loading},

    data() {
      return {
        loading: false,
      };
    },

    computed: {
      ...mapState(usePokedexStore, ["prev", "next"]),
    },

    methods: {
      ...mapActions(usePokedexStore, [
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

<style lang="scss" scoped>
  .pagination {
    width: 100%;
    margin: 1.5rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
