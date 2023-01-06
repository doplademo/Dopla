<template>
  <section class="px-4">
    <heading-four class-name="my-4 font-semibold">Suosittua juuri nyt</heading-four>
    <paragraph-normal>Tutustu apteekin verkkokaupan tuotteisiin.</paragraph-normal>
    <div class="flex flex-row overflow-x-scroll my-4">
      <store-product v-for="product in dummyProducts" :id="product.id" :key="product.id" :sku="product.sku"
        :name="product.name" :price="product.price" :additions="product.additions"
        :package-quantity="product.packageQuantity" />
    </div>
  </section>
</template>

<script>
import { defineComponent } from "@nuxtjs/composition-api";
import HeadingFour from "./Heading/HeadingFour.vue";
import ParagraphNormal from "./Paragraph/ParagraphNormal.vue";
import StoreProduct from "./StoreProduct.vue";
import { dummyProducts } from "~/dummy/dummyReviews";
export default defineComponent({
  components: { HeadingFour, ParagraphNormal, StoreProduct },
  setup() {
    return { dummyProducts };
  },
});
</script>

<style>

</style>