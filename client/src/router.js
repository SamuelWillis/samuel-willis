import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

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
      component: () => import(/* webpackChunkName: "about" */ './views/Projects.vue'),
    },
    {
      path: '/writing',
      name: 'writing',
      component: () => import(/* webpackChunkName: "about" */ './views/Writing.vue'),
    },
    {
      path: '/rides',
      name: 'rides',
      component: () => import(/* webpackChunkName: "about" */ './views/Rides.vue'),
    },
  ],
});