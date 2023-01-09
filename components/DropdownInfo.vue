<template>
  <div :class="`flex flex-col items-start flex-1 p-2 ${className}`">
    <paragraph-normal class="font-medium">{{ name }}</paragraph-normal>
    <paragraph-normal class="text-blackLight">{{
      description
    }}</paragraph-normal>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import ParagraphNormal from "./Paragraph/ParagraphNormal.vue";

export default defineComponent({
  components: { ParagraphNormal },
  props: {
    name: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
    className: {
      type: String,
      default: "",
    },
  },
});
</script>

<style>
</style>