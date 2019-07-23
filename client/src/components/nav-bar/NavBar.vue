<template>
  <header class="header" v-cloak>
    <h1 class="name">SAMUEL WILLIS</h1>

    <nav class="nav">
      <router-link
        class="nav__link"
        active-class="active"
        to="/"
        exact>
        Home
      </router-link>
      <router-link
        class="nav__link"
        active-class="active"
        to="/projects"
        exact>
        Projects
      </router-link>
      <router-link
        class="nav__link"
        active-class="active"
        to="/about"
        exact>
        About
      </router-link>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
  .header {
    display: flex;
    justify-content: space-between;
    margin-bottom: $base-unit-6;

    @include media($min: $bp-s) {
      margin-right: $base-unit-12;
      flex-direction: column;
      justify-content: flex-start;
    }

    @include media($min: $bp-l) {
      margin-right: $base-unit-15;
    }

    .name {
      padding: 0 $base-unit-2;
      font-size: rem(24px);
      white-space: nowrap;
    }

    .nav {
      display: flex;
      flex-direction: column;

      @include media($max: $bp-s) {
        align-items: flex-end;
      }


      .nav__link {
        position: relative;
        padding: 0 $base-unit-2;
        transition: font-size 0.1s;

        &.active,
        &:hover,
        &:focus {
          font-size: rem(20px);
        }


        &:focus {
          text-decoration: none;
        }
      }
    }
  }
</style>
