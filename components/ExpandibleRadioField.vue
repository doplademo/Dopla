<script>
import { defineComponent, ref } from "vue";
import IconRadioSelected from "./Icons/IconRadioSelected.vue";
import IconRadioUnselected from "./Icons/IconRadioUnselected.vue";
export default defineComponent({
  components: { IconRadioSelected, IconRadioUnselected },
  props: {
    selected: Boolean,
    title: String,
    description: String,
    className: { type: String, default: "" },
    containerClassName: { type: String, default: "" },
  },
  emits: ["select"],
  setup() {
    const showDetails = ref(false);

    function toggleDetails() {
      showDetails.value = !showDetails.value;
    }

    return { showDetails, toggleDetails };
  },
});
</script>

<template>
  <div :class="`flex flex-col w-full p-3 border rounded-md text-start ${selected ? 'border-greenBold' : 'border-blackLightest'
  } ${hideBorder ? 'border-none' : ''} ${className}`">
    <div class="flex items-center">
      <button @click="$emit('select')">
        <icon-radio-selected v-if="selected" />
        <icon-radio-unselected v-else />
      </button>
      <button class="flex-1 text-start" @click="toggleDetails()">
        <p class="p-normal font-medium">{{
          title
        }}</p>
        <p v-if="description" class="p-normal text-blackLight">{{
          description
        }}</p>
      </button>
    </div>

    <div v-if="showDetails" :class="`pl-8 pr-4 py-4 ${containerClassName}`">
      <slot />
    </div>
  </div>
</template>



<style>

</style>