import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Nows from './views/Nows.vue';
import Projects from './views/Projects.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects,
    },
    {
      path: '/now',
      name: 'now',
      component: Nows,
    },
  ],
});
