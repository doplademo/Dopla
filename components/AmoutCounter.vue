<template>
  <div class="flex bg-greenHover rounded p-2">
    <button class="flex justify-center items-center" @click="$emit('subtract')">
      <icon-minus />
    </button>

    <paragraph-large
      class-name="flex justify-center items-center font-bold w-8 h-8"
      ><span>{{ count }}</span></paragraph-large
    >

    <button class="flex justify-center items-center" @click="$emit('add')">
      <icon-plus />
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import IconMinus from "./Icons/IconMinus.vue";
import IconPlus from "./Icons/IconPlus.vue";
import ParagraphLarge from "./Paragraph/ParagraphLarge.vue";

export default defineComponent({
  components: { IconPlus, IconMinus, ParagraphLarge },
  props: {
    count: {
      type: Number,
      default: 1,
    },
  },
  emits: ["add", "subtract"],
});
</script>

<style>
</style>