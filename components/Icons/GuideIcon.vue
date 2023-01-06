<template>
	<svg
		:width="(size || width)"
		:height="(size || height)"
		viewBox="0 0 32 32"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<rect x="16" y="8" width="8" height="2" rx="0.5" :fill="color" />
		<rect x="16" y="12.667" width="8" height="2" rx="0.5" :fill="color" />
		<rect x="7" y="17.333" width="17" height="2" rx="0.5" :fill="color" />
		<rect x="7" y="22" width="17" height="2" rx="0.5" :fill="color" />
		<path
			d="M8 11.25L13.5 11.25"
			:stroke="color"
			stroke-width="1.5"
			stroke-linecap="round"
		/>
		<path
			d="M10.75 14V8.5"
			:stroke="color"
			stroke-width="1.5"
			stroke-linecap="round"
		/>
		<rect
			x="4.75"
			y="4.75"
			width="22.5"
			height="22.5"
			rx="2.25"
			:stroke="color"
			stroke-width="1.5"
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