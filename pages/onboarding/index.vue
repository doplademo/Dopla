<template>
	<main class="flex flex-col w-full items-center pt-20">
		<div class="px-4 lg:px-20 w-full">
			<progress-indicator width="15%" />
		</div>
		<div class="flex flex-col px-4 pb-16 max-w-[540px] mt-8">
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
			<nuxt-link to="/tos" class="link-normal text-greenBold mt-4 lg:mt-6">
				Read T&C
			</nuxt-link>
			<nuxt-link to="/tos" class="link-normal text-greenBold mt-4 lg:mt-6">
				Read privacy policy
			</nuxt-link>

			<check-box
				class="my-4 lg:mt-6"
				title="I’ll agree to T&C"
				:selected="authorization"
				@toggle="authorization = !authorization"
			/>

			<div class="bg-pinkLight w-full h-0.5 my-2" />
			<p class="p-normal my-4">
				Tunnistaudu Suomi.fi -palvelun kautta, niin pääset käyttämään palvelua
				turvallisesti.
			</p>

			<a
				:href="`http://test.iisiapteekki.fi/sso/saml2/login?domain=${domain}`"
				class="main-button uppercase mt-4"
			>
				<span class="mr-2">Advance</span>
				<arrow-right-icon />
			</a>
		</div>
	</main>
</template>

<script>
import { defineComponent } from 'vue'
import ArrowRightIcon from '~/components/Icons/ArrowRightIcon.vue'
import BasketIcon from '~/components/Icons/BasketIcon.vue'
import IconLock from '~/components/Icons/IconLock.vue'
import IconProfile from '~/components/Icons/IconProfile.vue'
import CheckBox from '~/components/Input/CheckBox.vue'
import OnboardingInstruction from '~/components/onboarding/OnboardingInstruction.vue'
import ProgressIndicator from '~/components/ProgressIndicator.vue'
import { redirectUser } from '~/utils/onboarding'

export default defineComponent({
	components: {
		OnboardingInstruction,
		ArrowRightIcon,
		CheckBox,
		IconProfile,
		BasketIcon,
		IconLock,
		ProgressIndicator,
	},

	async asyncData({ route, $auth, redirect }) {
		const token = route.query.token
		if (!token) {
			return
		}
		// login user with token retrieved from idp
		await $auth.setUserToken(token)
		await $auth.fetchUser()

		redirectUser($auth.user, redirect)
	},

	data() {
		return {
			authorization: false,
			domain: process.env.NODE_ENV === 'production' ? 'dopla' : 'localhost',
		}
	},
})
</script>
