<template>
  <div class="loading">
    <img src="../../../public/img/poke.png" alt="pokeball" />
  </div>
</template>

<script>

  export default {
    name: "Loading",
  };
</script>

<style lang="scss">
  .loading {
    width: 100%;
    min-height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba($color: $black, $alpha: 0.5);
    z-index: 5;

    & img {
      width: 200px;
      height: 200px;
      animation: rotation 1s infinite linear;
    }

    @keyframes rotation {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(359deg);
      }
    }
  }
</style>
