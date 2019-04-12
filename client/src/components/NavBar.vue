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
    }

    .nav {
      display: flex;
      flex-direction: column;

      @include media($max: $bp-s) {
        align-items: flex-end;
      }


      .nav__link {
        padding: 0 $base-unit-2;
        color: black;
        text-transform: uppercase;
        text-decoration: none;
        transition: font-size 0.1s;

        &.active,
        &:hover,
        &:focus {
          text-decoration: underline;
          font-size: rem(20px);
        }
      }
    }
  }
</style>
