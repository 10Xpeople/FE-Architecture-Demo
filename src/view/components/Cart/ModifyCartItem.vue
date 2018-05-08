<template>
    <div class="add-to-cart">
        <input
            :value="product.quantity"
            @input="updateQuantity"
            type="number"
            min="1"
            step="1"
        />
        <a
            @click.prevent="REMOVE_ITEM(product.id)"
            href="#"
            title="Remove from cart"
        >
            <i class="material-icons right centered">delete</i>
        </a>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'ModifyCartItem',
  props: ['product'],
  methods: {
    ...mapMutations('cart', ['REMOVE_ITEM', 'SET_ITEM_QUANTITY']),
    updateQuantity(e) {
      const newVal = Math.round(e.target.value);
      this.SET_ITEM_QUANTITY({
        ...this.product,
        quantity: newVal > 0 ? newVal : 1,
      });
      this.$forceUpdate();
    },
  },
};
</script>

<style scoped>
    .add-to-cart input {
        width: 40px;
        text-align: center;
    }

    .centered {
      height: 50px;
      line-height: 50px;
    }
</style>
