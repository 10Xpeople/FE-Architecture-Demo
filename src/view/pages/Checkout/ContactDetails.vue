<template>
  <div>
    <h4>Shipping Information</h4>
    <contact-info-form
        @input="handleContactInput"
        :name="contactDetails.name"
        :phone="contactDetails.phone"
        :address="contactDetails.address"
    />
    <div class="right-align">
      <router-link
        to="/checkout/payment"
        class="btn"
        :class="{
          disabled: !contactDetailsComplete,
        }"
      >Next</router-link>
    </div>
    <div class="left-align">
      <router-link
        to="/"
      >&lt; Continue Shopping</router-link>
    </div>
  </div>
</template>

<script type="text/javascript">
import ContactInfoForm from '@/view/components/ContactInfoForm';
import { mapState, mapGetters, mapMutations } from 'vuex';

export default {
  name: 'ContactDetails',
  components: {
    ContactInfoForm,
  },
  computed: {
    ...mapState('checkout', ['contactDetails']),
    ...mapGetters('checkout', ['contactDetailsComplete']),
  },
  methods: {
    ...mapMutations('checkout', ['setDetail']),
    handleContactInput(e) {
      this.setDetail({
        collection: 'contactDetails',
        field: e.target.name,
        value: e.target.value,
      });
    },
  },
};
</script>
