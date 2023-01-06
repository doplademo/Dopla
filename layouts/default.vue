<template>
  <div>
    <store-navigation />
    <Nuxt />
    <store-footer />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "@nuxtjs/composition-api";
import StoreFooter from "~/components/Layout/StoreFooter.vue";
import StoreNavigation from "~/components/Layout/StoreNavigation.vue";
export default defineComponent({
  components: {
    StoreNavigation,
    StoreFooter,
  },

  setup() {
    const showComment = ref(false);
    const rangeValue = ref(5);
    const comment = ref('');

    function onSlide(value: number) {
      rangeValue.value = value;

      if (!showComment.value) {
        showComment.value = true;
      }
    }

    function onComment(value: string) {
      comment.value = value;
    }

    return {
      showComment,
      rangeValue,
      comment,
      onSlide,
      onComment,
    }
  }

});
</script>
