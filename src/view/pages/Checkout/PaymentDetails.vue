<template>
  <div>
    <h4>Payment Details</h4>
    <h6>Billing Address</h6>
    <p>
      <label>
        <input
            :checked="paymentDetails.billingIsShipping"
            @input="handleCheckboxInput"
            type="checkbox"
            name="billingIsShipping"
        />
        <span>Same as shipping address</span>
      </label>
    </p>
    <contact-info-form
        @input="handlePaymentInput"
        :name="0 ? paymentDetails.name : billingDetails.name"
        :phone="0 ? paymentDetails.phone : billingDetails.phone"
        :address="0 ? paymentDetails.address : billingDetails.address"
        :readonly="paymentDetails.billingIsShipping"
    />
    <h6>Payment Method</h6>
    <div class="input-field col s12">
      <input
        @input="handlePaymentInput"
        :value="paymentDetails.creditCardNumber"
        id="creditCardNumber"
        name="creditCardNumber"
        type="text"
        placeholder="Credit Card"
        autofill="off"
      >
    </div>
    <div class="right-align">
      <button
        @click="completeCheckout"
        class="btn btn-cta"
        :class="{
          disabled: !paymentDetailsComplete,
        }"
      >Complete Checkout</button>
    </div>
    <div class="left-align">
      <router-link
        to="/checkout/contact"
      >&lt; Return to shipping</router-link>
    </div>
  </div>
</template>

<script type="text/javascript">
import ContactInfoForm from '@/view/components/ContactInfoForm';
import { mapState, mapGetters, mapMutations } from 'vuex';

export default {
  name: 'PaymentDetails',
  components: {
    ContactInfoForm,
  },
  computed: {
    ...mapState('checkout', ['paymentDetails']),
    ...mapGetters('checkout', ['paymentDetailsComplete', 'billingDetails']),
  },
  methods: {
    ...mapMutations('checkout', ['setDetail']),

    handlePaymentInput(e) {
      this.setDetail({
        collection: 'paymentDetails',
        field: e.target.name,
        value: e.target.value,
      });
    },

    handleCheckboxInput(e) {
      this.setDetail({
        collection: 'paymentDetails',
        field: e.target.name,
        value: e.target.checked,
      });
    },

    completeCheckout() {
      // eslint-disable-next-line
      alert('You did it!');
    },
  },
};
</script>
