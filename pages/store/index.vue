<template>
	<main class="flex flex-col">
		<greeting-section :name="name" />
		<div class="lg:self-center lg:w-full lg:max-w-screen-xl">
			<section
				class="px-4 lg:-mt-32 lg:flex lg:justify-between lg:gap-8 lg:w-full lg:items-start"
			>
				<div class="max-w-5xl pt-6 lg:pt-0">
					<pending-prescription
						v-if="cardNumber === 1"
						title="Reseptejäsi päivitetään"
						:prescription-update-at="attributes.prescription_updated"
						@update-prescription="updatePrescriptions"
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

				<no-data v-if="cardNumber === 1 && isDesktop" />
				<store-order-sent
					v-else-if="cardNumber !== 1 && isDesktop"
					hide-remove
				/>
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
import { User } from '~/types/user'
import {
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
		OrderReady,
		PopularNow,
		NoData,
		PrescriptionUpdated,
		StoreOrderSent,
	},
	layout: 'store',
	setup() {
		const { isDesktop } = useScreen()
		return {
			isDesktop,
		}
	},

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
				currencyInfo: null,
			}
		}
	},
	data() {
		const user = this.$auth.user as User
		const attributes = getAttributes(user)
		return {
			name: 'Ulla',
			dummyProducts,
			user,
			products: [] as any, // TODO type
			currencyInfo: null as any, // TODO type
			attributes,
			cardNumber: 1,
		}
	},
	watch: {
		'$auth.user': {
			handler() {
				const user = this.$auth.user as User
				const attributes = getAttributes(user)
				this.attributes = attributes
				this.user = user
				console.log('user changed', user, attributes);
			},
			deep: true,
		},
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
				await this.$auth.fetchUser()
			} catch (e) {
				console.log(e)
			}
		},
	},
})
</script>

<style>
</style>