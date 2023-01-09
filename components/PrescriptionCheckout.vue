<script lang="ts">
import { defineComponent } from "vue";
import GuideIcon from "./Icons/GuideIcon.vue";
import IconTrash from "./Icons/IconTrash.vue";
import PSm from "./Paragraph/PSm.vue";

export default defineComponent({
  components: { PSm, GuideIcon, IconTrash },
  props: {
    id: {
      type: Number,
      required: true,
    },
    name: String,
  },
  emits: ["remove"],
});
</script>

<template>
  <div class="flex items-start border-b border-b-blackLightest py-4">
    <p-sm class="text-blackLight">00{{ id }}</p-sm>

    <div class="flex flex-col flex-1 mx-2">
      <p class="p-large font-medium mb-2">{{ name }}</p>
      <div class="bg-greenHover flex items-center rounded p-1">
        <guide-icon :size="20" />
        <p-sm class="ml-2"> Puoli tablettia aamuin illoin...</p-sm>
      </div>
    </div>

    <button @click="$emit('remove', id)" class="bg-redLightest px-2 py-1">
      <icon-trash size="small" />
    </button>
  </div>
</template>

<style>
</style>