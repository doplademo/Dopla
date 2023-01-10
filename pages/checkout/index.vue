<script>
import { defineComponent, ref } from "vue";
import { dummyProducts } from "~/dummy/dummyReviews";
import { dummyAddress, emptyAddress } from "~/dummy/dummyAddress";
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
        function changeField(value, field) {
            address.value[field] = value;
        }
        function changeEmpty(value, field) {
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
  
<template>
    <main>
        <section class="pt-20 pb-4 px-3 bg-greenHover">
            <p class="p-normal uppercase w-full text-center text-blackMedium font-semibold">Basket</p>
            <!-- billing -->
            <div class="p-6 mt-4 bg-white rounded">
                <h4 class="heading-four bg-pinkLight font-semibold p-2 mb-2 ">Order Summary</h4>
                <p class="p-normal">Alla näet yhteenvedon tämänhetkisestä tilauksestasi.
                </p>

                <basket-product v-for="product in products" :id="product.id" :key="product.id" :name="product.name"
                    :price="product.price" :discount="product.discount" :final-price="product.finalPrice" />

                <div class="flex justify-between text-blackMedium mt-4">
                    <p class="p-normal">Total reimbursement</p>
                    <p class="p-normal font-medium">-167.65 €</p>
                </div>
                <div class="flex justify-between text-blackBold mt-1">
                    <p class="p-normal">Amount due</p>
                    <p class="p-normal font-medium">200.99 €</p>
                </div>
            </div>
        </section>
        <!-- Billing -->
        <section class="p-4 pb-16 bg-white">

            <!-- Address -->
            <h4 class="heading-four font-semibold">Delivery address</h4>
            <!-- Dummy address with data -->
            <div class="mt-4">
                <expandible-radio-field :title="address.name" :description="address.address">
                    <address-form :addressInfo="address" @field-change="changeField" /></expandible-radio-field>
                <!-- Dummy address without data -->
                <add-field class="mt-4" title="Add new delivery method">
                    <address-form :addressInfo="empty" @field-change="changeField" />
                </add-field>
                <!-- Payment info -->
                <h4 class="heading-four font-semibold mt-8">Payment</h4>

                <p class="p-normal text-blackMedium mt-6">Payment cards</p>

                <!-- Add payment card -->
                <radio-field class="mt-4" title="Visa-kortti" description="123* **** **** **56" selected />
                <add-field class="mt-2" title="Add new payment card">
                    <card-form />
                </add-field>

                <p class="p-normal text-blackMedium mt-6">Other methods</p>

                <expandible-radio-field :title="address.name" :description="address.address">
                    <address-form :addressInfo="address" @field-change="changeField" /></expandible-radio-field>

                <expandible-radio-field class="mt-4" title="Pay by bank transfer" selected
                    container-class="bg-greenHover">
                    <bank-transfer-options />
                </expandible-radio-field>
                <expandible-radio-field class="mt-2" title="Apple Pay">
                </expandible-radio-field>
                <expandible-radio-field class="mt-2" title="Google Pay">
                </expandible-radio-field>

                <check-box class="mt-8" title="I accept to terms" subtitle="Subtitle 1"
                    error="Remember to consent to this." />

                <main-button-pressable class-name="mt-6 w-full" title="Pay" upper />
            </div>
        </section>
    </main>
</template>