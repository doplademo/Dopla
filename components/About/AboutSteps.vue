<template>
	<section class="py-12 px-4">
		<h2 class="heading-two text-center">Tähän otsikko H2</h2>
		<div>
			<div class="flex flex-col">
				<img class="w-4/5 self-center mt-16 mb-2" src="~/assets/images/about/researcher.png" alt="" />
				<h4 class="heading-four font-semibold mb-4">
					1. Lääkkeet hoitaa apteekki
				</h4>
				<paragraph-large>
					Apteekin farmaseutti käsittelee ja tarkistaa tilauksesi, pitää huolta
					ajantasaisista reseptilääketiedoistasi ja ehdottaa halvempia
					lääkevalmisteita, mikäli sellaisia on saatavilla.
				</paragraph-large>
			</div>
			<div class="flex flex-col">
				<img class="w-1/2 self-center mt-16 mb-2" src="~/assets/images/about/delivery.png" alt="" />
				<h4 class="heading-four font-semibold mb-4">
					2. Lääkkeet toimittaa Posti
				</h4>
				<paragraph-large>
					Posti kuljettaa reseptilääketilaukset valitsemaasi osoitteeseen tai
					toimituspaikkaan. Maksat vain Postin toimituskulut.
				</paragraph-large>
			</div>
			<div class="flex flex-col">
				<img class="w-1/2 self-center mt-16 mb-2" src="~/assets/images/about/receipt-customer.png" alt="" />
				<h4 class="heading-four font-semibold mb-4">
					3. Lääkkeistä muistuttaa Dopla
				</h4>
				<paragraph-large>
					Ensimmäisen tilauksen jälkeen, Dopla muistuttaa tulevien
					lääketilausten uusiutumisesta tekstiviestillä. Lisäksi Dopla
					muistuttaa vanhentuvista resepteistä ja niiden uusimisesta. Tilausta
					voi muokata milloin vain Omat tiedot -sivulla.
				</paragraph-large>
			</div>
		</div>
	</section>
</template>

<script>
import ParagraphLarge from '../Paragraph/ParagraphLarge.vue'

export default {
	components: { ParagraphLarge },
}
</script>
