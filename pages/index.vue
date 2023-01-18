<template>
	<main>
		<HeroSection />
		<TuleeSection />
		<HuolehtiiSection />
		<SaastaaSection />
		<LadySection
			text="Olen paljon tien päällä ja siksi joskus päivittäisten asioiden hoitaminen jää viime tippaan. Dopla on tuonut suunnattomasti helpotusta arkeeni."
			person="AIRA SAMULIN"
			text2="dolor sit amet, consectetur adipiscing elit."
			:image="Images.ladyYellowBG"
		/>
		<SectionBlack
			heading="Doplan käyttö on täysin ilmaista."
			text="Maksat vain lääkkeet ja toimituskulut."
		/>
		<ReviewsSection />
		<AloitaSection />
	</main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HeroSection from '~/components/Home/HeroSection.vue'
import TuleeSection from '~/components/Home/TuleeSection.vue'
import HuolehtiiSection from '~/components/Home/HuolehtiiSection.vue'
import SaastaaSection from '~/components/Home/SaastaaSection.vue'
import LadySection from '~/components/Home/LadySection.vue'
import SectionBlack from '~/components/Home/SectionBlack.vue'
import ReviewsSection from '~/components/Home/ReviewsSection.vue'
import AloitaSection from '~/components/Home/AloitaSection.vue'
import { Images } from '~/utils/Images'

export default defineComponent({
	components: {
		HeroSection,
		TuleeSection,
		HuolehtiiSection,
		SaastaaSection,
		LadySection,
		SectionBlack,
		ReviewsSection,
		AloitaSection,
	},

	data() {
		return { Images }
	},
})
</script>
