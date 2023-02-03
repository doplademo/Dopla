<template>
	<main>
		<HeroSection @on-started="login()" />
		<TuleeSection @on-click="getAlternatives()" />
		<HuolehtiiSection @on-click="testEmail()" />
		<SaastaaSection @on-click="getCurrency()" />
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
import {
	ALTERNATIVES_PATH,
	BASE_URL,
	GET_CURRENCY,
	TEST_EMAIL_PATH,
	TEST_LOGIN,
} from '~/utils/api/urls'

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

	setup() {},
	data() {
		return {
			Images,
		}
	},

	methods: {
		async login() {
			console.log(this.$axios.defaults.baseURL)
			try {
				await this.$auth.loginWith('local')
				console.log('logged in');
			} catch (e) {}
		},
		async getAlternatives() {
			try {
				const response = await this.$axios.$get(ALTERNATIVES_PATH)
				console.log(response.data)
			} catch (e) {
				console.log(e)
			}
		},
		async getCurrency() {
			try {
				const response = await this.$axios.$get(GET_CURRENCY)
				console.log(response.data)
			} catch (e) {
				console.log(e)
			}
		},
		async testEmail() {
			try {
				const response = await this.$axios.$post(TEST_EMAIL_PATH, {
					data: {
						email: 'test@my.email',
					},
				})
				console.log(response.data)
			} catch (e) {
				console.log(e)
			}
		},
	},
})
</script>
