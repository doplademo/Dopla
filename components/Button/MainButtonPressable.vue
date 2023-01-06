<template>
	<button
		:class="
			`p-2.5 flex items-center justify-center rounded-md bg-greenBold ` +
			className
		"
		@click="$emit('click')"
	>
		<p
			:class="
				'text-blackBold font-semibold text-center ' + textClass
			"
		>
			{{ upper ? title.toUpperCase() : title }}
		</p>
		<arrow-right-icon v-if="next" :size="iconSize" />
	</button>
</template>

<script>
import ArrowRightIcon from '../Icons/ArrowRightIcon.vue'
export default {
	components: { ArrowRightIcon },
	props: {
		href: {
			type: String,
			default: '#',
		},
		title: { type: String, default: '' },
		upper: Boolean,
		className: { type: String, default: '' },
		textClass: { type: String, default: '' },
		iconSize: { type: Number, default: 0 },
		next: Boolean,
	},
}
</script>

<style>
</style>