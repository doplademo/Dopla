<template>
  <div class="bg-pinkBold rounded-lg p-4 mt-4">
    <div class="flex justify-between items-center">
      <h4 class="heading-four font-semibold">Your order has is ready</h4>
      <check-icon size="large" />
    </div>
    <p class="p-normal font-semibold mt-4">Hip hei! Farmaseutti on tarkistanut, että tilauksesi on kunnossa sekä
      laskenut kela-korvauksesi.</p>
    <p class="p-normal mt-4">Voit siirtyä viimeistelemään reseptilääketilauksesi.</p>
    <main-button-pressable title="pay" upper class="w-1/2 mt-4" />
  </div>
</template>

<script>
import MainButtonPressable from './Button/MainButtonPressable.vue';
import CheckIcon from "./Icons/CheckIcon.vue";
export default {
  components: { CheckIcon, MainButtonPressable },
};
</script>

<style>

</style>