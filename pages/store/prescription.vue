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
import {
	CREATE_PHARMACY_ORDER,
	getPrescribedProductsPath,
	REQUEST_PRESCRIPTION,
} from '~/utils/api/urls'
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
	async asyncData({ $axios, $auth }) {
		if (!$auth.loggedIn && !$auth.user?.id) {
			return {}
		}
		try {
			const path = getPrescribedProductsPath($auth.user!.id!)
			console.log(path)
			const res = await $axios.$get(path)
			console.log(res.data)

			return {
				prescribedProducts: res?.data,
			}
		} catch (e) {
			console.log(e)
		}
	},
	methods: {
		async onRequestPrescription(needsHelp: number) {
			if (!this.$auth.loggedIn && !this.$auth.user?.id) {
				return {}
			}
			try {
				const path = getPrescribedProductsPath(this.$auth.user!.id!)
				console.log(path)
				const res = await this.$axios.$get(path)
				console.log(res.data)

				return {
					prescribedProducts: res?.data,
				}
			} catch (e) {
				console.log(e)
			}
		},
	},
})
</script>

<style>
</style>