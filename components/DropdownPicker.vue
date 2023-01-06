<template>
  <div>
    <div @click="toggleOptions" :class="`flex items-center border rounded ${
      showOptions ? 'border-greenBold' : 'border-blackLightest'
    }`">
      <dropdown-info :name="currentOption.name" :description="currentOption.description" />
      <div id="arrow" :class="`mx-2 ${showOptions ? 'rotate-180' : ''}`">
        <arrow-down size="small" />
      </div>
    </div>

    <div v-if="showOptions" class="mt-2 border rounded border-blackLightest">
      <div v-for="option in options" :key="option.id" :class="`flex items-center ${option.id === selectedOption ? 'bg-greenHover' : 'bg-white'
      }`" @click="onSelect(option.id)">
        <dropdown-info :key="option.id" :name="option.name" :description="option.description" />
        <div v-if="selectedOption === option.id" class="mx-2">
          <check-icon size="small" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, ref } from "@nuxtjs/composition-api";
import ArrowDown from "./Icons/ArrowDown.vue";
import DropdownInfo from "./DropdownInfo.vue";
import CheckIcon from "./Icons/CheckIcon.vue";
import type { OptionsType } from "~/dummy/dummyproducts";
export default defineComponent({
  components: { ArrowDown, DropdownInfo, CheckIcon },
  props: {
    selectedOption: {
      type: Number,
      required: true,
    },
    options: {
      type: Array as PropType<OptionsType[]>,
      required: true,
    },
  },
  emits: ["on-select-option"],
  setup(props, { emit }) {
    const showOptions = ref(false);
    const currentOption = computed(() =>
      props.options.find((option: OptionsType) => option.id === props.selectedOption)
    );

    const toggleOptions = () => {
      showOptions.value = !showOptions.value;
    };

    const onSelect = (id: number) => {
      emit("on-select-option", id);
    };

    return {
      showOptions,
      currentOption,
      toggleOptions,
      onSelect,
    };
  },
});
</script>

<style>
#arrow {
  transition: transform 200ms ease-in;
}
</style>