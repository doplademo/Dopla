<template>
        <div class="flex gap-2 my-2">
            <paragraph-normal class="text-blackLight">X</paragraph-normal>
            <!-- Product Info -->
            <div class="">
                <paragraph-normal class="uppercase font-medium ">{{productName}}</paragraph-normal>
                <paragraph-normal class="text-blackLight">{{productType}}</paragraph-normal>
                <paragraph-normal class="text-blackLight">{{amount}}</paragraph-normal>
            </div>
            <!-- Price -->
            <paragraph-normal class="flex-shrink-0 font-medium">{{price}}</paragraph-normal>
        </div>
</template>

<script>
import { defineComponent } from "vue";
import ParagraphNormal from "./Paragraph/ParagraphNormal.vue";

export default defineComponent({
  components: { ParagraphNormal },
    props: {
        productName: String,
        productType: String,
        amount: String,
        price: String,
    },
})
</script>

<style>

</style>