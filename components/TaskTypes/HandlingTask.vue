<template>
	<div
		:class="`flex items-center rounded-md font-medium ${
			biggerSpacing ? 'p-2 gap-2' : 'p-1 gap-1'
		} bg-redLightest`"
	>
		<icon-pill-pack size="small" />
		<span>Prescription handling</span>
	</div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import IconPillPack from '../Icons/IconPillPack.vue'

export default defineComponent({
	components: { IconPillPack },
	props: {
		biggerSpacing: Boolean,
	},
	setup() {},
})
</script>

<style>
</style>