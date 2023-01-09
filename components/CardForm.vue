<template>
  <form action="" class="flex flex-col gap-2">
    <text-input label="Name your payment method*" placeholder="Placeholder" />
    <text-input label="Name on card*" placeholder="Placeholder" />
    <text-input label="Card number*" placeholder="Placeholder" />
    <div class="flex justify-between gap-2">
      <text-input class="w-5/12" label="MM/YY*" />
      <text-input class="w-5/12" label="CVV*" />
    </div>
    <input type="submit"
      class="p-2.5  mt-2 ml-auto text-blackBold bg-greenBold text-center text-[15px] font-semibold rounded-md"
      value="SEURAAVA" />
  </form>
</template>

<script>
import TextInput from './Input/TextInput.vue'
export default {
  components: { TextInput },

}
</script>

<style>

</style>