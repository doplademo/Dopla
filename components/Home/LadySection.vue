<template>
	<section class="bg-white lg:relative">
		<img :src="image" alt="reviewer" class="h-[420px] object-center object-cover lg:h-auto lg:object-fill lg:w-full"/>
		<div class="px-4 pb-6 bg-white lg:bg-none lg:absolute lg:left-24 lg:top-24 lg:bg-opacity-0 lg:max-w-xl lg:text-redLightest">
			<h4 class="heading-four font-semibold mt-4">{{ text }}</h4>
			<p class="p-large font-bold mt-4">{{ person }}</p>
			<p class="p-large mt-1">{{ text2 }}</p>
		</div>
	</section>
</template>

<script>
export default {
	components: {},
	props: {
		image: {
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
