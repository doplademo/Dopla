<template>
	<main class="bg-pinkLight">
		<about-hero />
		<about-steps />
		<lady-section imageSrc=""
			text="Treenit vievät suurimman osan ajastani ja haluankin maksimoida vapaa-ajan perheen ja ystävien seurassa. Dopla vapauttaa arjestani aikaa, jonka muuten käyttäisin asioiden hoitamiseen"
			person="Leo-Pekka Tähti" text2="pyörätuolikelauksen viisinkertainen paralympiavoittaja">
			<template #top>
				<img src="~/assets/images/about/doctor.png" alt="" />
			</template>
		</lady-section>
		<aloita-section />
	</main>
</template>

<script>
import AboutHero from '~/components/About/AboutHero.vue'
import AboutSteps from '~/components/About/AboutSteps.vue'
import AloitaSection from '~/components/Home/AloitaSection.vue'
import LadySection from '~/components/Home/LadySection.vue'
export default {
	components: { AboutHero, AboutSteps, LadySection, AloitaSection },
}
</script>

<style>

</style>
