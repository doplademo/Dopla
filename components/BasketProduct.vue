<script lang="ts">
import { defineComponent } from "vue";
import GuideIcon from "./Icons/GuideIcon.vue";

export default defineComponent({
  components: { GuideIcon },
  props: {
    id: {
      type: Number,
      required: true,
    },
    name: String,
    price: String,
    discount: String,
    finalPrice: String,
    isLast: Boolean,
  },
  emits: ["remove"],
});
</script>

<template>
  <div
    :class="`flex items-start py-4 ${!isLast ? 'border-b border-b-blackLightest' : ''}`"
  >
    <p class="p-small text-blackLight">{{ id }}</p>

    <div class="flex flex-col flex-1 mx-2">
      <div class="flex justify-between mb-2">
        <p class="p-large flex-1 font-medium ">{{
          name
        }}</p>
        <p class="p-large font-medium">{{ price }}</p>
      </div>
      <div class="bg-greenHover flex items-center rounded p-1">
        <guide-icon :size="20" />
        <p class="p-small ml-2"> Puoli tablettia aamuin illoin...</p>
      </div>
      <div class="flex justify-between text-blackMedium mt-1">
          <p class="p-normal">Reimbursement</p>
          <p class="p-normal font-medium">-{{discount}}</p>
      </div>
      <div class="flex justify-between text-blackBold mt-1">
          <p class="p-normal">Deductible</p>
          <p class="p-normal font-medium">{{finalPrice}}</p>
      </div>
    </div>
  </div>
</template>

<style>
</style>