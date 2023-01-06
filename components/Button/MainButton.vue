<template>
	<nuxt-link
		:class="
			`p-2.5 flex items-center justify-center rounded-md bg-greenBold ` +
			className
		"
		:to="to"
	>
		<span
			:class="
				'text-blackBold font-semibold text-center text-[15px] ' + textClass
			"
		>
			{{ upper ? title.toUpperCase() : title }}
		</span>
		<arrow-right-icon v-if="next" :size="iconSize" />
	</nuxt-link>
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
		to: {
			type: String,
			default: '/',
		},
		next: Boolean,
	},
}
</script>

<style>
</style>