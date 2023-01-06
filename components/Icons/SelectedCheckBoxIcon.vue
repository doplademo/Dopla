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
			<rect width="16" height="16" rx="2" fill="#00D442" />
			<path
				d="M4 7.23061L7.56863 11.3332L12.6667 4.6665"
				stroke="white"
				stroke-width="2"
				stroke-linecap="square"
				stroke-linejoin="round"
			/>
		</svg>

		<svg
			v-else
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<rect width="24" height="24" rx="4" fill="#00D442" />
			<path
				d="M6 10.8462L11.3529 17L19 7"
				stroke="white"
				stroke-width="2"
				stroke-linecap="square"
				stroke-linejoin="round"
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