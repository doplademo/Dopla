<template>
	<div class="p-4 bg-pinkBold rounded-md">
		<div class="flex justify-between items-center mb-4">
			<h4 class="heading-four font-medium">{{ title }}</h4>
			<button @click="$emit('click')">
				<img src="~/assets/images/common/loading-circle.png" alt="" />
			</button>
		</div>

		<p class="p-normal">Lorem ipsum dolor sit amet</p>
	</div>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			default: '',
		},
	},
}
</script>

<style>
</style>