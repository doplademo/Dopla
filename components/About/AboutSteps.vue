<template>
	<section class="py-12 px-4">
		<heading-two class-name="text-center">Tähän otsikko H2</heading-two>
		<div>
			<div class="flex flex-col">
				<img
					class="w-4/5 self-center mt-16 mb-2"
					src="~/assets/images/about/researcher.png"
					alt=""
				/>
				<heading-four class-name="font-semibold mb-4">
					1. Lääkkeet hoitaa apteekki
				</heading-four>
				<paragraph-large>
					Apteekin farmaseutti käsittelee ja tarkistaa tilauksesi, pitää huolta
					ajantasaisista reseptilääketiedoistasi ja ehdottaa halvempia
					lääkevalmisteita, mikäli sellaisia on saatavilla.
				</paragraph-large>
			</div>
			<div class="flex flex-col">
				<img
					class="w-1/2 self-center mt-16 mb-2"
					src="~/assets/images/about/delivery.png"
					alt=""
				/>
				<heading-four class-name="font-semibold mb-4">
					2. Lääkkeet toimittaa Posti
				</heading-four>
				<paragraph-large>
					Posti kuljettaa reseptilääketilaukset valitsemaasi osoitteeseen tai
					toimituspaikkaan. Maksat vain Postin toimituskulut.
				</paragraph-large>
			</div>
			<div class="flex flex-col">
				<img
					class="w-1/2 self-center mt-16 mb-2"
					src="~/assets/images/about/receipt-customer.png"
					alt=""
				/>
				<heading-four class-name="font-semibold mb-4">
					3. Lääkkeistä muistuttaa Dopla
				</heading-four>
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
import HeadingFour from '../Heading/HeadingFour.vue'
import HeadingTwo from '../Heading/HeadingTwo.vue'
import ParagraphLarge from '../Paragraph/ParagraphLarge.vue'

export default {
	components: { HeadingTwo, HeadingFour, ParagraphLarge },
}
</script>
