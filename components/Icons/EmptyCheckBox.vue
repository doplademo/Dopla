<template>
	<div
		:class="
			strokeReason === 'error'
				? 'bg-redMedium p-2'
				: strokeReason === 'safe'
				? 'bg-greenMedium p-2'
				: ''
		"
	>
		<svg
			v-if="size === 'small'"
			width="16"
			height="16"
			viewBox="0 0 16 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<rect
				x="0.5"
				y="0.5"
				width="15"
				height="15"
				rx="1.5"
				fill="white"
				stroke="#C4C4C4"
			/>
		</svg>

		<svg
			v-else
			:width="24"
			:height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<rect
				x="0.5"
				y="0.5"
				width="23"
				height="23"
				rx="3.5"
				fill="white"
				stroke="#C4C4C4"
			/>
		</svg>
	</div>
</template>
<script>
import { Colors } from '~/utils/Colors'
export default {
	props: {
		size: {
			type: String,
			default: '',
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
		strokeReason: {
			type: String,
			default: '',
		},
	},
}
</script>