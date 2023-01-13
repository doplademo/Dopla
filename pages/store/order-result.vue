<template>
  <main class="pt-24">
    <section class="px-4">
      <order-successful-card />
    </section>

    <popular-now />
  </main>
</template>
  
<script lang="ts">
import { defineComponent } from "vue";
import OrderSuccessfulCard from "~/components/OrderSuccessfulCard.vue";
import PopularNow from "~/components/PopularNow.vue";

export default defineComponent({
  components: {
    OrderSuccessfulCard,
    PopularNow,
  },

});
</script>
  
<style>

</style>