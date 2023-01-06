<template>
	<div :class="('flex items-start ' + className)">
		<div class="p-0.5 bg-pinkBold mr-3">
			<slot name="icon" />
		</div>
		<div>
			<paragraph-normal class-name="font-medium" >{{ title }}</paragraph-normal>
			<heading-five class-name="font-normal text-blackStrong">{{ description }}</heading-five>
		</div>
	</div>
</template>

<script>
import HeadingFive from '../Heading/HeadingFive.vue'
import ParagraphNormal from '../Paragraph/ParagraphNormal.vue'
export default {
	components: { ParagraphNormal, HeadingFive },
	props: {
		title: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		className: {
			type: String,
			default: '',
		}
	},
}
</script>
