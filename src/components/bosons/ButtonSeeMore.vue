<template>
  <button class="button-see-more">
    {{ title }}
  </button>
</template>

<script setup>
  const props = defineProps({
    title: String,
  });
</script>

<style lang="scss" scoped>
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
</style>
