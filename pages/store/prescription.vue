<template>
	<main class="flex flex-col lg:pb-24">
		<greeting-section v-if="isDesktop || !showOrder" />
		<div class="lg:self-center lg:w-full lg:max-w-screen-xl">
			<div class="lg:flex lg:items-start lg:-mt-32 lg:gap-16">
				<prescription-select
					v-if="isDesktop || !showOrder"
					:prescribed-products="prescribedProducts"
					:selected-product-ids="selectedProductIds"
					:product-additions="productAdditions"
					@toggle="toggleProduct"
					@on-show="showOrder = true"
				/>
				<request-prescription
					v-if="(isDesktop && selectedProducts.length) || showOrder"
					:selected-products="selectedProducts"
					:needs-medical-assistance="needsMedicalAssistance"
					@on-back="showOrder = false"
					@request-prescription="onRequestPrescription"
					@remove-product="toggleProduct"
					@medical-contact="onMedicalContact"
				/>
				<no-data v-else-if="isDesktop || !showOrder" />
			</div>
		</div>
	</main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import GreetingSection from '~/components/StoreHome/GreetingSection.vue'
import NoData from '~/components/NoData.vue'
import RequestPrescription from '~/components/RequestPrescription.vue'
import useScreen from '~/utils/hooks/useScreen'
import { GET_USER_PRESCRIPTIONS, REQUEST_PRESCRIPTION } from '~/utils/api/urls'
import {
	PrescribedProduct,
	PrescribedProductAddition,
	ProductRequest,
	User,
} from '~/types/user'
import PrescriptionSelect from '~/components/PrescriptionSelect.vue'
import { getAttributes } from '~/utils/user'
const NEED_MEDICAL_ASSISTANCE = 'Tarvitsen lääkeneuvontaa puhelimitse'
const DONT_NEED_MEDICAL_ASSISTANCE = 'En tarvitse lääkeneuvontaa'
export default defineComponent({
	components: {
		GreetingSection,
		NoData,
		RequestPrescription,
		PrescriptionSelect,
	},
	layout: 'store',
	middleware: ['loggedIn', 'basket'],

	setup() {
		const { isDesktop } = useScreen()

		return {
			isDesktop,
		}
	},
	async asyncData({ $axios, $auth }) {
		if (!$auth.loggedIn && !$auth.user?.id) {
			return {}
		}
		try {
			const prescribedProducts = await $axios.$get(GET_USER_PRESCRIPTIONS)
			console.log(prescribedProducts)
			return {
				prescribedProducts,
			}
		} catch (e) {
			console.log(e)
		}
	},

	data() {
		return {
			prescribedProducts: [] as PrescribedProduct[],
			selectedProductIds: [] as string[],
			productAdditions: new Map<any, PrescribedProductAddition>(),
			showOrder: false,
			needsMedicalAssistance: '-1',
		}
	},

	computed: {
		selectedProducts() {
			return this.prescribedProducts.filter((product) =>
				this.selectedProductIds.includes(product.id)
			)
		},
	},

	mounted() {
		this.prescribedProducts.forEach((product) => {
			this.productAdditions.set(product.id, {
				amount: 1,
				substituteId: '',
			})
		})
	},

	methods: {
		toggleProduct(id: string) {
			if (this.selectedProductIds.includes(id)) {
				this.selectedProductIds = this.selectedProductIds.filter(
					(product) => product !== id
				)
			} else {
				this.selectedProductIds.push(id)
			}
		},
		onRequestPrescription() {
			try {
				const user = this.$auth.user as User
				const attributes = getAttributes(user)
				console.log(user, attributes)
				const needsMedicalAssistance = this.needsMedicalAssistance
				this.$axios.$put(REQUEST_PRESCRIPTION, {
					ssn: attributes.hetu,
					additional_information: 'I just renewed my prescription',
					quote_id: user.group_id,
					delivery_requests: this.selectedProducts.map((product) => {
						const request = {
							name: product.medicine_name,
							qty: this.productAdditions.get(product.id)!.amount,
						} as ProductRequest

						const sku = this.productAdditions.get(product.id)!.substituteId
						if (sku) {
							request.sku = sku
						} else {
							request.product_id = product.id
						}

						return request
					}),
					contact_phone: user.addresses[0].telephone,
					contact_proposals_date: new Date().toISOString(),
					contact_proposals_hours:
						needsMedicalAssistance === '1'
							? NEED_MEDICAL_ASSISTANCE
							: DONT_NEED_MEDICAL_ASSISTANCE,
				})
			} catch (e) {
				console.log(e)
			}
		},
		onMedicalContact(value: string) {
			this.needsMedicalAssistance = value
		},
	},
})
</script>

<style>
</style>