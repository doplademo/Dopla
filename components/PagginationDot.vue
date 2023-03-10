<template>
  <div class="flex mt-4 justify-center flex-nowrap">
    <button
      v-for="page in pages"
      :key="page"
      class="w-2 h-2 bg-mainMedium mx-2 rounded-full"
      @click="setSelectedPage(page)"
    ></button>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  props: {
    pagesNumber: {
      type: Number,
      required: true,
    },
  },
  emits: ["select-page"],
  setup(props, { emit }) {
    const pages = ref(
      Array(props.pagesNumber)
        .fill(null)
        .map((_, idx) => idx)
    );
    const selectedPage = ref(0);
    const setSelectedPage = (page) => {
      selectedPage.value = page;
      emit("select-page", page);
    };

    return {
      selectedPage,
      pages,
      setSelectedPage,
    };
  },
};
</script>

<style></style>
