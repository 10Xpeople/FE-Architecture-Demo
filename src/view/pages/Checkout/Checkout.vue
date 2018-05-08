<template>
  <div>
    <h1>Checkout</h1>
    <div v-if="isEmpty">
        <h5>Your cart is empty</h5>
        <router-link to="/">Continue Shopping</router-link>
    </div>
    <router-view v-else />
  </div>
</template>

<script type="text/javascript">
import { mapGetters } from 'vuex';

export default {
  name: 'Checkout',
  computed: {
    ...mapGetters('cart', ['isEmpty']),
  },
};
</script>
