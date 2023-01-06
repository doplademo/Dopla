<template>
  <div class="bg-pinkBold rounded-lg p-4 mt-4">
    <div class="flex justify-between items-center">
      <heading-four class-name="font-semibold">Your order has is ready</heading-four>
      <check-icon size="large" />
    </div>
    <paragraph-normal class-name="font-semibold mt-4"
      >Hip hei! Farmaseutti on tarkistanut, että tilauksesi on kunnossa sekä
      laskenut kela-korvauksesi.</paragraph-normal
    >
    <paragraph-normal class-name="mt-4"
      >Voit siirtyä viimeistelemään reseptilääketilauksesi.</paragraph-normal
    >
    <main-button-pressable title="pay" upper class-name="w-1/2 mt-4" />
  </div>
</template>

<script>
import MainButtonPressable from './Button/MainButtonPressable.vue';
import HeadingFour from "./Heading/HeadingFour.vue";
import CheckIcon from "./Icons/CheckIcon.vue";
import ParagraphNormal from "./Paragraph/ParagraphNormal.vue";
export default {
  components: { HeadingFour, CheckIcon, ParagraphNormal, MainButtonPressable },
};
</script>

<style>
</style>