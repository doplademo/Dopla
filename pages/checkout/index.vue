<template>
    <main>
        <section class="pt-20 pb-4 px-3 bg-greenHover">
            <paragraph-normal
                class-name="uppercase w-full text-center text-blackMedium font-semibold">Basket</paragraph-normal>
            <!-- billing -->
            <div class="p-6 mt-4 bg-white rounded">
                <heading-four class-name="bg-pinkLight font-semibold p-2 mb-2 ">Order Summary</heading-four>
                <paragraph-normal>Alla näet yhteenvedon tämänhetkisestä tilauksestasi.
                </paragraph-normal>

                <basket-product v-for="product in products" :id="product.id" :key="product.id" :name="product.name"
                    :price="product.price" :discount="product.discount" :final-price="product.finalPrice" />

                <div class="flex justify-between text-blackMedium mt-4">
                    <paragraph-normal>Total reimbursement</paragraph-normal>
                    <paragraph-normal class-name="font-medium">-167.65 €</paragraph-normal>
                </div>
                <div class="flex justify-between text-blackBold mt-1">
                    <paragraph-normal>Amount due</paragraph-normal>
                    <paragraph-normal class-name="font-medium">200.99 €</paragraph-normal>
                </div>
            </div>
        </section>
        <!-- Billing -->
        <section class="p-4 pb-16 bg-white">

            <!-- Address -->
            <heading-four class-name="font-semibold">Delivery address</heading-four>
            <!-- Dummy address with data -->
            <div class="mt-4">
                <expandible-radio-field :title="address.name" :description="address.address">
                    <address-form :addressInfo="address" @field-change="changeField" /></expandible-radio-field>
                <!-- Dummy address without data -->
                <add-field class-name="mt-4" title="Add new delivery method">
                    <address-form :addressInfo="empty" @field-change="changeField" />
                </add-field>
            </div>
            <!-- Payment info -->
            <heading-four class-name="font-semibold mt-8">Payment</heading-four>

            <paragraph-normal class-name="text-blackMedium mt-6">Payment cards</paragraph-normal>

            <!-- Add payment card -->
            <radio-field class-name="mt-4" title="Visa-kortti" description="123* **** **** **56" selected />
            <add-field class-name="mt-2" title="Add new payment card">
                <card-form />
            </add-field>

            <paragraph-normal class-name="text-blackMedium mt-6">Other methods</paragraph-normal>

            <expandible-radio-field class-name="mt-4" title="Pay by bank transfer" selected
                container-class-name="bg-greenHover">
                <bank-transfer-options />
            </expandible-radio-field>
            <expandible-radio-field class-name="mt-2" title="Apple Pay">
            </expandible-radio-field>
            <expandible-radio-field class-name="mt-2" title="Google Pay">
            </expandible-radio-field>

            <check-box class-name="mt-8" title="I accept to terms" subtitle="Subtitle 1"
                error="Remember to consent to this." />

            <main-button-pressable class-name="mt-6 w-full" title="Pay" upper />
        </section>
    </main>
</template>
  
<script lang="ts">
import { defineComponent, ref } from "vue";
import { dummyProducts } from "~/dummy/dummyReviews";
import { dummyAddress, emptyAddress } from "~/dummy/dummyAddress";
import HeadingFour from "~/components/Heading/HeadingFour.vue";
import ParagraphNormal from "~/components/Paragraph/ParagraphNormal.vue";
import BasketProduct from "~/components/BasketProduct.vue";
import ExpandibleRadioField from "~/components/ExpandibleRadioField.vue";
import AddressForm from "~/components/AddressForm.vue";
import AddField from "~/components/AddField.vue";
import CardForm from "~/components/CardForm.vue";
import RadioField from "~/components/RadioField.vue";
import BankTransferOptions from "~/components/BankTransferOptions.vue";
import CheckBox from "~/components/Input/CheckBox.vue";
import MainButtonPressable from "~/components/Button/MainButtonPressable.vue";
export default defineComponent({
    components: {
        HeadingFour,
        ParagraphNormal,
        BasketProduct,
        ExpandibleRadioField,
        AddressForm,
        AddField,
        CardForm,
        RadioField,
        BankTransferOptions,
        CheckBox,
        MainButtonPressable,
    },
    setup() {
        const products = ref(dummyProducts);
        const address = ref(dummyAddress);
        const empty = ref(emptyAddress);
        function changeField(value: string, field: string) {
            address.value[field] = value;
        }
        function changeEmpty(value: string, field: string) {
            empty.value[field] = value;
        }

        return {
            products,
            address,
            empty,
            changeField,
            changeEmpty
        };
    },
});
</script>
  