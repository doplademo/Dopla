<template>
	<section class="pt-24 px-4 pb-4">
		<img
			class="rounded-xl mb-4"
			src="~/assets/images/about/woman-ocean-bg.png"
			alt="woman ocean background"
		/>
		<HeadingOne class-name="text-mainBold mb-4"
			>Hyvinvointiasi tukeva lääkkeiden tilauspalvelu</HeadingOne
		>
		<paragraph-large class-name="text-blackBold">
			Dopla on kotimainen lääkkeiden tilauspalvelu, joka tuo helpotusta arkeen.
		</paragraph-large>
	</section>
</template>

<script>
import HeadingOne from '../Heading/HeadingOne.vue'
import ParagraphLarge from '../Paragraph/ParagraphLarge.vue'

export default { components: { HeadingOne, ParagraphLarge } }
</script>

<style></style>
