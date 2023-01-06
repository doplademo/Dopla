<!-- TODO replace all main-layout with this layout -->
<script lang="ts">
import { defineComponent, ref } from "@nuxtjs/composition-api";
import MainButtonPressable from "~/components/Button/MainButtonPressable.vue";
import HeadingFour from "~/components/Heading/HeadingFour.vue";
import ParagraphNormal from "~/components/Paragraph/ParagraphNormal.vue";
import PrescriptionCheckout from "~/components/PrescriptionCheckout.vue";
import RadioField from "~/components/RadioField.vue";
import { prescribedProducts } from "~/dummy/dummyproducts";
export default defineComponent({
  components: {
    HeadingFour,
    ParagraphNormal,
    PrescriptionCheckout,
    RadioField,
    MainButtonPressable,
  },
  setup(_) {
    const products = ref([...prescribedProducts]);
    const selectedHelp = ref<null | number>(null);

    const setSelected = (value: number) => {
      selectedHelp.value = value;
    };

    const remove = (id: number) => {
      products.value = products.value.filter((product) => product.id !== id);
    };

    return {
      products,
      selectedHelp,
      setSelected,
      remove,
    };
  },
});
</script>

<template>
  <main class="bg-greenHover pt-24">
    <section class="
        bg-white
        rounded-md
        border border-blackLight
        shadow-md shadow-blackLight
        p-4
        mx-3
      ">
      <heading-four class-name="font-semibold bg-redLightest rounded p-2 mb-2">Your prescriptions</heading-four>
      <paragraph-normal class-name="mb-4">Alla näet tilauksesi, joka lähetetään farmaseutin
        käsittelyyn.</paragraph-normal>

      <prescription-checkout v-for="product in products" :key="product.id" :name="product.name" :id="product.id"
        @remove="remove" />

      <paragraph-normal class-name="font-medium mt-4">{{ products.length }} product{{
          products.length === 1 ? "" : "s"
      }}</paragraph-normal>
      <paragraph-normal class-name="text-blackLight mt-2">Farmaseutti laskee tilauksen lopullisen
        hinnan.</paragraph-normal>
    </section>

    <section class="bg-white mt-6 px-4 pt-6 pb-16">
      <heading-four>Medical guidance</heading-four>
      <div class="flex flex-col w-full mt-6">
        <radio-field title="I want medical assistance through telephone" :selected="selectedHelp === 1"
          @select="setSelected(1)" />
        <radio-field title="I don't need medical assistance" :selected="selectedHelp === 2" @select="setSelected(2)"
          class-name="mt-2" />
      </div>

      <main-button-pressable v-if="selectedHelp" class-name="w-full mt-4" title="Send to pharmacy" upper />
    </section>
  </main>
</template>


<style>

</style>