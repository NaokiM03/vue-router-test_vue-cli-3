import Vue from 'vue';
import Router from 'vue-router';

import page1 from './views/page1.vue';
import page2 from './views/page2.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: page1,
    },
    {
      path: '/page2',
      component: page2,
    },
  ],
});
