// This file defines the top level routes and which components should be rendered
// when the route matches the defined path

// Other projects have kept all route files under @/router, but I think it's
// easier to follow the code if they are kept in the same folder as the component
// that uses the router-view based on the route file

import HomePage from '@/view/pages/HomePage';
import CategoryPage from '@/view/pages/CategoryPage';
import Checkout from '@/view/pages/Checkout/Checkout';
import store from '@/store/store';
import checkoutRoutes from '@/view/pages/Checkout/routes';

export default [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
  },
  {
    path: '/category/:category',
    name: 'CategoryPage',
    component: CategoryPage,
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: Checkout,

    // Children are nested routes, e.g. /checkout/contact
    children: checkoutRoutes,

    // The router allows you to defined different methods, e.g., nav guards,
    // that add more control to the navigation.
    beforeEnter(to, from, next) {
      //
      // We don't want the cart modal open when the user is trying to check out
      store.commit('cart/HIDE_CART');

      // If the user is directly accessing a child route of /checkout, e.g., /checkout/payment let
      // them access it. Otherwise, see if they have completed any parts of the checkout process,
      // and redirect them to the route for the earliest stage that they have not completed.
      // Note that there is no exact /checkout route, only /checkout/**
      if (to.name !== 'Checkout') {
        return next();
      }
      const path = store.getters['checkout/contactDetailsComplete'] ? 'payment' : 'contact';
      return next(`${to.path}/${path}`);
    },
  },
];
