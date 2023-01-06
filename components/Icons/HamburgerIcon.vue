<template>
	<svg
		:width="width"
		:height="height"
		viewBox="0 0 32 26"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<rect x="6" y="8" width="20" height="3.33333" rx="1.66667" :fill="color" />
		<rect
			x="6"
			y="14.667"
			width="20"
			height="3.33333"
			rx="1.66667"
			:fill="color"
		/>
	</svg>
</template>
<script>
import { Colors } from '~/utils/Colors'
export default {
	props: {
		width: {
			type: Number,
			default: 32,
		},
		height: {
			type: Number,
			default: 26,
		},
		color: {
			type: String,
			default: Colors.blackBold,
		},
	},
}
</script>