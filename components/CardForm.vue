<template>
  <form action="" class="flex flex-col gap-2">
    <text-input label="Name your payment method*" placeholder="Placeholder" />
    <text-input label="Name on card*" placeholder="Placeholder" />
    <text-input label="Card number*" placeholder="Placeholder" />
    <div class="flex justify-between gap-2">
      <text-input class-name="w-5/12" label="MM/YY*" />
      <text-input class-name="w-5/12" label="CVV*" />
    </div>
    <div v-if="fromProfile" class="flex self-end mt-2">
      <button class="button-no-bg uppercase py-1 px-1">cancel</button>
      <input type="submit" class="main-button uppercase py-1 px-1" value="save" />
    </div>
    <input v-else type="submit" class="main-button" value="SAVE" />
  </form>
</template>

<script>
import { defineComponent } from 'vue'
import TextInput from './Input/TextInput.vue'
export default defineComponent({
  components: { TextInput },
  props: {
    fromProfile: Boolean,
  },

})
</script>

<style>

</style>