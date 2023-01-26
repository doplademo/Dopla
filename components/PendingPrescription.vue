<template>
	<div class="p-4 bg-mainBold rounded-md">
		<div class="flex justify-between items-center mb-4">
			<h4 class="heading-four text-white">{{ title }}</h4>
			<button @click="$emit('click')">
				<img src="~/assets/images/common/loading-circle.png" alt="" />
			</button>
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

<script>
export default {
	props: {
		title: {
			type: String,
			default: '',
		},
	},
}
</script>

<style>
</style>