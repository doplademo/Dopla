<script lang="ts">
import { defineComponent } from "vue";
import GuideIcon from "./Icons/GuideIcon.vue";
import ParagraphLarge from "./Paragraph/ParagraphLarge.vue";
import ParagraphNormal from "./Paragraph/ParagraphNormal.vue";
import PSm from "./Paragraph/PSm.vue";

export default defineComponent({
  components: { PSm, GuideIcon, ParagraphLarge, ParagraphNormal },
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
    <p-sm class-name="text-blackLight">{{ id }}</p-sm>

    <div class="flex flex-col flex-1 mx-2">
      <div class="flex justify-between mb-2">
        <paragraph-large class-name="flex-1 font-medium ">{{
          name
        }}</paragraph-large>
        <paragraph-large class-name="font-medium">{{ price }}</paragraph-large>
      </div>
      <div class="bg-greenHover flex items-center rounded p-1">
        <guide-icon :size="20" />
        <p-sm class-name="ml-2"> Puoli tablettia aamuin illoin...</p-sm>
      </div>
      <div class="flex justify-between text-blackMedium mt-1">
          <paragraph-normal>Reimbursement</paragraph-normal>
          <paragraph-normal class-name="font-medium">-{{discount}}</paragraph-normal>
      </div>
      <div class="flex justify-between text-blackBold mt-1">
          <paragraph-normal>Deductible</paragraph-normal>
          <paragraph-normal class-name="font-medium">{{finalPrice}}</paragraph-normal>
      </div>
    </div>
  </div>
</template>

<style>
</style>