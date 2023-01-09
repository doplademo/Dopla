<template>
  <div v-if="product" class="flex flex-col bg-white rounded-md overflow-y-scroll mt-12 mx-2 p-4">
    <!-- Header -->
    <div class="flex justify-between w-full">
      <p class="text-sm font-medium bg-greenBold p-2 py-1">INFO</p>
      <button @click="$emit('close')" class="bg-redLightest px-2 py-1">
        <close-icon size="small" />
      </button>
    </div>
    <h4 class="heading-four font-semibold bg-redLightest rounded-md p-1 mt-5">{{ product.name }}</h4>

    <p class="p-small text-blackLight mt-4 mb-1">Product details</p>
    <div class="border border-redLightest rounded-md px-2.5 py-1.5">
      <p v-for="detail in product.details" :key="detail" class="p-small text-blackMedium my-1">{{ detail }}</p>
    </div>

    <div class="mt-5">
      <p class="p-normal inline-block font-semibold">Medicine exchange program</p>
      <button class="inline-block bg-redLightest font-semibold px-2 mr-2">
        i
      </button>
    </div>

    <dropdown-picker :selected-option="product.selectedOption" :options="product.options"
      @on-select-option="onChangeOption" />
    <div class="mt-2">
      <p class="p-small inline-block text-blackLight">Tuotteella on hintatakuu</p>
      <button class="inline-block bg-redLightest font-semibold text-xs px-2 mr-2">
        i
      </button>
    </div>

    <div class="flex justify-between w-full mt-8">
      <amout-counter :count="product.amount" @add="$emit('add')" @subtract="$emit('subtract')" />
      <main-button-pressable class="flex-1 ml-2" title="Lisää tilaukseen" upper />
    </div>

    <p class="p-x-small text-end text-blackMedium font-medium  mt-4">Apteekin farmaseutti voi laskea lopullisen hinnan
      Kela-korvauksineen kun
      olet vahvistanut ehdotuksen. Näet lopullisen summan ennen maksamista.
      Ehdotetuilla tuotteilla on edullisimman tuotteen takuu.</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import CloseIcon from "./Icons/CloseIcon.vue";
import DropdownPicker from "./DropdownPicker.vue";
import AmoutCounter from "./AmoutCounter.vue";
import MainButtonPressable from "./Button/MainButtonPressable.vue";
import { PrescriptionType } from "~/dummy/dummyproducts";

export default defineComponent({
  components: {
    CloseIcon,
    DropdownPicker,
    AmoutCounter,
    MainButtonPressable,
  },
  props: {
    product: {
      type: Object as PropType<PrescriptionType | null>,
      default: null,
    },
  },
  emits: ["on-option-select", "add", "subtract", "close"],
  setup(_, { emit }) {
    const onChangeOption = (id: number) => {
      emit("on-option-select", id);
    };

    return {
      onChangeOption,
    };
  },
});
</script>

<style>

</style>