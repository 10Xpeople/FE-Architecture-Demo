<template>
    <form
      @submit.prevent="handleSubmit"
    >
        <div class="input-field">
            <input
                v-model="search"
                @blur="close"
                @keyup.esc="close"
                ref="input"
                id="search"
                type="search"
                required
                autocomplete="off"
            />
            <label class="label-icon" for="search"><i class="material-icons">search</i></label>
            <i
                @click="close"
                class="material-icons"
            >close</i>
        </div>
    </form>
</template>

<script>
export default {
  name: 'NavSearch',
  data() {
    return {
      search: '',
    };
  },
  methods: {
    close() {
      this.$emit('close');
    },
    handleSubmit() {
      // eslint-disable-next-line
      alert(`You searched for ${this.search}, but the search doesn't work. Sorry.`);
    },
  },
  mounted() {
    this.$refs.input.focus();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
