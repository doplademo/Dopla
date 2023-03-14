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
					@remove-prescription="removePrescription"
					@add-prescription="onAddFromInfoModal"
					@on-show="showOrder = true"
				/>
				<request-prescription
					v-if="(isDesktop && selectedProducts.length) || showOrder"
					:selected-products="selectedProducts"
					:needs-medical-assistance="needsMedicalAssistance"
					@on-back="showOrder = false"
					@request-prescription="onRequestPrescription"
					@remove-product="removePrescription"
					@medical-contact="onMedicalContact"
				/>
				<no-data v-else-if="isDesktop || !showOrder" />
			</div>
		</div>
	</main>
</template>

<script lang="ts">
// @ts-nocheck
import { defineComponent } from 'vue'
import GreetingSection from '~/components/StoreHome/GreetingSection.vue'
import NoData from '~/components/NoData.vue'
import RequestPrescription from '~/components/RequestPrescription.vue'
import useScreen from '~/utils/hooks/useScreen'
import { GET_USER_PRESCRIPTIONS, REQUEST_PRESCRIPTION } from '~/utils/api/urls'
import {
	PrescribedProduct,
	PrescribedProductAddition,
	// ProductRequest,
	User,
} from '~/types/user'
import PrescriptionSelect from '~/components/PrescriptionSelect.vue'
import { getAttributes } from '~/utils/user'
import { Basket } from '~/types/baskte'
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
			const prescribedProducts = (await $axios.$get(
				GET_USER_PRESCRIPTIONS
			)) as PrescribedProduct[]
			return {
				prescribedProducts,
			}
		} catch (e) {}
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
			return this.prescribedProducts.filter((product: PrescribedProduct) =>
				this.selectedProductIds.includes(product.id)
			)
		},
		basket() {
			return this.$store.state.basket.basket as Basket
		},
	},

	mounted() {
		this.prescribedProducts.forEach((product) => {
			this.productAdditions.set(product.id, {
				amount: 1,
				substituteId: '',
			})
		})
		console.log('basket', this.basket)
	},

	methods: {
		removePrescription(id: string) {
			if (this.selectedProductIds.includes(id)) {
				this.selectedProductIds = this.selectedProductIds.filter(
					(product) => product !== id
				)
			}
		},
		onRequestPrescription() {
			try {
				const user = this.$auth.user as User
				const attributes = getAttributes(user)
				const needsMedicalAssistance = this.needsMedicalAssistance
				this.$axios.$put(REQUEST_PRESCRIPTION, {
					ssn: attributes.hetu,
					additional_information: 'I just renewed my prescription',
					quote_id: this.basket.id,
					delivery_requests: this.selectedProducts.map(
						(product: PrescribedProduct) => {
							const sku = this.productAdditions.get(product.id)!.substituteId

							return {
								name: product.medicine_name,
								qty: this.productAdditions.get(product.id)!.amount,
								sku: sku || product.sku,
							}
						}
					),
					contact_phone: user.addresses[0].telephone,
					contact_proposals_date: new Date().toISOString(),
					contact_proposals_hours: needsMedicalAssistance,
				})
				this.$store.commit('appState/setCreatedTask', true)
				this.$store.commit(
					'appState/setSelectedProducts',
					this.selectedProducts
				)
				this.$router.push('/store')
			} catch (e) {}
		},
		onMedicalContact(value: string) {
			this.needsMedicalAssistance = value
		},
		onAddFromInfoModal(id: string) {
			if (!this.selectedProductIds.includes(id)) {
				this.selectedProductIds.push(id)
			}
		},
	},
})
</script>

<style>
</style>