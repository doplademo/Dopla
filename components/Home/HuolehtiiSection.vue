<template>
	<section class="px-4 pt-12 pb-4 flex flex-col items-start lg:flex-row-reverse lg:items-center lg:justify-center lg:gap-40 lg:px-24 lg:py-16">
		<div class="flex flex-col items-start lg:max-w-xl">
			<h2 class="heading-two">Huolehtii eduistasi</h2>
			<p class="p-large mt-4 mb-8">
				Dopla-palvelua käyttävän apteekin farmaseutit ehdottavat sinulle aina
				edullisimpia saatavilla olevia reseptilääkkeitä lääkemääräyksesi
				perusteella sekä laskevat lääkkeistä saatavien Kela-korvausten määrän.
			</p>
			<button class="main-button uppercase" @click="$emit('on-click')">
				<span class="mr-2">katso miten</span>
				<arrow-right-icon />
			</button>
		</div>
		<img
			class="mt-4 w-2/3 self-center lg:max-w-md"
			src="~/assets/images/home/Hintatietoinen.png"
			alt=""
		/>
	</section>
</template>

<script>
import { defineComponent } from 'vue'
import ArrowRightIcon from '../Icons/ArrowRightIcon.vue'
export default defineComponent({
	components: { ArrowRightIcon },
	emits: ['on-click'],
})
</script>

<style>
</style>