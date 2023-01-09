<!-- TODO replace all main-layout with this layout -->
<script lang="ts">
import { defineComponent, ref } from "vue";
import MainButtonPressable from "~/components/Button/MainButtonPressable.vue";
import PrescriptionCheckout from "~/components/PrescriptionCheckout.vue";
import RadioField from "~/components/RadioField.vue";
import { prescribedProducts } from "~/dummy/dummyproducts";
export default defineComponent({
  components: {
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
      <h4 class="heading-four font-semibold bg-redLightest rounded p-2 mb-2">Your prescriptions</h4>
      <p class="p-normal mb-4">Alla näet tilauksesi, joka lähetetään farmaseutin
        käsittelyyn.</p>

      <prescription-checkout v-for="product in products" :key="product.id" :name="product.name" :id="product.id"
        @remove="remove" />

      <p class="p-normal font-medium mt-4">{{ products.length }} product{{
        products.length === 1 ? "" : "s"
      }}</p>
      <p class="p-normal text-blackLight mt-2">Farmaseutti laskee tilauksen lopullisen
        hinnan.</p>
    </section>

    <section class="bg-white mt-6 px-4 pt-6 pb-16">
      <h4 class="heading-four ">Medical guidance</h4>
      <div class="flex flex-col w-full mt-6">
        <radio-field title="I want medical assistance through telephone" :selected="selectedHelp === 1"
          @select="setSelected(1)" />
        <radio-field title="I don't need medical assistance" :selected="selectedHelp === 2" @select="setSelected(2)"
          class="mt-2" />
      </div>

      <main-button-pressable v-if="selectedHelp" class="w-full mt-4" title="Send to pharmacy" upper />
    </section>
  </main>
</template>


<style>

</style>