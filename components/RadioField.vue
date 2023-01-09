<script>
import { defineComponent } from "vue";
import IconRadioSelected from "./Icons/IconRadioSelected.vue";
import IconRadioUnselected from "./Icons/IconRadioUnselected.vue";
export default defineComponent({
  components: { IconRadioSelected, IconRadioUnselected },
  props: {
    selected: Boolean,
    description: String,
    title: String,
    hideBorder: Boolean,
    className: { type: String, default: "" },
  },
  emits: ["select"],
});
</script>

<template>

  <div :class="`flex flex-col w-full appearance-none p-3 border rounded-md text-start ${selected ? 'border-greenBold' : 'border-blackLightest'
  } ${hideBorder ? 'border-none p-0' : ''} ${className}`">
    <div class="flex items-center">
      <button @click="$emit('select')">
        <icon-radio-selected v-if="selected" />
        <icon-radio-unselected v-else />
      </button>
      <div class="flex-1 text-start">
        <p class="p-normal font-medium">{{
          title
        }}</p>
        <p v-if="description" class="p-normal text-blackLight">{{
          description
        }}</p>
      </div>
    </div>
  </div>
</template>



<style>

</style>