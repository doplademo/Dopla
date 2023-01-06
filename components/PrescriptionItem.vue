<template>
  <div class="flex flex-col w-full">
    <paragraph-large class-name="my-2">00{{ id }}</paragraph-large>

    <!-- Main section -->
    <div
      :class="`flex w-full items-start bg-white border rounded drop-shadow-md shadow-blackLightest p-2 ${
        selected ? 'border-greenBold' : 'border-blackLightest'
      }`"
    >
      <check-box
        size="large"
        :selected="selected"
        @toggle="$emit('toggle', id)"
      />

      <div class="flex flex-col items-start flex-1 relative px-2 ml-2">
        <!-- Pink field -->
        <div class="bg-redLightest rounded p-2 mb-2">
          <p-xs class-name="font-medium">
            <span>!</span>
            <span class="ml-2">Edullisempi saatavilla</span>
          </p-xs>
        </div>
        <!-- Product name -->
        <heading-four class-name="my-2">{{ name }}</heading-four>
        <!-- Info section -->
        <div class="flex items-center justify-between w-full my-2">
          <div class="flex items-center bg-oceanLight rounded p-1.5">
            <guide-icon :size="16" />
            <p-sm class-name="ml-2">Here's how to use...</p-sm>
          </div>
          <!-- Info button -->
          <main-button-pressable
            text-class="text-xs"
            class-name="p-1 py-1.5"
            title="info"
            upper
            @click="$emit('show-info', id)"
          />
        </div>
        <div class="bg-mainBold rounded absolute top-0 right-2 px-2 py-1.5">
          <p-xs class-name="font-medium text-white uppercase">Prescriptive drug</p-xs>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import MainButtonPressable from "./Button/MainButtonPressable.vue";
import HeadingFive from "./Heading/HeadingFive.vue";
import HeadingFour from "./Heading/HeadingFour.vue";
import HeadingThree from "./Heading/HeadingThree.vue";
import HeadingTwo from "./Heading/HeadingTwo.vue";
import GuideIcon from "./Icons/GuideIcon.vue";
import CheckBox from "./Input/CheckBox.vue";
import ParagraphLarge from "./Paragraph/ParagraphLarge.vue";
import PSm from "./Paragraph/PSm.vue";
import PXs from "./Paragraph/PXs.vue";

export default defineComponent({
  components: {
    CheckBox,
    PXs,
    HeadingTwo,
    GuideIcon,
    HeadingThree,
    HeadingFour,
    PSm,
    HeadingFive,
    ParagraphLarge,
    MainButtonPressable,
  },
  props: {
    id: Number,
    name: String,
    selected: Boolean,
  },
  emits: ["toggle", 'show-info'],
});
</script>

<style>
</style>