<template>
	<section class="px-4 mt-20">
		<h3 class="heading-three font-medium mb-4">Hei {{ name }}!</h3>
		<paragraph-normal>Tervetuloa Dopla-palveluun. Voit nyt tilata reseptilääkkeitä ja apteekin
			muita tuotteita Matinkylän apteekista suoraan
			kotiovelle.</paragraph-normal>
	</section>
</template>

<script>
import ParagraphNormal from '../Paragraph/ParagraphNormal.vue'
export default {
	components: { ParagraphNormal },
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