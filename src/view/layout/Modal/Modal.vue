<template>
   <div>
      <transition name="modal-backdrop">
         <div
            v-show="show"
            @click="$emit('close')"
            class="modal-overlay"
         />
      </transition>
      <transition
        name="modal"
      >
         <div
            class="modal"
            :class="{
              'modal-fixed-footer': fixedFooter,
            }"
            v-show="show"
         >
          <slot />
         </div>
      </transition>
   </div>
</template>

<script>
export default {
  name: 'Modal',
  props: ['show', 'fixedFooter'],
};
</script>

<style scoped>
.modal {
  display: block;
  z-index: 999;
  top: 10%;
}

.modal-enter-active, .modal-leave-active {
  transition: opacity .4s, transform .5s;
}

.modal-enter, .modal-leave-to {
  opacity: 0;
  transform: translateY(-20px) scaleX(0.9);
}

.modal-overlay {
  display: block;
  opacity: 0.5;
}

.modal-backdrop-enter-active, .modal-backdrop-leave-active {
  transition: opacity .2s;
}

.modal-backdrop-enter, .modal-backdrop-leave-to {
  opacity: 0;
}
</style>
