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
				<pending-prescription
					v-if="cardNumber === 1"
					title="Reseptejäsi päivitetään"
				>
					<button @click="cardNumber = 2">
						<img src="~/assets/images/common/loading-circle.png" alt="" />
					</button>
					<template #body>
						<h5 class="heading-five mb-4">
							<span class="text-white"
								>Reseptit päivitetty 25.02.2022 klo 13:59</span
							>
							<br />
							<span class="text-blackLightest">
								Voit pyytää farmaseuttia tarkistamaan reseptisi seuraavan kerran
								25.02.2022 klo 15:59
							</span>
						</h5>
						<div class="p-normal text-white">
							<p>
								Pieni hetki. Apteekin farmaseutti tuo reseptilääketietojasi
								Doplaan.
							</p>
							<br />
							<p>Olet jonossa numerolla: X*</p>
							<br />
							<p>
								Saat tekstiviestin, kun reseptisi näkyvät ja ovat tilattavissa
								apteekista.
							</p>
							<br />
							<p>
								Odottaessa voit käyttää puhelinta tai tietokonetta normaalisti.
							</p>
							<br />
							<p>*Tietoja päivitetään apteekin aukioloaikoina.</p>
							<p>ma-pe 8.30-21</p>
							<p>la 9-19</p>
							<p>su 11-18</p>
						</div>
					</template>
				</pending-prescription>

				<order-ready v-else-if="cardNumber === 2" />

				<no-data />
			</section>
		</div>

		<popular-now />
		<news-section />
	</main>
</template>

<script>
import NoData from '~/components/NoData.vue'
import OrderReady from '~/components/OrderReady.vue'
import PendingPrescription from '~/components/PendingPrescription.vue'
import PopularNow from '~/components/PopularNow.vue'
import GreetingSection from '~/components/StoreHome/GreetingSection.vue'
import NewsSection from '~/components/StoreHome/NewsSection.vue'
import { dummyProducts } from '~/dummy/dummyReviews'
export default {
	components: {
		NewsSection,
		GreetingSection,
		PendingPrescription,
		OrderReady,
		PopularNow,
NoData,
	},
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