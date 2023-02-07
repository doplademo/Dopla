<script lang="ts">
import { defineComponent } from "vue";
import GuideIcon from "./Icons/GuideIcon.vue";
import IconTrash from "./Icons/IconTrash.vue";

export default defineComponent({
  components: { GuideIcon, IconTrash },
  props: {
    id: {
      type: Number,
      required: true,
    },
    hideRemove: {
      type: Boolean,
      default: false,
    },
    name: String,
  },
  emits: ["remove"],
});
</script>

<template>
  <div class="flex items-start border-b border-b-blackLightest py-4">
    <p class="p-x-small text-blackLight">00{{ id }}</p>

    <div class="flex flex-col flex-1 mx-2">
      <p class="p-normal font-medium mb-2">{{ name }}</p>
      <div class="bg-greenHover flex items-center rounded p-1">
        <guide-icon :size="20" />
        <p class="p-small ml-2"> Puoli tablettia aamuin illoin...</p>
      </div>
    </div>

    <button v-if="!hideRemove" @click="$emit('remove', id)" class="bg-redLightest px-2 py-1">
      <icon-trash size="small" />
    </button>
  </div>
</template>

<style>
</style>