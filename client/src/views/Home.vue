<template>
  <div class="home">
    <figure class="home__figure">
      <img class="home__image" src="/img/rock.jpg" alt="Samuel Bouldering">
      <figcaption class="home__caption">killarney lake, 2017</figcaption>
    </figure>
  </div>
</template>

<script>
export default {
  name: 'home',
};
</script>

<style lang="scss" scoped>
.home {
  display: flex;
}

.home__figure {
  display: flex;

  @include media($max: $bp-l) {
    flex-direction: column;
  }
}

.home__image {
  height: auto;
  max-height: 70vh;
  max-width: 100%;
  transition: height 0.2s, width 0.2s;

  @include media($min: $bp-s) {
    max-height: 80vh;
  }
}

.home__caption {
  align-self: flex-end;
  margin-top: $base-unit;
  margin-left: $base-unit;
  text-transform: uppercase;
}
</style>
