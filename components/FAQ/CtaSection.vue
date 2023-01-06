<template>
	<section class="px-4 py-16 flex flex-col item-center bg-white">
		<heading-two class-name="mb-8 text-center text-blackBold"
			>Lorem ipsum dolor sit amet</heading-two
		>
		<main-button title="cta" upper />
	</section>
</template>

<script>
import MainButton from '../Button/MainButton.vue'
import HeadingTwo from '../Heading/HeadingTwo.vue'
export default {
	components: { MainButton, HeadingTwo },
}
</script>

<style></style>
