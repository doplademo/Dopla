<template>
	<div class="flex flex-col gap-2 p-4 bg-pinkBold rounded-md">
		<img
			class="self-center"
			src="~/assets/images/common/coach.png"
			alt="no prescriptions"
		/>
		<p class="p-normal font-semibold">No recipes.</p>
		<p class="p-normal">The customer has no prescriptions.</p>
	</div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'

export default defineComponent({
	props: {},
})
</script>

<style>
</style>