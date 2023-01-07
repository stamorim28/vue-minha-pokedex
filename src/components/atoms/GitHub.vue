<template>
  <div class="github">
    <a
      href="https://github.com/stamorim28"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src="../../../public/img/gh.png" alt="github" />
    </a>
  </div>
</template>

<style lang="scss" scoped>
  .github {
    position: fixed;
    top: 2%;
    right: 2%;
    z-index: 2;

    @media (max-width: map-get($media-breakpoints, "sm")) {
      & {
        position: absolute;
      }
    }
  }
</style>
