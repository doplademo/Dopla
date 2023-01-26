<template>
	<nuxt-link
		:to="to"
		:class="`font-semibold px-3 py-2 uppercase rounded-md ${
			selected ? 'text-greenBold bg-white' : 'text-white'
		}`"
		>{{ text }}</nuxt-link
	>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'

export default defineComponent({
	props: {
		text: {
			type: String,
			required: true,
		},
		to: {
			type: String,
			required: true,
		},
		selected: {
			type: Boolean,
		},
	},
	setup() {},
})
</script>

<style>
</style>