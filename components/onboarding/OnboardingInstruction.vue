<template>
	<div :class="('flex items-start ' + className)">
		<div class="p-0.5 bg-pinkBold mr-3">
			<slot name="icon" />
		</div>
		<div>
			<paragraph-normal class="font-medium" >{{ title }}</paragraph-normal>
			<h5 class="heading-five font-normal text-blackStrong">{{ description }}</h5>
		</div>
	</div>
</template>

<script>
import ParagraphNormal from '../Paragraph/ParagraphNormal.vue'
export default {
	components: { ParagraphNormal },
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
