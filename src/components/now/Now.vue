<template>
  <div id="now">
    <h3 class="now__title">{{ title }}</h3>
    <p
      class="now__line"
       v-for="(line, index) in description_lines"
       :key="index"
    >
      {{ line }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    description_lines: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
#now {
  margin-bottom: $base-unit-4;
}

.now__title {
  margin-bottom: $base-unit-2;
}

.now__line {
}
</style>
