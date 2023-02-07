<template>
	<div class="w-full h-2 flex bg-greenHover rounded-lg">
		<div class="bg-greenBold h-full" :style="style"></div>
	</div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
	props: {
		width: {
			type: String,
			default: '0%',
		},
	},
	computed: {
		style() {
			return {
				'width': this.$props.width,
			}
		},
	},
})
</script>

<style>
</style>