<template>
	<div class="p-4 pb-24 lg:w-full lg:max-w-[540px] lg:bg-white lg:border lg:border-blackLightest lg:rounded-md">
		<button class="flex items-center" @click="$emit('on-go-back')">
			<arrow-left-icon size="16" />
			<p class="p-x-small uppercase font-semibold ml-2">Previous</p>
		</button>

		<section class="mt-4">
			<h4 class="heading-four font-semibold">Hi {{$auth.user?.firstname}}!</h4>
			<p class="p-normal mt-2">Lorem ipsum dolor sit amet!</p>
		</section>

		<slot />
	</div>
</template>

<script>
import { defineComponent } from 'vue'
import ArrowLeftIcon from './Icons/ArrowLeftIcon.vue'

export default defineComponent({
	components: { ArrowLeftIcon },
	emits: ['on-go-back'],
})
</script>