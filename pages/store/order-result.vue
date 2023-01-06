<template>
  <main class="pt-24">
    <section class="px-4">
      <order-successful-card />
    </section>
    <popular-now />
  </main>
</template>
  
  <script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";
import MainLayout from "~/components/Layout/MainLayout.vue";
import OrderSuccessfulCard from "~/components/OrderSuccessfulCard.vue";
import PopularNow from "~/components/PopularNow.vue";

export default defineComponent({
  components: {
    MainLayout,
    OrderSuccessfulCard,
    PopularNow,
  },
});
</script>
  
  <style>
</style>