<template>
  <div class="about">
    <div class="about__description">
      <p class="about__what-am-i">
        I am a Software Developer in Victoria, BC.
      </p>

      <p class="about__employer">
        Currently employed at
        <a
          class="about__employer-link"
          href="https://www.benevity.com/"
          target="_blank"
          title="Current Employer - Benevity"
        >
        Benevity.
        </a>
       </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'about',
};
</script>

<style lang="scss" scoped>
.about {
  display: flex;
  flex-direction: column;
}

.about__description {
  margin-bottom: $base-unit-4;
}

.about__employer-link {
  text-transform: none;
}
</style>
