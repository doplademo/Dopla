<template>
	<div
		:class="`flex items-center rounded-md font-medium ${
			biggerSpacing ? 'p-2 gap-2' : 'p-1 gap-1'
		} bg-oceanBold`"
	>
		<icon-prescription size="small" />
		<span>Prescription listing</span>
	</div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import IconPrescription from '../Icons/IconPrescription.vue'

export default defineComponent({
	components: { IconPrescription },
	props: {
		biggerSpacing: Boolean,
	},
	setup() {},
})
</script>

<style>
</style>