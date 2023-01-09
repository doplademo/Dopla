<template>
  <div :class="`flex flex-col items-start flex-1 p-2 ${className}`">
    <p class="p-normal font-medium">{{ name }}</p>
    <p class="p-normal text-blackLight">{{
      description
    }}</p>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
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