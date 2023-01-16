<template>
	<div
		:class="`flex items-center rounded-md font-medium ${
			biggerSpacing ? 'p-2 gap-2' : 'p-1 gap-1'
		} bg-grayishWhite`"
	>
		<icon-profile size="small" />
		<span>Waiting for customer</span>
	</div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import IconProfile from '../Icons/IconProfile.vue'

export default defineComponent({
	components: { IconProfile },
	props: {
		biggerSpacing: Boolean,
	},
	setup() {},
})
</script>

<style>
</style>