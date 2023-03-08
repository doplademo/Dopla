<template>
	<div class="p-4 bg-mainBold rounded-md">
		<div class="flex justify-between items-center mb-4">
			<h4 class="heading-four text-white">{{ title }}</h4>
			<button
				v-if="canUpdate"
				class="main-button uppercase"
				@click="$emit('update-prescription')"
			>
				update
			</button>
			<img
				v-else
				src="~/assets/images/common/loading-circle.png"
				alt=""
				class="loading-circle"
			/>
		</div>

		<h5 class="heading-five mb-4">
			<span class="text-white">Reseptit päivitetty 25.02.2022 klo 13:59</span>
			<br />
			<span class="text-blackLightest">
				Voit pyytää farmaseuttia tarkistamaan reseptisi seuraavan kerran
				25.02.2022 klo 15:59
			</span>
		</h5>
		<div class="p-normal text-white">
			<p>
				Pieni hetki. Apteekin farmaseutti tuo reseptilääketietojasi Doplaan.
			</p>
			<br />
			<p>Olet jonossa numerolla: X*</p>
			<br />
			<p>
				Saat tekstiviestin, kun reseptisi näkyvät ja ovat tilattavissa
				apteekista.
			</p>
			<br />
			<p>Odottaessa voit käyttää puhelinta tai tietokonetta normaalisti.</p>
			<br />
			<p>*Tietoja päivitetään apteekin aukioloaikoina.</p>
			<p>ma-pe 8.30-21</p>
			<p>la 9-19</p>
			<p>su 11-18</p>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

const TWO_HOURS = 7200000

export default defineComponent({
	props: {
		title: {
			type: String,
			default: '',
		},
		prescriptionUpdateAt: {
			type: String,
			default: '',
		},
		canUpdate: {
			type: Boolean,
			default: false,
		},
	},

	emits: ['update-prescription'],

	computed: {
		isUpdateAvailable() {
			const updatedAt = new Date(this.prescriptionUpdateAt)
			const now = new Date()
			const diff = now.getTime() - updatedAt.getTime()
			// if diff is greater than two hours
			if (diff > TWO_HOURS) {
				return true
			}

			return false
		},
	},
})
</script>

<style>
.loading-circle {
	animation: spin 1s linear infinite;
}

@keyframes spin {
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
}
</style>