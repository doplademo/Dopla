<template>
	<section class="px-4 mt-20">
		<h3 class="heading-three font-medium mb-4">Hei {{ name }}!</h3>
		<p class="p-normal">Tervetuloa Dopla-palveluun. Voit nyt tilata reseptilääkkeitä ja apteekin
			muita tuotteita Matinkylän apteekista suoraan
			kotiovelle.</p>
	</section>
</template>

<script>
export default {
	props: {
		name: {
			type: String,
			required: true,
		}
	}
}
</script>

<style>

</style>