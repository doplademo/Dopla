<template>
	<div :class="('flex items-start ' + className)">
		<div class="p-0.5 bg-pinkBold mr-3">
			<slot name="icon" />
		</div>
		<div>
			<p class="p-normal font-medium">{{ title }}</p>
			<h5 class="heading-five font-normal text-blackStrong">{{ description }}</h5>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		className: {
			type: String,
			default: '',
		}
	},
}
</script>
