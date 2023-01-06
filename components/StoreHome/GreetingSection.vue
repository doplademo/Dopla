<template>
	<section class="px-4 mt-20">
		<heading-three class-name="font-medium mb-4">Hei {{ name }}!</heading-three>
		<paragraph-normal
			>Tervetuloa Dopla-palveluun. Voit nyt tilata reseptilääkkeitä ja apteekin
			muita tuotteita Matinkylän apteekista suoraan
			kotiovelle.</paragraph-normal
		>
	</section>
</template>

<script>
import HeadingThree from '../Heading/HeadingThree.vue'
import ParagraphNormal from '../Paragraph/ParagraphNormal.vue'
export default {
  components: { HeadingThree, ParagraphNormal },
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