<template>
  <div class="row">
    <form class="col s12">
      <div class="row">
        <!-- this input container should be a component, but I was lazy -->
        <div class="input-field col s12">
          <input
            @focus="setFocused('name')"
            @blur="clearFocused('name')"
            @input="handleInput"
            :value="name"
            id="name"
            name="name"
            type="text"
            :readonly="readonly"
          >
          <label
            for="name"
            :class="{
              active: focused === 'name' || name,
            }"
          >Full Name</label>
          <span v-if="!readonly && invalid.name" class="error">{{ invalid.name }}</span>
        </div>
        <!--  -->
        <div class="input-field col s12">
          <input
            @focus="setFocused('phone')"
            @blur="clearFocused('phone')"
            @input="handleInput"
            :value="phone"
            id="phone"
            name="phone"
            type="text"
            :readonly="readonly"
          >
          <label
            for="phone"
            :class="{
              active: focused === 'phone' || phone,
            }"
          >Phone</label>
          <span v-if="!readonly && invalid.phone" class="error">{{ invalid.phone }}</span>
        </div>
        <div class="input-field col s12">
          <input
            @focus="setFocused('address')"
            @blur="clearFocused('address')"
            @input="handleInput"
            :value="address"
            id="address"
            name="address"
            type="text"
            :readonly="readonly"
          >
          <label
            for="address"
            :class="{
              active: focused === 'address' || address,
            }"
          >Address</label>
          <span v-if="!readonly && invalid.address" class="error">{{ invalid.address }}</span>
        </div>
      </div>
    </form>
  </div>
</template>

<script type="text/javascript">

export default {
  name: 'ContactInfoForm',
  data() {
    return {
      focused: null,
      invalid: {},
    };
  },
  props: ['name', 'address', 'phone', 'readonly'],
  methods: {
    setFocused(field) {
      this.focused = field;
    },
    clearFocused(field) {
      if (!this[field]) {
        this.$set(this.invalid, field, 'This field is required');
      } else {
        this.$delete(this.invalid, field);
      }
      if (this.focused === field) {
        this.focused = null;
      }
    },
    handleInput(e) {
      this.$emit('input', e);
    },
  },
};
</script>

<style lang="SASS" scoped>
  .error {
    font-size: 12px;
    color: red;
  }
  .error::before {
    content: 'warning';
    font-family: 'Material Icons';
    font-size: 18px;
  }
</style>
