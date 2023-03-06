<template>
	<div>
		<button
			@click.prevent="$emit('on-filter')"
			class="flex text-start gap-2 p-2 border border-blackLight rounded flex-shrink-0"
		>
			<div :class="`w-4 h-4 ${taskColorClass}`"></div>
			<p class="heading-five font-medium whitespace-nowrap">
				{{ name }} ({{ amount }})
			</p>
		</button>

		<div
			v-if="selected"
			class="w-full h-1 bg-greenBold rounded-full mt-2"
		></div>
	</div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
	props: {
		name: String,
		amount: Number,
		taskColorClass: { type: String, default: '' },
		selected: Boolean,
	},
	emits: ['on-filter'],
})
</script>

<style>
</style>