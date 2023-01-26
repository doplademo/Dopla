<template>
	<section
		class="
			flex flex-col
			items-start
			bg-redLightest
			px-4
			pt-12
			pb-4
			lg:flex-row lg:items-center lg:px-24 lg:py-16 lg:gap-8 lg:justify-center
		"
	>
		<div class="flex flex-col items-start max-w-2xl">
			<h2 class="heading-two">Tulee luoksesi</h2>
			<p class="p-large text-blackBold mt-4 mb-8">
				Tilaa Dopla-palvelua käyttävästä apteekista reseptilääkkeitä ja muita
				apteekin tuotteita vaivattomasti valitsemaasi osoitteeseen.
			</p>
			<nuxt-link to="/" class="main-button uppercase">
				<span class="mr-2">see how</span>
				<arrow-right-icon />
			</nuxt-link>
		</div>
		<img class="mt-8" src="~/assets/images/home/Tulee.png" alt="design image" />
	</section>
</template>

<script>
import ArrowRightIcon from '../Icons/ArrowRightIcon.vue'
export default {
	components: {
		ArrowRightIcon,
	},
}
</script>

<style>
</style>