<template>
  <div class="project">
    <a
      class="project__link"
      :href="link"
      target="_blank"
     >
      {{ title }}
    </a>
    <p class="project__description">{{ description }}</p>
  </div>
</template>

<script>
export default {
  name: 'project',
  props: {
    title: {
      required: true,
      type: String,
    },
    kind: {
      required: true,
      type: String,
    },
    description: {
      required: true,
      type: String,
    },
    link: {
      required: false,
      type: String,
      default: null,
    },
  },
};
</script>

<style lang="scss" scoped>
.project {
  padding: $base-unit-4;
}

.project__link {
  margin-bottom: $base-unit-4;
  font-size: rem(20px);
}
</style>
