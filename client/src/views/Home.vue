<template>
  <div class="home">
    <transition name="fade">
      <figure
        class="home__figure"
        v-show="imageLoaded"
      >
        <img
          class="home__image"
          src="/img/rock.jpg"
          alt="Samuel Bouldering"
          @load="onLoad"
          v-show="imageLoaded"
        />

        <figcaption
          class="home__caption"
          v-show="imageLoaded"
        >
          Killarney Lake, 2017
        </figcaption>
      </figure>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      imageLoaded: false,
    };
  },
  methods: {
    onLoad() {
      this.imageLoaded = true;
    },
  },
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
  margin-top: $base-unit-2;
  margin-left: $base-unit-2;
  text-transform: uppercase;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
