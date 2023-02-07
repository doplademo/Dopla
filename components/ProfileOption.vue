<template>
	<button
		:class="`flex items-center justify-between py-2 px-4 border  rounded cursor-pointer text-start ${
			selected ? 'border-greenBold' : 'border-blackLightest'
		}`"
		@click="$emit('redirect')"
	>
		<div>
			<p class="p-normal font-semibold mb2">{{ title }}</p>
			<p class="p-normal text-blackLight">{{ subtitle }}</p>
		</div>
		<arrow-right-icon :color="selected ? Colors.greenBold : undefined" />
	</button>
</template>

<script>
import { defineComponent } from 'vue'
import ArrowRightIcon from './Icons/ArrowRightIcon.vue'
import { Colors } from '~/utils/Colors'

export default defineComponent({
	components: { ArrowRightIcon },
	props: {
		title: String,
		subtitle: String,
		selected: Boolean,
	},
	emits: ['redirect'],
	data() {
		return {
			Colors,
		}
	},
})
</script>

<style>
</style>