<template>
	<main class="flex flex-col bg-greenHover pt-20 lg:pt-0 lg:bg-opacity-0">
		<checkout-hero title="Thank you for your order">
			<template #description>
				<p class="p-normal font-medium">
					Saat vielä vahvistuksen, kun tilauksesi siirtyy Postin
					kuljetettavaksi. Kuittisi löytyy omista tiedoistasi, sähköpostistasi
					sekä paketista.
				</p>
				<div>
					<p class="p-normal mt-4">
						TÄHÄN TEKSTI PALVELUN TOIMINNASTA JA MUISTUTTAJISTA YMS YMS.
					</p>

					<p class="p-normal mt-4">
						Here comes a text about being able to change stuff in your
						<nuxt-link class="underline text-greenBold" to="#"
							>own details</nuxt-link
						>
					</p>
				</div>
			</template>
			<template #right>
				<div class="flex h-40 gap-10 mt-8">
					<img :src="Images.coach" alt="" />
					<img :src="Images.delivery" alt="" />
				</div>
			</template>
		</checkout-hero>

		<p
			class="p-normal font-semibold text-blackLight uppercase w-full text-center lg:hidden"
		>
			Confirmation
		</p>
		<h3 class="heading-three text-center font-medium mt-4 lg:hidden">
			Thank you for your order
		</h3>
		<!-- Receipt -->

		<div class="lg:self-center lg:w-full lg:max-w-screen-xl">
			<div
				class="px-4 lg:-mt-16 lg:flex lg:flex-row-reverse lg:justify-between lg:gap-32 lg:w-full lg:items-start"
			>
				<!-- TODO make the spikes -->
				<section class="mt-4 px-4 py-6">
					<div
						class="bg-white p-4 pb-32 lg:border lg:border-blackLightest lg:pb-16"
					>
						<h4 class="heading-four">Ison Omenan apteekki</h4>
						<p class="p-small my-6">Tilausnumero: 123456789</p>
						<!-- Order info header -->
						<div
							class="flex justify-between w-full uppercase text-blackLight pb-2 border-b border-blackBold"
						>
							<p class="p-small">Määrä</p>
							<p class="p-small">hinta</p>
						</div>

						<!-- Order body -->
						<div class="py-2 border-b border-blackBold">
							<receipt-product
								v-for="product in basket.items"
								:key="product.item_id"
								:product-name="product.name"
								:product-type="product.product_type"
								amount="1 X 10 ml"
								:price="product.priceString"
							/>
						</div>
						<!-- Additional Calculation -->
						<div class="py-3 border-b border-blackBold">
							<div class="flex justify-between my-1">
								<p class="p-normal text-blackLight">Reimbursements total</p>
								<p class="p-normal font-medium">-0.00 €</p>
							</div>
							<div class="flex justify-between my-1">
								<p class="p-normal text-blackLight">Delivery</p>
								<p class="p-normal font-medium">0.00 €</p>
							</div>
						</div>

						<div class="flex justify-between mt-2">
							<p class="p-normal font-medium">Amount due</p>
							<p class="p-normal font-medium">
								{{ basket.grand_total_string }}
							</p>
						</div>
					</div>
				</section>
				<div class="lg:max-w-[500px] mt-20">
					<section class="bg-white p-4 lg:hidden">
						<div class="pb-4 border-b border-pinkLight">
							<p class="p-normal font-semibold">
								Saat vielä vahvistuksen, kun tilauksesi siirtyy Postin
								kuljetettavaksi. Kuittisi löytyy omista tiedoistasi,
								sähköpostistasi sekä paketista.
							</p>

							<p class="p-normal py-4">
								TÄHÄN TEKSTI PALVELUN TOIMINNASTA JA MUISTUTTAJISTA YMS YMS.
							</p>

							<p class="p-normal">
								Here we put a link to
								<hyperlink-normal>your account.</hyperlink-normal>
							</p>
						</div>
					</section>

					<section class="bg-white p-4 pb-10">
						<h4 class="heading-four font-medium">
							Would you recommend this to your friends
						</h4>
						<p class="p-normal my-2">Move slider from left to right</p>

						<form class="mt-4">
							<rate-slider
								:min="1"
								:max="10"
								:default="rangeValue"
								@on-slide="onSlide"
							/>

							<div v-if="showComment" class="mt-6">
								<p class="p-normal mb-2 font-semibold">Open comments</p>
								<p class="p-normal mb-4">Is important</p>

								<text-area
									class-name="w-full"
									:value="comment"
									@on-change="onComment"
									placeholder="Your comment"
									:rows="6"
									:cols="3"
								/>

								<main-button-pressable
									title="send"
									upper
									class-name="w-full mt-4"
								/>
							</div>
						</form>
					</section>
				</div>
			</div>
		</div>
	</main>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import MainButtonPressable from '~/components/Button/MainButtonPressable.vue'
import HyperlinkNormal from '~/components/Hyperlink/HyperlinkNormal.vue'
import TextArea from '~/components/Input/TextArea.vue'
import RateSlider from '~/components/RateSlider.vue'
import ReceiptProduct from '~/components/ReceiptProduct.vue'
import { Basket } from '~/types/baskte'
import { Images } from '~/utils/Images'
export default defineComponent({
	components: {
		ReceiptProduct,
		HyperlinkNormal,
		RateSlider,
		TextArea,
		MainButtonPressable,
	},
	layout: 'store',
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
	data() {
		return {
			Images,
		}
	},
	computed: {
		basket() {
			return this.$store.state.basket.basket as Basket
		},
	},
})
</script>
