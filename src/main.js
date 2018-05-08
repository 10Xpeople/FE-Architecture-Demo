// This file creates the Vue instance,
// including the Vue router, Vuex store, and root component (App)
// The instance takes control of and renders all Vue contents in the HTML element with id="app"

import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store/store';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
});
