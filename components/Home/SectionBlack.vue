<template>
	<section class="bg-blackBold px-4 py-14">
		<p class="text-3xl text-center text-pinkBold leading-9 mb-4">
			{{ heading }}
		</p>
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
