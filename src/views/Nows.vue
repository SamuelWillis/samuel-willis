<template>
  <div id="nows">
    <h1 class="nows__title">What I'm doing now</h1>
    <now
     v-for="now in nows"
     :key="now.title"
     v-bind="now"
    />
  </div>
</template>

<script>
import now from '@/components/now/Now.vue';
import NOWS from '@/data/nows';

export default {
  components: {
    now,
  },
  data() {
    return {
      nows: NOWS,
    };
  },
};
</script>

<style lang="scss" scoped>
.nows__title {
  margin-bottom: $base-unit-4;
  font-size: rem(20px);
}
</style>
