<template>
  <div id="app">

    <nav-bar />
      <div class="app__content">
        <main class="app__main">
          <router-view />
        </main>
        <social-links />
      </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import SocialLinks from '@/components/SocialLinks.vue';

export default {
  name: 'app',
  components: {
    NavBar,
    SocialLinks,
  },
};
</script>

<style lang="scss" scoped>
  #app {
    @include layout;

    box-sizing: border-box;
    height: 100vh;
    max-height: 100vh;
    min-width: $bp-xs;
    display: flex;
    padding-top: $base-unit-15;
    padding-bottom: $base-unit-3;

    @include media($max: $bp-s) {
      padding-top: $base-unit-6;
      flex-direction: column;
    }
  }

  .app__content {
    display: flex;
    flex-direction: column;
    flex-grow: 2;
    justify-content: space-between;
  }

  .app__main {
    overflow: scroll;
    @include media($min: $bp-s) {
      max-height: 100%;
    }
  }
</style>
