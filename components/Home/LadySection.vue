<template>
	<section class="bg-white">
		<slot name="top"/>
		<div class="px-4 pb-6 bg-white">
			<h4 class="heading-four font-semibold mt-4">{{ text }}</h4>
			<p class="p-large font-bold mt-4">{{
				person
			}}</p>
			<p class="p-large mt-1">{{ text2 }}</p>
		</div>
	</section>
</template>

<script>
export default {
	components: {
	},
	props: {
		imageSrc: {
			type: String,
			required: true,
		},
		text: {
			type: String,
			required: true,
		},
		person: {
			type: String,
			required: true,
		},
		text2: {
			type: String,
			required: true,
		},
	},
}
</script>

<style></style>
