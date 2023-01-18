<template>
	<section
		class="
			flex flex-col
			px-4
			pt-12
			pb-4
			bg-brownNormal
			lg:flex-row lg:items-center lg:justify-center lg:px-24 lg:py-16 lg:gap-12
		"
	>
		<div class="flex flex-col items-start lg:max-w-xl">
			<h2 class="heading-two">Säästää aikaa</h2>
			<p class="p-large mt-4 mb-8">
				Dopla-palvelu muistuttaa tulevista reseptilääketilauksista ja
				halutessasi apteekki uusii tilaukset voimassaolevan reseptisi
				mukaisesti.
			</p>
			<nuxt-link to="/" class="main-button uppercase">
				<span class="mr-2">katso miten</span>
				<arrow-right-icon />
			</nuxt-link>
		</div>
		<img class="mt-8" src="~/assets/images/home/Saastaa.png" alt="" />
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