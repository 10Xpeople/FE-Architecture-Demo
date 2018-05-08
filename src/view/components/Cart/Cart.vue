<template>
    <modal
        :show="showCart"
        @close="HIDE_CART"
        :fixedFooter="true"
    >
        <modal-content>
            <ul class="collection with-header">
                <li class="collection-header">
                  <h5 class="category">Your Cart</h5>
                </li>
                <li
                    v-for="product in productArray"
                    :key="product.id"
                    class="collection-item"
                ><div>
                    <span class="product-avatar">
                        {{ product.id }}
                    </span>
                    <span class="price"><strong>Price:</strong> ${{ product.price }}</span>
                    <div class="secondary-content">
                        <modify-cart-item :product="product"/>
                    </div>
                </div></li>
                <li
                    v-if="isEmpty"
                    class="collection-item center-align"
                >
                  Your cart is empty.
                </li>
                <li class="collection-item right-align">
                  <strong>Total:</strong> ${{ totalPrice }}
                </li>
            </ul>
        </modal-content>
        <modal-footer>
            <a
                @click.prevent="HIDE_CART"
                href="#"
                class="modal-close waves-effect btn-flat"
            >Continue Shopping</a>
            <router-link
                to="/checkout"
                class="modal-close waves-effect btn btn-cta"
                :class="{
                    disabled: isEmpty,
                }"
            >Go to Checkout</router-link>
        </modal-footer>
    </modal>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex';
import Modal from '@/view/layout/Modal/Modal';
import ModalContent from '@/view/layout/Modal/ModalContent';
import ModalFooter from '@/view/layout/Modal/ModalFooter';
import ModifyCartItem from './ModifyCartItem';

export default {
  name: 'Cart',
  components: {
    Modal,
    ModalContent,
    ModalFooter,
    ModifyCartItem,
  },
  computed: {
    ...mapState('cart', ['showCart']),
    ...mapGetters('cart', ['productArray', 'totalPrice', 'isEmpty']),
  },
  methods: {
    ...mapMutations('cart', ['HIDE_CART']),
  },
};
</script>

<style scoped>
    .price {
        padding: 0 1em;
    }
    .secondary-content {
        display: flex;
        align-items: center;
        height: 50px;
    }
</style>
