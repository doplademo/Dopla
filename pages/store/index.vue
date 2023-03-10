<template>
	<main class="flex flex-col">
		<greeting-section :name="name" />
		<div class="lg:self-center lg:w-full lg:max-w-screen-xl">
			<section
				class="px-4 lg:-mt-32 lg:flex lg:justify-between lg:gap-8 lg:w-full lg:items-start"
			>
				<div class="max-w-5xl pt-6 lg:pt-0">
					<pending-prescription
						v-if="!createdTask"
						title="Reseptejäsi päivitetään"
						:prescription-update-at="attributes.prescription_updated"
						:can-update="!updatedTask"
						@update-prescription="updatePrescriptions"
					/>

					<!-- <order-ready v-else-if="cardNumber === 2" />-->
					<prescription-updated
						v-else
						title="Reseptejäsi päivitetään"
						@click="cardNumber = 1"
					/>
					<popular-now
						:store-products="products"
						:currency-info="currencyInfo"
					/>
				</div>

				<store-order-sent
					v-if="selectedProducts.length && isDesktop"
					:selected-products="selectedProducts"
					hide-remove
				/>
				<no-data v-else-if="isDesktop" />
			</section>
		</div>

		<news-section />
	</main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NoData from '~/components/NoData.vue'
import PendingPrescription from '~/components/PendingPrescription.vue'
import PopularNow from '~/components/PopularNow.vue'
import PrescriptionUpdated from '~/components/PrescriptionUpdated.vue'
import GreetingSection from '~/components/StoreHome/GreetingSection.vue'
import NewsSection from '~/components/StoreHome/NewsSection.vue'
import StoreOrderSent from '~/components/StoreOrderSent.vue'
import { dummyProducts } from '~/dummy/dummyReviews'
import { GetProductsParams } from '~/types/apiParams'
import { Basket } from '~/types/baskte'
import { StoreProduct, User } from '~/types/user'
import {
	ADD_TO_CART_PATH,
	GET_CURRENCY,
	GET_PRODUCTS,
	UPDATE_PRESCRIPTION,
} from '~/utils/api/urls'
import { createGetURL } from '~/utils/api/urlsParams'
import useScreen from '~/utils/hooks/useScreen'
import { getAttributes } from '~/utils/user'
export default defineComponent({
	components: {
		NewsSection,
		GreetingSection,
		PendingPrescription,
		PopularNow,
		NoData,
		PrescriptionUpdated,
		StoreOrderSent,
	},
	layout: 'store',
	middleware: ['basket'],

	setup() {
		const { isDesktop } = useScreen()
		return {
			isDesktop,
		}
	},

	async asyncData({ $axios }) {
		const data = {} as any
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
			data.products = items
			data.currencyInfo = currencyInfo
		} catch (e) {
			data.currencyInfo = null
		}

		return data
	},
	data() {
		const user = this.$auth.user as User
		const attributes = getAttributes(user)
		return {
			name: 'Ulla',
			dummyProducts,
			user,
			products: [] as StoreProduct[], // TODO type
			currencyInfo: null as any, // TODO type
			attributes,
			cardNumber: 1,
		}
	},
	computed: {
		selectedProducts() {
			return this.$store.state.appState.selectedProducts
		},
		createdTask() {
			return this.$store.state.appState.createdTask
		},
		updatedTask() {
			return this.$store.state.appState.updatedTask
		},
	},
	watch: {
		'$auth.user': {
			handler() {
				const user = this.$auth.user as User
				const attributes = getAttributes(user)
				this.attributes = attributes
				this.user = user
			},
			deep: true,
		},
	},

	mounted() {
	},

	methods: {
		async updatePrescriptions() {
			try {
				await this.$axios.$put(UPDATE_PRESCRIPTION, {
					tasks: [
						{
							ssn: this.attributes.hetu,
							customer_firstname: this.user.firstname,
							customer_lastname: this.user.lastname,
							type: 'update',
							status: 'new',
							requires_contacting: 1,
							customer_contacted: 0,
						},
					],
				})
				this.$store.commit('appState/setUpdatedTask', true)
				await this.$auth.fetchUser()
			} catch (e) {
			}
		},
		addProductToCart(product: StoreProduct, qty: number) {
			const basket = this.$store.state.basket.basket as Basket
			this.$axios.$post(ADD_TO_CART_PATH, {
				cartItem: {
					sku: product.id,
					qty,
					quote_id: basket.id,
				},
			})
		},
	},
})
</script>

<style>
</style>