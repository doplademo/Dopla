<template>
	<main class="flex flex-col">
		<section-one />
		<StepsSection />
		<LadySection
			text="Treenit vievät suurimman osan ajastani ja haluankin maksimoida vapaa-ajan perheen ja ystävien seurassa. Dopla vapauttaa arjestani aikaa, jonka muuten käyttäisin asioiden hoitamiseen"
			person="Leo-Pekka Tähti"
			text2="pyörätuolikelauksen viisinkertainen paralympiavoittaja"
			:image="Images.ladyOrangeBg"
		>
		</LadySection>
		<section-black
			heading="Doplassa lääketietosi ovat turvassa. "
			text="Doplan lääketietoja käsittelevät vain apteekin farmaseutit eikä tietoja koskaan luovuteta ulkopuolisille tahoille."
		/>
		<img
			:src="Images.mobilePhone"
			alt=""
			class="
				w-full
				h-[500px]
				object-cover object-center
				lg:h-[600px] lg:self-center lg:w-auto
			"
		/>
		<aloita-section />
	</main>
</template>

<script lang="ts">
import SectionOne from '~/components/HowItWorks/SectionOne.vue'
import StepsSection from '~/components/HowItWorks/StepsSection.vue'
import LadySection from '~/components/Home/LadySection.vue'
import SectionBlack from '~/components/Home/SectionBlack.vue'
import AloitaSection from '~/components/Home/AloitaSection.vue'

import { Images } from '~/utils/Images'
export default {
	components: {
		SectionOne,
		StepsSection,
		LadySection,
		SectionBlack,
		AloitaSection,
	},

	data() {
		return {
			Images,
		}
	},
}
</script>
