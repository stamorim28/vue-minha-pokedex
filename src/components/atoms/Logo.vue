<template>
  <div class="logo">
    <a href="/" rel="noopener noreferrer">
      <img
        src="../../public/img/poke_logo.svg"
        alt="logo"
        loading="lazy"
        id="top"
      />
    </a>
  </div>
</template>

<style lang="scss" scoped>
  .logo {
    width: 100%;
    margin-bottom: 2rem;
    display: flex;
    justify-content: center;

    & img {
      width: 30vw;
    }

    @media (max-width: map-get($media-breakpoints, "sm")) {
      & {
        margin-bottom: 0;

        & img {
          width: 70vw;
        }
      }
    }
  }
</style>
