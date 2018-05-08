// This is the cart module for the Vuex store.
// See ./cart.js for more general info about Vuex stores

/* eslint-disable */
import Vue from 'vue';

const state = {
  contactDetails: {
    name: '',
    address: '',
    phone: '',
  },
  paymentDetails: {
    name: '',
    address: '',
    phone: '',
    billingIsShipping: false,
    creditCardNumber: '',
  }
};

const getters = {
  // billing address can be same as shipping, so get address from contactDetails if 
  // "billingIsShipping" is true
  billingDetails(state) {
    if (state.paymentDetails.billingIsShipping) {
      return state.contactDetails;
    }
    return {
      name: state.paymentDetails.name,
      address: state.paymentDetails.address,
      phone: state.paymentDetails.phone,
    }
  },

  // returns true if all required contact fields are complete
  contactDetailsComplete({contactDetails}) {
    return !!contactDetails.name && contactDetails.address && contactDetails.phone;
  },

  // returns true if all required payment fields are complete
  // Note: "name", "address", and "phone" are required only if "billingIsShipping"
  // is false
  paymentDetailsComplete({paymentDetails, contactDetails}, getters) {
    return !!paymentDetails.creditCardNumber && (
      paymentDetails.name && paymentDetails.address && paymentDetails.phone ||
      getters.contactDetailsComplete && paymentDetails.billingIsShipping
    );
  },
};

const mutations = {
  setDetail(state, {collection, field, value}) {
    state[collection][field] = value;
  }
};

export default {
   namespaced: true,
   state,
   getters,
   mutations,
};
