<template>
	<section class="bg-blackBold px-4 py-14">
		<p class="text-3xl text-center text-pinkBold leading-9 mb-4">
			{{ heading }}
		</p>
		<paragraph-large className="text-center text-white">{{
			text
		}}</paragraph-large>
	</section>
</template>

<script>
import ParagraphLarge from '../Paragraph/ParagraphLarge.vue'
export default {
	components: { ParagraphLarge },
	props: {
		heading: {
			type: String,
			required: true,
		},
		text: {
			type: String,
			required: true,
		},
	},
}
</script>

<style></style>
