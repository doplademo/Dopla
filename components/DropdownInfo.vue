<template>
  <div :class="`flex flex-col items-start flex-1 p-2 ${className}`">
    <paragraph-normal class-name="font-medium">{{ name }}</paragraph-normal>
    <paragraph-normal class-name="text-blackLight">{{
      description
    }}</paragraph-normal>
  </div>
</template>

<script>
import { defineComponent } from "@nuxtjs/composition-api";
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