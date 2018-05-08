<template>
    <div class="add-to-cart">
        <input
            v-model="count"
            type="number"
            min="1"
            step="1"
        />
        <a
            @click.prevent="addToCart"
            href="#"
            class="waves-effect waves-light btn btn-floating"
            title="Add to cart"
        >
            <i class="material-icons">add</i>
        </a>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'AddToCart',
  data() {
    return {
      count: 1,
    };
  },
  props: ['product'],
  methods: {
    ...mapMutations('cart', ['ADD_ITEM']),
    addToCart() {
      this.ADD_ITEM({
        quantity: Number(this.count),
        ...this.product,
      });
    },
  },
};
</script>

<style scoped>
    .add-to-cart input {
        width: 40px;
        text-align: center;
    }
</style>
