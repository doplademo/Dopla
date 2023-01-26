<template>
	<div class="flex flex-col items-center">
		<p class="p-normal text-redLightest">
			{{ answer }}
		</p>
		<img
			v-if="image"
			src="~/assets/images/common/image 5.png"
			alt=""
			class="mt-2"
		/>
	</div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
	props: {
		answer: {
			type: String,
			required: true,
		},
		image: {
			type: String,
			default: '',
		},
	},
})
</script>

<style>
</style>