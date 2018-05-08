<template>
    <a
        @click.prevent="SHOW_CART"
        href="#"
        class="waves-effect waves-light btn"
    >
        <i class="material-icons left">shopping_cart</i>{{ itemsInCart }}
    </a>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'ViewCart',
  computed: {
    ...mapGetters('cart', ['itemsInCart']),
  },
  methods: {
    ...mapMutations('cart', ['SHOW_CART']),
  },
};
</script>
