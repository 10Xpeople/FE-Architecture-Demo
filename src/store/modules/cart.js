// This is the cart module for the Vuex store.
// It contains all data for the cart and defines all of the ways
// that this data can be modified

/* eslint-disable */
import Vue from 'vue';

// This is the data to be stored, products is a map of product ids to product objects
const state = {
  products: {
    // id
    // quantity
    // price
  },
  showCart: false,
}

// Getters allow us to have easy access to meaningful values that are calculated from 
// the existing data in the module's state
const getters = {

  itemsInCart: (state, getters) => getters.productArray
    .reduce((acc, product) => acc + product.quantity, 0),

  totalPrice: (state, getters) => getters.productArray
    .reduce((acc, product) => acc + product.price * product.quantity, 0)
    .toFixed(2),

  // This is just an array of the product objects in the state's products map,
  // used for easy looping 
  productArray: (state) => Object.values(state.products),

  isEmpty: (state, getters) => !getters.productArray.length,
};

// Mutations are functions that allow us to modify the state of this module.
// The state should only be modified using mutations and never modified directly.
const mutations = {
  ADD_ITEM: (state, product) => {
    if (state.products[product.id]) {
      state.products[product.id].quantity += product.quantity;
    } else {
      Vue.set(state.products, product.id, product);
    }
  },

  SET_ITEM_QUANTITY: (state, {id, quantity}) => {
    state.products[id].quantity = quantity;
  },

  REMOVE_ITEM: (state, id) => {
    Vue.delete(state.products, id);
  },

  SHOW_CART: (state) => {
    state.showCart = true;
  },

  HIDE_CART: (state) => {
    state.showCart = false;
  },
};

export default {
   namespaced: true,
   state,
   getters,
   mutations,
};
