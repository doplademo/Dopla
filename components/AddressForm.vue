<template>
    <form class="flex flex-col gap-2" @submit.prevent="onSubmit">
        <text-input label="Name of recipient*" :value="recipient" field="recipient" id="recipient"
            @change="onChangeText" type="text" />
        <text-input label="Name your delivery method" :value="deliveryMethod" field="deliveryMethod" id="deliveryMethod"
            @change="onChangeText" type="text" />
        <text-input label="Street address*" :value="address" field="address" id="address" @change="onChangeText"
            type="text" />
        <div class="flex justify-between gap-2">
            <text-input class-name="w-5/12" label="Zip code*" :value="zipCode" field="zipCode" id="zipCode"
                @change="onChangeText" type="text" />
            <text-input class-name="w-5/12" label="City*" :value="city" field="city" id="city" @change="onChangeText"
                type="text" />
        </div>

        <div class="flex flex-col gap-2 mt-4">
            <radio-field title="Home delivery" description="2,90 - 4,90 E" hide-border />
            <radio-field title="Pick up from a pick up point" description="1,90 E" hide-border />
        </div>

        <input type="submit"
            class="p-2.5 mt-2 ml-auto text-blackBold bg-greenBold text-center text-[15px] font-semibold rounded-md"
            value="SEURAAVA" />
    </form>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue"
import type { AddressType } from "../dummy/dummyAddress";
import TextInput from './Input/TextInput.vue'
import RadioField from './RadioField.vue';
export default defineComponent({
    components: { TextInput, RadioField },
    props: {
        addressInfo: Object as PropType<AddressType>,
        recipient: String,
        deliveryMethod: String,
        address: String,
        zipCode: String,
        city: String,
    },
    emits: ['field-change'],
    setup(props, { emit }) {


        function onSubmit() { };

        function onChangeText(text: string, field: string) {
            emit('field-change', text, field)
        }

        return { onSubmit, onChangeText }
    }
})
</script>

<style>

</style>