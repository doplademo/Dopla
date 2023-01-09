<template>
  <div class="flex bg-greenHover rounded p-2">
    <button class="flex justify-center items-center" @click="$emit('subtract')">
      <icon-minus />
    </button>

    <p class="p-large flex justify-center items-center font-bold w-8 h-8"><span>{{ count }}</span></p>

    <button class="flex justify-center items-center" @click="$emit('add')">
      <icon-plus />
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import IconMinus from "./Icons/IconMinus.vue";
import IconPlus from "./Icons/IconPlus.vue";

export default defineComponent({
  components: { IconPlus, IconMinus },
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