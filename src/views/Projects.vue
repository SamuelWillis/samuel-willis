<template>
  <div id="projects">
    <project
       v-for="project in projects"
       :key="project.title"
       v-bind="project"
    ></project>
  </div>
</template>

<script>
import Project from '@/components/project/Project.vue';

export default {
  name: 'projects',
  components: {
    Project,
  },
  data() {
    return {
      projects: [
        {
          title: 'samuelwillis.dev',
          kind: 'github',
          link: 'https://github.com/SamuelWillis/samuel-willis',
          description: 'A small website for myself.',
        },
        {
          title: 'OTB',
          kind: 'misc',
          link: 'https://www.offtheback.cc',
          description: 'A small bicycle collective started by myself and two other friends.',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
#projects {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-row-gap: $base-unit-4;
  grid-column-gap: $base-unit-4;
  padding: $base-unit-2;
}
</style>
