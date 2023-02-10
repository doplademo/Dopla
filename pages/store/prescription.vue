<template>
	<main class="flex flex-col lg:pb-24">
		<greeting-section v-if="isDesktop || !showOrder" :name="name" />
		<div class="lg:self-center lg:w-full lg:max-w-screen-xl">
			<div class="lg:flex lg:items-start lg:-mt-32 lg:gap-16">
				<prescription-select
					v-if="isDesktop || !showOrder"
					@on-select-any="selectedOrder = true"
					@on-show="showOrder = true"
				/>
				<request-prescription
					v-if="(isDesktop && selectedOrder) || showOrder"
					@on-back="showOrder = false"
					@request-prescription="onRequestPrescription"
				/>
				<no-data v-else-if="isDesktop || !showOrder" />
			</div>
		</div>
	</main>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import GreetingSection from '~/components/StoreHome/GreetingSection.vue'
import NoData from '~/components/NoData.vue'
import RequestPrescription from '~/components/RequestPrescription.vue'
import PrescriptionSelect from '~/components/PrescriptionSelect.vue'
import useScreen from '~/utils/hooks/useScreen'
import { CREATE_PHARMACY_ORDER, REQUEST_PRESCRIPTION } from '~/utils/api/urls'
export default defineComponent({
	components: {
		GreetingSection,
		NoData,
		RequestPrescription,
		PrescriptionSelect,
	},
	layout: 'store',
	setup() {
		const name = ref('Ulla')
		const showOrder = ref(false)
		const selectedOrder = ref(false)
		const { isDesktop } = useScreen()

		return {
			name,
			showOrder,
			isDesktop,
			selectedOrder,
		}
	},
	methods: {
		async onRequestPrescription(needsHelp: number) {
			console.log(this.$auth.user)
			const res = await this.$axios.$put(REQUEST_PRESCRIPTION, {
				ssn: '210281-9981',
				quote_id: 99,
				additional_information: 'I just renewed my prescription',
				delivery_requests: [
					{
						sku: '434811',
						name: 'BURANA 800 mg tabl, kalvopääll 30 fol',
						quantity: 1,
					},
					{
						product_id: '520379',
						name: 'VIAGRA 100 mg tabl, kalvopääll 12 fol',
						quantity: 2,
					},
				],
				contact_phone: '0401234567',
				contact_proposals_date: '25.10.2022',
				contact_proposals_hours: 'kello 14-16 tai kello 18 jälkeen',
			})
		},
	},
})
</script>

<style>
</style>