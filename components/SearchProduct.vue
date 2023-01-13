<template>
	<button
		:class="`flex items-start text-start py-4 gap-4 ${
			!isLast ? 'border-b border-b-blackLightest' : ''
		}`"
		@click="$emit('select-product')"
	>
		<img
			src="~/assets/images/common/product.png"
			alt="prdouct"
			class="w-8 h-8"
		/>

		<div class="flex justify-between gap-4">
			<p class="p-normal flex-1 font-medium uppercase">{{ name }}</p>
			<p class="p-normal font-medium">{{ price }}</p>
		</div>
	</button>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
	props: {
		name: String,
		price: String,
		isLast: Boolean,
	},
	emits: ['select-product'],
})
</script>

<style>
</style>