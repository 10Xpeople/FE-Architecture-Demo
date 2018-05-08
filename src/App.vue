<docs>
  This component is the root component of the application.
  All other components rendered in the app are nested children
  of this component and its children
</docs>

<template>
  <div id="app">
    <!-- components are included using a custom tag with the name of the component -->
    <page-header />
    <div class="container" >
      <!--
        The router-view component renders a certain coomponent based on
        the current route (URL). Which component is rendered is set in ./routes.js
      -->
      <router-view />
    </div>
    <cart />
  </div>
</template>

<script>
import PageHeader from '@/view/layout/PageHeader/PageHeader';
import Cart from '@/view/components/Cart/Cart';

export default {
  name: 'App',
  components: {
    PageHeader,
    Cart,
  },
};
</script>

<style lang="scss">
  // SASS is used (with SCSS syntax) to facilitate easy branding (skinning)
  // There are alternatives, like CSS in JS, that may be better than SASS
  @import './scss/branding1';
  @import './scss/styles';
</style>
