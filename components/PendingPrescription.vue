<template>
	<div class="p-4 bg-mainBold rounded-md">
		<div class="flex justify-between items-center mb-4">
			<h4 class="heading-four text-white">{{ title}}</h4>
			<slot />
		</div>

		<slot name="body" />
	</div>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			default: '',
		}
	}
}
</script>

<style>

</style>