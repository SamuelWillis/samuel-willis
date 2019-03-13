<template>
  <header class="header" v-cloak>
    <h1 class="name">SAMUEL WILLIS</h1>

    <nav class="nav">
      <router-link
        class="nav__link"
        active-class="active"
        to="/"
        exact>
        HOME
      </router-link>
      <!--
        <router-link
          class="nav__link"
          active-class="active"
          to="/projects">
          PROJECTS
        </router-link>
        <router-link
          class="nav__link"
          active-class="active"
          to="/writing">
          WRITING
        </router-link>
        <router-link
          class="nav__link"
          active-class="active"
          to="/rides">
          RIDES
        </router-link>
      -->
    </nav>
  </header>
</template>

<style lang="scss" scoped>
  .header {
    display: flex;
    justify-content: space-between;
    margin-bottom: $base-unit-6;
    font-family: 'Oswald';
    text-align: right;

    @include media($min: $bp-s) {
      margin-right: $base-unit-12;
      flex-direction: column;
      justify-content: flex-start;
    }

    @include media($min: $bp-l) {
      margin-right: $base-unit-15;
    }

    .name {
      font-size: rem(24px);
      line-height: 1.5;
    }

    .nav {
      display: flex;
      flex-direction: column;

      @include media($max: $bp-s) {
        align-items: flex-end;
      }


      .nav__link {
        line-height: 1.5;
        color: black;

        &.active {
          text-decoration: none;
        }
      }
    }
  }
</style>
