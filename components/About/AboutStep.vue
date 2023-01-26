<template>
	<div class="flex flex-col lg:flex-1">
		<img
			class="
				w-4/5
				self-center
				mt-16
				mb-2
				max-w-[16em] max-h-[13em]
				object-contain object-center
			"
			:src="image"
			alt=""
		/>
		<h4 class="p-large font-semibold mb-4">{{ title }}</h4>
		<p class="p-large">
			{{ description }}
		</p>
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