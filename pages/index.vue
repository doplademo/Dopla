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
	GET_CURRENCY,
	GET_PHARMACIST_TASKS,
	TEST_EMAIL_PATH,
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
			try {
				await this.$auth.loginWith('local', {
					data: {
						username: 'test@origodesign.com',
						password: 'Batman2023!',
					},
				})
			} catch (e) {}
		},
		async getAlternatives() {
			try {
				const res = await this.$axios.$get(GET_PHARMACIST_TASKS)
				return { tasks: res.data }
			} catch (error) {
				return {
					tasks: [],
				}
			}
		},
		async getCurrency() {
			try {
				const response = await this.$axios.$get(GET_CURRENCY)
			} catch (e) {}
		},
		async testEmail() {
			try {
				const response = await this.$axios.$post(TEST_EMAIL_PATH, {
					data: {
						email: 'test@my.email',
						fieldName: 'customerEmail',
					},
				})
			} catch (e) {}
		},
	},
})
</script>
