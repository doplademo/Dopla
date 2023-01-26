<template>
	<section class="py-12 px-4">
		<div class="flex flex-col lg:flex-row lg:gap-6">
			<about-step
				title="1. Lääkkeet hoitaa apteekki"
				description="Apteekin farmaseutti käsittelee ja tarkistaa tilauksesi, pitää huoltaajantasaisista reseptilääketiedoistasi ja ehdottaa halvempia lääkevalmisteita, mikäli sellaisia on saatavilla."
				:image="Images.researcher"
			/>
			<about-step
				title="2. Lääkkeet toimittaa Posti"
				description="Posti kuljettaa reseptilääketilaukset valitsemaasi osoitteeseen tai toimituspaikkaan. Maksat vain Postin toimituskulut."
				:image="Images.aboutDelivery"
			/>
			<about-step
				title="3. Lääkkeistä muistuttaa Dopla"
				description="Ensimmäisen tilauksen jälkeen, Dopla muistuttaa tulevien lääketilausten uusiutumisesta tekstiviestillä. Lisäksi Dopla muistuttaa vanhentuvista resepteistä ja niiden uusimisesta. Tilausta voi muokata milloin vain Omat tiedot -sivulla."
				:image="Images.receiptCustomer"
			/>
		</div>
	</section>
</template>

<script>
import AboutStep from './AboutStep.vue'
import { Images } from '~/utils/Images'
export default {
	components: { AboutStep },
	data() {
		return {
			Images,
		}
	},
}
</script>
