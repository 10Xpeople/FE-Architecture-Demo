// This is the root of our Vuex store.
// It is separated into modules that each store a subset of the data

import Vue from 'vue';
import Vuex from 'vuex';
import cart from './modules/cart';
import checkout from './modules/checkout';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    cart,
    checkout,
  },
});
