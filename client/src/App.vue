<template>
  <div id="app">

    <nav-bar />
    <main class="content">
      <router-view />
    </main>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';

export default {
  name: 'app',
  components: {
    NavBar,
  },
};
</script>

<style lang="scss" scoped>
  #app {
    @include layout;

    box-sizing: border-box;
    height: 100%;
    max-height: 100vh;
    min-width: $bp-xs;
    display: flex;
    padding-top: $base-unit-15;
    padding-bottom: $base-unit-4;

    @include media($max: $bp-s) {
      padding-top: $base-unit-6;
      flex-direction: column;
    }
  }

  .content {
    flex-grow: 2
  }
</style>
