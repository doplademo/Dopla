<template>
	<div class="p-4 mt-4 bg-mainBold rounded-md">
		<div class="flex justify-between items-center mb-4">
			<heading-four class-name="text-white"
				>{{title}}</heading-four
			>
			<slot />
		</div>

		<slot name="body" />
	</div>
</template>

<script>
import HeadingFour from './Heading/HeadingFour.vue'
export default {
  components: { HeadingFour },
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