<template>
  <div class="flex flex-col w-full">
    <p class="p-large my-2">00{{ id }}</p>

    <!-- Main section -->
    <div :class="`flex w-full items-start bg-white border rounded drop-shadow-md shadow-blackLightest p-2 ${selected ? 'border-greenBold' : 'border-blackLightest'
    }`">
      <check-box size="large" :selected="selected" @toggle="$emit('toggle', id)" />

      <div class="flex flex-col items-start flex-1 relative px-2 ml-2">
        <!-- Pink field -->
        <div class="bg-redLightest rounded p-2 mb-2">
          <p-xs class="font-medium">
            <span>!</span>
            <span class="ml-2">Edullisempi saatavilla</span>
          </p-xs>
        </div>
        <!-- Product name -->
        <h4 class="heading-four my-2">{{ name }}</h4>
        <!-- Info section -->
        <div class="flex items-center justify-between w-full my-2">
          <div class="flex items-center bg-oceanLight rounded p-1.5">
            <guide-icon :size="16" />
            <p-sm class="ml-2">Here's how to use...</p-sm>
          </div>
          <!-- Info button -->
          <main-button-pressable text-class="text-xs" class="p-1 py-1.5" title="info" upper
            @click="$emit('show-info', id)" />
        </div>
        <div class="bg-mainBold rounded absolute top-0 right-2 px-2 py-1.5">
          <p-xs class="font-medium text-white uppercase">Prescriptive drug</p-xs>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import MainButtonPressable from "./Button/MainButtonPressable.vue";
import GuideIcon from "./Icons/GuideIcon.vue";
import CheckBox from "./Input/CheckBox.vue";
import PSm from "./Paragraph/PSm.vue";
import PXs from "./Paragraph/PXs.vue";

export default defineComponent({
  components: {
    CheckBox,
    PXs,
    GuideIcon,
    PSm,
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