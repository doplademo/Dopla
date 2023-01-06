<template>
	<main>
		<section-one />
		<StepsSection />
		<LadySection
			text="Treenit vievät suurimman osan ajastani ja haluankin maksimoida vapaa-ajan perheen ja ystävien seurassa. Dopla vapauttaa arjestani aikaa, jonka muuten käyttäisin asioiden hoitamiseen"
			person="Leo-Pekka Tähti"
			text2="pyörätuolikelauksen viisinkertainen paralympiavoittaja"
			image-src="assets/images/how-it-works/lady-orange-bg.png"
		>
			<template #top>
				<img src="~/assets/images/how-it-works/lady-orange-bg.png" alt="" />
			</template>
		</LadySection>
		<section-black
			heading="Doplassa lääketietosi ovat turvassa. "
			text="Doplan lääketietoja käsittelevät vain apteekin farmaseutit eikä tietoja koskaan luovuteta ulkopuolisille tahoille."
		/>
		<aloita-section />
		<img src="~/assets/images/how-it-works/mboile.png" alt="" />
	</main>
</template>

<script>
import SectionOne from '~/components/HowItWorks/SectionOne.vue'
import StepsSection from '~/components/HowItWorks/StepsSection.vue'
import LadySection from '~/components/Home/LadySection.vue'
import SectionBlack from '~/components/Home/SectionBlack.vue'
import AloitaSection from '~/components/Home/AloitaSection.vue'

export default {
	components: {
		SectionOne,
		StepsSection,
		LadySection,
		SectionBlack,
		AloitaSection,
	},
}
</script>
