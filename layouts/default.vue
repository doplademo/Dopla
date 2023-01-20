<template>
  <div class="relative">
    <store-navigation :nav-type="navType" />
    <Nuxt />
    <store-footer />
    <dopla-chat />
  </div>
</template>

<!-- TODO separate into multiple layouts and make components have {layout: 'something'} -->

<script lang="ts">
import { defineComponent, ref } from "vue";
import DoplaChat from "~/components/DoplaChat.vue";
import StoreFooter from "~/components/Layout/StoreFooter.vue";
import StoreNavigation from "~/components/Layout/StoreNavigation.vue";
import { NavType } from "~/types/NavType";
export default defineComponent({
  components: {
    StoreNavigation,
    StoreFooter,
    DoplaChat,
  },

  setup() {
    const showComment = ref(false);
    const rangeValue = ref(5);
    const comment = ref('');
    const navType = ref<NavType>(NavType.STORE);


    function onSlide(value: number) {
      rangeValue.value = value;

      if (!showComment.value) {
        showComment.value = true;
      }
    }

    function onComment(value: string) {
      comment.value = value;
    }

    function setNavType(type: NavType) {
      navType.value = type;
    }

    return {
      showComment,
      rangeValue,
      comment,
      navType,
      onSlide,
      onComment,
      setNavType,
    }
  }

});
</script>
