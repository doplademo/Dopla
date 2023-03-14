<template>
	<main class="flex flex-col w-full items-center pt-20">
		<div class="px-4 lg:px-20 w-full">
			<progress-indicator width="35%" />
		</div>
		<div class="flex flex-col px-4 pb-16 mt-8 max-w-[540px]">
			<h4 class="heading-four font-semibold mb-4">Melkein valmista!</h4>
			<p class="p-large">
				Tarvitsemme vielä valtuutuksen, jotta palvelu toimii jouhevasti.
			</p>
			<!-- Instructions -->
			<form @submit.prevent="" class="flex flex-col mt-6">
				<onboarding-instruction
					title="Apteekin valtuutus ja jatkuva palvelu"
					:description="`Valtuutan Matinkylän apteekin farmaseuttisen henkilökunnan tarkastelemaan reseptitietojani
				                 ja ehdottamaan Dopla-palvelun kautta reseptilääkkeitteni oikea-aikaista tilaamista tekstiviestitse.\n\n
				Rekisteröinnin yhteydessä apteekin farmaseutti tuo ajantasaiset reseptilääketietoni palveluun.`"
				>
					<template #icon>
						<icon-lock />
					</template>
				</onboarding-instruction>
				<onboarding-instruction
					class="mt-8"
					title="Lääkevaihto"
					description="Lääkelain mukaan apteekki ehdottaa minulle edullisempaa reseptilääkettä mikäli sellainen on saatavilla."
				>
					<template #icon>
						<icon-refresh />
					</template>
				</onboarding-instruction>
				<onboarding-instruction
					class="mt-8"
					title="Toimitus"
					description="Valtuutan Postin noutamaan tilaukseni Matinkylän apteekista valitsemaani osoitteeseen."
				>
					<template #icon>
						<arrow-right-icon />
					</template>
				</onboarding-instruction>
			</form>
			<hyperlink-normal class="font-medium my-6"
				>Lue lisää valtuutuksista</hyperlink-normal
			>

			<check-box
				class="my-4"
				title="Hyväksyn valtuutuksen"
				:selected="authorization"
				@toggle="authorization = !authorization"
			/>

			<div class="bg-pinkLight w-full h-0.5 my-2" />

			<check-box
				class="mt-4"
				title="Markkinointi"
				subtitle="Lorem ipsum dolor sit amet"
				:selected="marketing"
				@toggle="marketing = !marketing"
			/>
			<check-box
				class="my-1 mt-4"
				title="Terveysuutiset"
				subtitle="Lorem ipsum dolor sit amet"
				:selected="news"
				@toggle="news = !news"
			/>

			<button
				:disabled="!authorization"
				type="submit"
				class="main-button uppercase mt-8"
				@click.prevent="onSubmit"
			>
				<span class="mr-2">seuraava</span>
				<arrow-right-icon />
			</button>
		</div>
	</main>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { OnboardingAttributes } from '~/types/onboarding'
import HyperlinkNormal from '~/components/Hyperlink/HyperlinkNormal.vue'
import ArrowRightIcon from '~/components/Icons/ArrowRightIcon.vue'
import IconLock from '~/components/Icons/IconLock.vue'
import IconRefresh from '~/components/Icons/IconRefresh.vue'
import CheckBox from '~/components/Input/CheckBox.vue'
import OnboardingInstruction from '~/components/onboarding/OnboardingInstruction.vue'

export default defineComponent({
	components: {
		OnboardingInstruction,
		ArrowRightIcon,
		HyperlinkNormal,
		CheckBox,
		IconLock,
		IconRefresh,
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

	mounted() {},

	methods: {
		onSubmit() {
			const date = new Date().toISOString()
			const attributes: OnboardingAttributes = {
				advertisement_accepted: this.marketing ? '1' : '0',
				newsletter1_subscribed: this.news ? '1' : '0',
				terms_accepted: this.authorization ? '1' : '0',
				...(this.authorization ? { terms_accepted_date: date } : {}),
				...(this.marketing ? { advertisement_accepted_date: date } : {}),
				...(this.news ? { newsletter1_subscribed_date: date } : {}),
			}
			this.$store.commit('onboarding/updateAttributes', attributes)
			this.$router.push('/onboarding/user-info')
		},
	},
})
</script>
