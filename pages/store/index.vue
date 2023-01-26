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
					<popular-now />
				</div>

				<no-data v-if="cardNumber === 1" />
				<store-order-sent v-else />
			</section>
		</div>

		<news-section />
	</main>
</template>

<script>
import NoData from '~/components/NoData.vue'
import OrderReady from '~/components/OrderReady.vue'
import PendingPrescription from '~/components/PendingPrescription.vue'
import PopularNow from '~/components/PopularNow.vue'
import PrescriptionUpdated from '~/components/PrescriptionUpdated.vue'
import GreetingSection from '~/components/StoreHome/GreetingSection.vue'
import NewsSection from '~/components/StoreHome/NewsSection.vue'
import StoreOrderSent from '~/components/StoreOrderSent.vue'
import { dummyProducts } from '~/dummy/dummyReviews'
export default {
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
	data() {
		return {
			name: 'Ulla',
			dummyProducts,
			cardNumber: 1,
		}
	},
}
</script>

<style>
</style>