<template>
  <div class="py-4">
    <p class="p-small uppercase font-medium px-2 pb-2 border-b border-blackBold">tilaus #123 4567 89</p>
    <div class="px-2">

      <order-history-product product-name="oftan scopolamin" quantity="1 x 10 ml" amount="1" price="99.99 €" />
      <order-history-product product-name="oftan scopolamin" quantity="1 x 10 ml" amount="1" price="99.99 €" />
      <order-history-product product-name="oftan scopolamin" quantity="1 x 10 ml" amount="1" price="99.99 €" />

      <div class="py-3 px-2 border-b border-blackLightest">
        <div class="flex justify-between my-1">
          <p class="p-normal text-blackLight">Reimbursements</p>
          <p class="p-normal font-medium">-99.99 €</p>
        </div>
        <div class="flex justify-between my-1">
          <p class="p-normal text-blackLight">Delivery</p>
          <p class="p-normal font-medium">4.99 €</p>
        </div>
      </div>

      <div class="flex justify-between px-2 py-2 border-b border-blackLightest">
        <p class="p-normal font-medium">Total</p>
        <p class="p-normal font-medium">99.99 €</p>
      </div>
    </div>

    <p class="p-small uppercase font-medium px-2 py-2 mt-6 border-b border-blackBold">Payment card</p>

    <div class="px-2">
      <order-history-product product-name="s-Card" quantity="4920 **** **** **24" amount="X" price="99.99 €" />
    </div>
    <p class="p-small uppercase font-medium px-2 py-2 mt-6 border-b border-blackBold">Delivery</p>

    <div class="px-2">
      <order-history-product product-name="Pickup" quantity="15.11.2022" amount="X" price="99.99 €" />
    </div>

    <button class="main-button ml-auto mt-6 mr-2">OK</button>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import OrderHistoryProduct from './OrderHistoryProduct.vue'
export default defineComponent({
  components: { OrderHistoryProduct },
})
</script>

<style>

</style>