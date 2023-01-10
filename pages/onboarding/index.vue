<template>
	<main>
		<div class="flex flex-col px-4 pb-16 pt-20" is-onboarding>
			<h4 class="heading-four font-semibold mb-4">Melkein valmista!</h4>
			<p class="p-large">Tarvitsemme vielä valtuutuksen, jotta palvelu toimii
				jouhevasti.</p>
			<!-- Instructions -->
			<div class="flex flex-col mt-6">
				<onboarding-instruction title="Apteekin valtuutus ja jatkuva palvelu" :description="`Valtuutan Matinkylän apteekin farmaseuttisen henkilökunnan tarkastelemaan reseptitietojani
				                 ja ehdottamaan Dopla-palvelun kautta reseptilääkkeitteni oikea-aikaista tilaamista tekstiviestitse.\n\n
				Rekisteröinnin yhteydessä apteekin farmaseutti tuo ajantasaiset reseptilääketietoni palveluun.`">
					<template #icon>
						<arrow-right-icon />
					</template>
				</onboarding-instruction>
				<onboarding-instruction class="mt-8" title="Lääkevaihto"
					description="Lääkelain mukaan apteekki ehdottaa minulle edullisempaa reseptilääkettä mikäli sellainen on saatavilla.">
					<template #icon>
						<basket-icon />
					</template>
				</onboarding-instruction>
				<onboarding-instruction class="mt-8" title="Toimitus"
					description="Valtuutan Postin noutamaan tilaukseni Matinkylän apteekista valitsemaani osoitteeseen.">
					<template #icon>
						<arrow-right-icon />
					</template>
				</onboarding-instruction>
			</div>
			<hyperlink-normal class="font-medium my-6">Lue lisää valtuutuksista</hyperlink-normal>

			<check-box class="my-4" title="Hyväksyn valtuutuksen" :selected="authorization"
				@on-press="toggleAuthorization()" />

			<div class="bg-pinkLight w-full h-0.5 my-2" />

			<check-box class="mt-4" title="Markkinointi" subtitle="Lorem ipsum dolor sit amet"
				:selected="marketing" @on-press="toggleMarketing()" />
			<check-box class="my-1 mt-4" title="Terveysuutiset" subtitle="Lorem ipsum dolor sit amet"
				:selected="news" @on-press="toggleNews()" />

			<main-button to="/onboarding/user-info" class-name="mt-8" title="seuraava" upper />
		</div>
	</main>
</template>

<script>
import MainButton from '~/components/Button/MainButton.vue'
import HyperlinkNormal from '~/components/Hyperlink/HyperlinkNormal.vue'
import ArrowRightIcon from '~/components/Icons/ArrowRightIcon.vue'
import BasketIcon from '~/components/Icons/BasketIcon.vue'
import CheckBox from '~/components/Input/CheckBox.vue'
import OnboardingInstruction from '~/components/onboarding/OnboardingInstruction.vue'

export default {
	components: {
		OnboardingInstruction,
		ArrowRightIcon,
		BasketIcon,
		HyperlinkNormal,
		CheckBox,
		MainButton,
	},

	data() {
		return {
			authorization: false,
			marketing: false,
			news: false,
		}
	},
	methods: {
		toggleAuthorization() {
			this.authorization = !this.authorization
		},
		toggleMarketing() {
			this.marketing = !this.marketing
		},
		toggleNews() {
			this.news = !this.news
		},
	},
}
</script>,
Hyperlink

<style>

</style>
