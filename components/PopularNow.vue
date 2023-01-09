<template>
  <section class="px-4">
    <h4 class="heading-four my-4 font-semibold">Suosittua juuri nyt</h4>
    <p class="p-normal">Tutustu apteekin verkkokaupan tuotteisiin.</p>
    <div class="flex flex-row overflow-x-scroll my-4">
      <store-product v-for="product in dummyProducts" :id="product.id" :key="product.id" :sku="product.sku"
        :name="product.name" :price="product.price" :additions="product.additions"
        :package-quantity="product.packageQuantity" />
    </div>
  </section>
</template>

<script>
import { defineComponent } from "vue";
import StoreProduct from "./StoreProduct.vue";
import { dummyProducts } from "~/dummy/dummyReviews";
export default defineComponent({
  components: { StoreProduct },
  setup() {
    return { dummyProducts };
  },
});
</script>

<style>

</style>