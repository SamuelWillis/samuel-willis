<template>
  <div class="social">
    <p class="social__copy">
       Copyright <font-awesome-icon
       class="social__copy-icon"
       :icon="faCopyright" /> Samuel Willis, {{ year }}
    </p>
    <a
      class="social__link"
      href="mailto:samuel.w.h.willis@gmail.com"
      target="_blank"
      title="Email"
    >
      <font-awesome-icon :icon="faEnvelope"  :size="socialLinkSize" />
    </a>
    <a
      class="social__link"
      href="https://www.instagram.com/sam_nasty"
      target="_blank"
      title="Instagram Profile"
    >
      <font-awesome-icon :icon="faInstagram" :size="socialLinkSize" />
    </a>
    <a
      class="social__link"
      href="https://github.com/SamuelWillis"
      target="_blank"
      title="GitHub Profile"
    >
      <font-awesome-icon :icon="faGithubAlt"  :size="socialLinkSize" />
    </a>
    <a
      class="social__link"
      href="https://www.linkedin.com/in/willissamuel/"
      target="_blank"
      title="LinkedIn Profile"
    >
      <font-awesome-icon :icon="faLinkedinIn" :size="socialLinkSize" />
    </a>
    <a
      class="social__link"
      href="https://www.strava.com/athletes/7660837"
      target="_blank"
      title="Strava Profile"
    >
      <font-awesome-icon :icon="faStrava"  :size="socialLinkSize" />
    </a>
  </div>
</template>

<script>
import {
  faInstagram, faGithubAlt, faLinkedinIn, faStrava,
} from '@fortawesome/free-brands-svg-icons';
import { faCopyright, faEnvelope } from '@fortawesome/pro-light-svg-icons';

export default {
  name: 'social-links',
  data() {
    return {
      faCopyright,
      faEnvelope,
      faInstagram,
      faGithubAlt,
      faLinkedinIn,
      faStrava,
      socialLinkSize: '1x',
    };
  },
  computed: {
    year() {
      return (new Date()).getFullYear();
    },
  },
};
</script>

<style lang="scss" scoped>
.social {
  display: flex;
  align-items: center;
  margin-top: $base-unit-2;
  padding: $base-unit 0;
}

.social__copy {
  height: 100%;
  display: flex;
  flex-grow: 1;
  align-items: center;
  font-size: $font-size * 0.5;
}

.social__copy-icon {
  margin: 0 $base-unit;
}

.social__link {
  margin-right: $base-unit-4;
}
</style>
