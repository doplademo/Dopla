<template>
    <main class="bg-greenHover pt-20">
        <p class="p-normal font-semibold text-blackLight uppercase w-full text-center">Confirmation</p>
        <h3 class="heading-three text-center font-medium mt-4">Thank you for your order</h3>
        <!-- Receipt -->
        <section class="mt-4 px-4 py-6">
            <div class="bg-white p-4 pb-32">
                <h4 class="heading-four ">Ison Omenan apteekki</h4>
                <p class="p-small my-6">Tilausnumero: 123456789</p>
                <!-- Order info header -->
                <div class="
						flex
						justify-between
						w-full
						uppercase
						text-blackLight
						pb-2
						border-b border-blackBold
					">
                    <p class="p-small">Määrä</p>
                    <p class="p-small">hinta</p>
                </div>

                <!-- Order body -->
                <div class="py-2 border-b border-blackBold">
                    <receipt-product product-name="Oftan scopolamin 2,50 mg/l" product-type="Silmätipat, liuos"
                        amount="1 X 10 ml" price="99.99 €" />
                    <receipt-product product-name="bisoprolol qwe pharma 5 mg, op98" product-type="Tabletti"
                        amount="1 X 98 kpl" price="199.99 €" />
                </div>
                <!-- Additional Calculation -->
                <div class="py-3 border-b border-blackBold">
                    <div class="flex justify-between my-1">
                        <p class="p-normal text-blackLight">Reimbursements total</p>
                        <p class="p-normal font-medium">-99.99 €</p>
                    </div>
                    <div class="flex justify-between my-1">
                        <p class="p-normal text-blackLight">Delivery</p>
                        <p class="p-normal font-medium">2.99 €</p>
                    </div>
                </div>

                <div class="flex justify-between mt-2">
                    <p class="p-normal font-medium">Amount due</p>
                    <p class="p-normal font-medium">99.99 €</p>
                </div>
            </div>
        </section>

        <section class="bg-white p-4">
            <div class="pb-4 border-b border-pinkLight">
                <p class="p-normal font-semibold">Saat vielä vahvistuksen, kun tilauksesi siirtyy Postin
                    kuljetettavaksi. Kuittisi löytyy omista tiedoistasi, sähköpostistasi
                    sekä paketista.
                </p>

                <p class="p-normal py-4">TÄHÄN TEKSTI PALVELUN TOIMINNASTA JA MUISTUTTAJISTA YMS
                    YMS.</p>

                <p class="p-normal">Here we put a link to
                    <hyperlink-normal>your account.</hyperlink-normal>
                </p>
            </div>
        </section>

        <section class="bg-white p-4 pb-10">
            <h4 class="heading-four font-medium">Would you recommend this to your friends</h4>
            <p class="p-normal my-2">Move slider from left to right</p>

            <form class="mt-2">
                <rate-slider :min="1" :max="10" :default="rangeValue" @on-slide="onSlide" />

                <div v-if="showComment" class="mt-6">
                    <p class="p-normal mb-2 font-semibold">Open comments</p>
                    <p class="p-normal mb-4">Is important</p>

                    <text-area class="w-full" :value="comment" @on-change="onComment" placeholder="Your comment"
                        :rows="6" :cols="3" />

                    <main-button-pressable title="send" upper class="w-full mt-4" />
                </div>
            </form>
        </section>
    </main>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"
import MainButtonPressable from '~/components/Button/MainButtonPressable.vue'
import HyperlinkNormal from '~/components/Hyperlink/HyperlinkNormal.vue'
import TextArea from '~/components/Input/TextArea.vue'
import RateSlider from '~/components/RateSlider.vue'
import ReceiptProduct from '~/components/ReceiptProduct.vue'
export default defineComponent({
    components: {
        ReceiptProduct,
        HyperlinkNormal,
        RateSlider,
        TextArea,
        MainButtonPressable,
    },

    setup() {
        const showComment = ref(false)
        const rangeValue = ref(5)
        const comment = ref('')

        function onSlide(value: number) {
            rangeValue.value = value

            if (!showComment.value) {
                showComment.value = true
            }
        }

        function onComment(value: string) {
            comment.value = value
        }

        return {
            showComment,
            rangeValue,
            comment,
            onSlide,
            onComment,
        }
    },
})
</script>
