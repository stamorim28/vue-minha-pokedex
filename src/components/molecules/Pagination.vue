<template>
  <div class="pagination">
    <ButtonSeeMore title="Anterior" v-if="prev >= 26" @click="handlePrev()" />
    <ButtonSeeMore title="Próximo" v-if="next < 906" @click="handleNext()" />
  </div>
  <slot v-if="loading" />
</template>

<script setup>
  import { usePokedexStore } from "../../../store";
  import { ref } from "vue";
  import { storeToRefs } from "pinia";

  const search = ref("");
  const loading = ref(false);
  const store = usePokedexStore();
  const { prev, next } = storeToRefs(store);
  const { setPaginationPrev, setPaginationNext } = store;

  async function handlePrev() {
    try {
      loading.value = true;
      await setPaginationPrev();
    } catch (error) {
      alert(error);
      console.log(error);
    } finally {
      loading.value = false;
    }
  }

  async function handleNext() {
    try {
      loading.value = true;
      await setPaginationNext();
    } catch (error) {
      alert(error);
      console.log(error);
    } finally {
      loading.value = false;
    }
  }
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
