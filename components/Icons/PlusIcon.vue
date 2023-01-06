<template>
	<svg
		:width="size || width"
		:height="size || width"
		viewBox="0 0 32 32"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<rect x="2.20117" y="13.999" width="28" height="4" rx="1" :fill="color" />
		<rect
			x="18.2031"
			y="2"
			width="28"
			height="4"
			rx="1"
			transform="rotate(90 18.2031 2)"
			:fill="color"
		/>
	</svg>
</template>
<script>
import { Colors } from '~/utils/Colors'
export default {
	props: {
		size: {
			type: Number,
			default: 0,
		},
		width: {
			type: Number,
			default: 25,
		},
		height: {
			type: Number,
			default: 25,
		},
		color: {
			type: String,
			default: Colors.blackBold,
		},
	},
}
</script>
