<template>
	<section class="bg-blackBold px-4 py-14 lg:py-36">
		<h2 class="heading-two text-center text-pinkBold leading-9 mb-4">
			{{ heading }}
		</h2>
		<p class="p-large text-center text-white">{{
			text
		}}</p>
	</section>
</template>

<script>
export default {
	props: {
		heading: {
			type: String,
			required: true,
		},
		text: {
			type: String,
			required: true,
		},
	},
}
</script>

<style></style>
