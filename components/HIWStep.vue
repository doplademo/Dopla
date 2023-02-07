<template>
	<div class="flex flex-col lg:w-1/4 lg:max-w-xs">
		<img
			class="self-center lg:w-60 lg:h-60 lg:object-scale-down mb-24 lg:mb-0"
			:src="image"
			alt="automobile"
		/>
		<h4 class="heading-four font-semibold text-redLightest mb-4">
			{{ title }}
		</h4>
		<p class="p-large text-redLightest font-normal">{{ description }}</p>
	</div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'

export default defineComponent({
	props: {
		image: {
			type: String,
			required: true,
		},
		title: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
	},
	setup() {},
})
</script>

<style>
</style>