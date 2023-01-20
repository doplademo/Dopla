<template>
	<main class="bg-pinkLight">
		<about-hero />
		<h2 class="heading-two text-center text-mainStrong">Tähän otsikko H2</h2>

		<about-steps />
		<lady-section
			imageSrc=""
			text="Treenit vievät suurimman osan ajastani ja haluankin maksimoida vapaa-ajan perheen ja ystävien seurassa. Dopla vapauttaa arjestani aikaa, jonka muuten käyttäisin asioiden hoitamiseen"
			person="Leo-Pekka Tähti"
			text2="pyörätuolikelauksen viisinkertainen paralympiavoittaja"
			:image="Images.doctor"
		>
		</lady-section>
		<aloita-section />
	</main>
</template>

<script>
import AboutHero from '~/components/About/AboutHero.vue'
import AboutSteps from '~/components/About/AboutSteps.vue'
import AloitaSection from '~/components/Home/AloitaSection.vue'
import LadySection from '~/components/Home/LadySection.vue'

import { Images } from '~/utils/Images'
export default {
	components: { AboutHero, AboutSteps, LadySection, AloitaSection },
	data() {
		return {
			Images,
		}
	},
}
</script>

<style>
</style>
