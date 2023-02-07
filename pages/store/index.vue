<template>
	<main class="flex flex-col">
		<greeting-section :name="name" />
		<div class="lg:self-center lg:w-full lg:max-w-screen-xl">
			<section
				class="
					px-4
					lg:-mt-32 lg:flex lg:justify-between lg:gap-8 lg:w-full lg:items-start
				"
			>
				<div>
					<pending-prescription
						v-if="cardNumber === 1"
						title="Reseptejäsi päivitetään"
						@click="cardNumber = 2"
					/>

					<order-ready v-else-if="cardNumber === 2" @click="cardNumber = 3" />
					<prescription-updated
						v-else-if="cardNumber === 3"
						title="Reseptejäsi päivitetään"
						@click="cardNumber = 1"
					/>
					<popular-now
						:store-products="products"
						:currency-info="currencyInfo"
					/>
				</div>

				<no-data v-if="cardNumber === 1" />
				<store-order-sent v-else />
			</section>
		</div>

		<news-section />
	</main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NoData from '~/components/NoData.vue'
import OrderReady from '~/components/OrderReady.vue'
import PendingPrescription from '~/components/PendingPrescription.vue'
import PopularNow from '~/components/PopularNow.vue'
import PrescriptionUpdated from '~/components/PrescriptionUpdated.vue'
import GreetingSection from '~/components/StoreHome/GreetingSection.vue'
import NewsSection from '~/components/StoreHome/NewsSection.vue'
import StoreOrderSent from '~/components/StoreOrderSent.vue'
import { dummyProducts } from '~/dummy/dummyReviews'
import { GetProductsParams } from '~/types/apiParams'
import { GET_CURRENCY, GET_PRODUCTS } from '~/utils/api/urls'
import { createGetURL } from '~/utils/api/urlsParams'
export default defineComponent({
	components: {
		NewsSection,
		GreetingSection,
		PendingPrescription,
		OrderReady,
		PopularNow,
		NoData,
		PrescriptionUpdated,
		StoreOrderSent,
	},
	layout: 'store',

	async asyncData({ $axios }) {
		try {
			const { data: currencyInfo } = await $axios.get(GET_CURRENCY)
			const {
				data: { items },
			} = await $axios.get(
				createGetURL<GetProductsParams>(GET_PRODUCTS, {
					currencyCode: currencyInfo.base_currency_code,
					searchCriteria: ' ',
					storeId: 1,
				})
			)

			return {
				products: items,
				currencyInfo,
			}
		} catch (e) {
			console.log(e)
			return {
				products: dummyProducts,
				currencyInfo: null,
			}
		}
	},
	data() {
		return {
			name: 'Ulla',
			dummyProducts,
			cardNumber: 1,
		}
	},
})
</script>

<style>
</style>