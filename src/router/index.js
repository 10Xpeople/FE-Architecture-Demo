// All of the route files have been located next to the component
// that has the router-view component relying on those routes

import Vue from 'vue';
import Router from 'vue-router';
import routes from '@/routes';

Vue.use(Router);

export default new Router({
  routes,
});
