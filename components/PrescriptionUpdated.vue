<template>
	<div class="p-4 bg-pinkBold rounded-md">
		<div class="flex justify-between items-center mb-4">
			<h4 class="heading-four font-medium">{{ title }}</h4>
			<img
				src="~/assets/images/common/loading-circle.png"
				alt=""
				class="loading-circle"
			/>
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
.loading-circle {
	animation: spin 1s linear infinite;
}

@keyframes spin {
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
}
</style>