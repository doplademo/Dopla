<template>
	<div
		:class="`flex items-center rounded-md font-medium ${
			biggerSpacing ? 'p-2 gap-2' : 'p-1 gap-1'
		} bg-yellowWarning`"
	>
		<icon-minus size="small" />
		<span>Waiting for customer contact</span>
	</div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import IconMinus from '../Icons/IconMinus.vue'

export default defineComponent({
	components: { IconMinus },
	props: {
		biggerSpacing: Boolean,
	},
	setup() {},
})
</script>

<style>
</style>