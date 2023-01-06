<template>
	<section class="bg-white">
		<slot name="top"/>
		<div class="px-4 pb-6 bg-white">
			<heading-4 className="font-semibold mt-4">{{ text }}</heading-4>
			<paragraph-large className="font-bold mt-4">{{
				person
			}}</paragraph-large>
			<paragraph-large className="mt-1">{{ text2 }}</paragraph-large>
		</div>
	</section>
</template>

<script>
import Heading4 from '../Heading/HeadingFour.vue'
import ParagraphLarge from '../Paragraph/ParagraphLarge.vue'
export default {
	components: {
		Heading4,
		ParagraphLarge,
	},
	props: {
		imageSrc: {
			type: String,
			required: true,
		},
		text: {
			type: String,
			required: true,
		},
		person: {
			type: String,
			required: true,
		},
		text2: {
			type: String,
			required: true,
		},
	},
}
</script>

<style></style>
