<template>
  <nav>
    <div
        v-if="showSearch"
        class="nav-wrapper"
    >
      <nav-search
        @close="showSearch = false"
      />
    </div>
    <div
        v-else
        class="nav-wrapper"
    >
      <router-link to="/" class="brand-logo">nStock</router-link>
      <ul
        v-if="$route.matched[0].path !== '/checkout'"
        class="right hide-on-med-and-down"
      >
        <li><a
          @click.prevent="showSearch = true"
          href="#"
        ><i class="material-icons">search</i></a></li>
        <li><view-cart /></li>
      </ul>
    </div>
  </nav>
</template>

<script>
import ViewCart from '@/view/components/Cart/ViewCart';
import NavSearch from './NavSearch';

export default {
  name: 'PageHeader',
  data() {
    return {
      showSearch: false,
    };
  },
  components: {
    NavSearch,
    ViewCart,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .brand-logo {
    padding: 0 1em;
  }
</style>
