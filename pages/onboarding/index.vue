<template>
	<main class="flex flex-col w-full items-center">
		<div class="flex flex-col px-4 pb-16 pt-20 max-w-[540px]">
			<h1 class="heading-three font-medium mb-4">Onboarding step 1!</h1>
			<!-- Instructions -->
			<div class="flex flex-col mt-6">
				<onboarding-instruction
					title="Label"
					description="Voit tarkastella palvelussa resepti- ja käyttäjätietojasi. Siksi tunnistaudut ensin pankkitunnuksilla. Tilauksiisi liittyvät tiedot tallennetaan xxx järjestelmään, jossa tilauksiasi käsittelevät farmaseutit voivat käyttää niitä."
				>
					<template #icon>
						<icon-profile size="medium" />
					</template>
				</onboarding-instruction>
				<onboarding-instruction
					class="mt-8"
					title="Label"
					description="Palvelussa voit maksaa reseptilääketilauksesi. Verkkomaksut on maksettava xx tunnin kuluessa asioinnista. Maksu välitetään maksunvälittäjän kautta."
				>
					<template #icon>
						<basket-icon />
					</template>
				</onboarding-instruction>
				<onboarding-instruction
					class="mt-8"
					title="Label"
					description="Valtuutan Postin noutamaan tilaukseni Matinkylän apteekista valitsemaani osoitteeseen."
				>
					<template #icon>
						<icon-lock />
					</template>
				</onboarding-instruction>
			</div>
			<nuxt-link to="/tos" class="link-normal text-greenBold mt-4">
				Read T&C
			</nuxt-link>
			<nuxt-link to="/tos" class="link-normal text-greenBold mt-4">
				Read privacy policy
			</nuxt-link>

			<check-box
				class="my-4"
				title="I’ll agree to T&C"
				:selected="authorization"
				@toggle="authorization = !authorization"
			/>

			<div class="bg-pinkLight w-full h-0.5 my-2" />
			<p class="p-normal my-4">
				Tunnistaudu Suomi.fi -palvelun kautta, niin pääset käyttämään palvelua
				turvallisesti.
			</p>

			<nuxt-link to="/onboarding/agreements" class="main-button uppercase mt-4">
				<span class="mr-2">Advance</span>
				<arrow-right-icon />
			</nuxt-link>
		</div>
	</main>
</template>

<script>
import { defineComponent, ref } from 'vue'
import ArrowRightIcon from '~/components/Icons/ArrowRightIcon.vue'
import BasketIcon from '~/components/Icons/BasketIcon.vue'
import IconLock from '~/components/Icons/IconLock.vue'
import IconProfile from '~/components/Icons/IconProfile.vue'
import CheckBox from '~/components/Input/CheckBox.vue'
import OnboardingInstruction from '~/components/onboarding/OnboardingInstruction.vue'

export default defineComponent({
	components: {
		OnboardingInstruction,
		ArrowRightIcon,
		CheckBox,
		IconProfile,
		BasketIcon,
		IconLock,
	},

	setup() {
		const authorization = ref(false)
		const marketing = ref(false)
		const news = ref(false)

		return {
			authorization,
			marketing,
			news,
		}
	},
})
</script>
