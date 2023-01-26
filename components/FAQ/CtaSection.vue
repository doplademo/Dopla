<template>
	<section :class="`px-4 py-16 flex flex-col items-center ${bgClass || 'bg-white'}`">
		<h2 class="heading-two mb-8 text-center text-blackBold">Lorem ipsum dolor sit amet</h2>
		<nuxt-link to="/" class="main-button uppercase">
			cta
		</nuxt-link>
	</section>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
	props: {
		bgClass: {
			type: String,
			default: "",
		},
	},
})
</script>

<style>

</style>
