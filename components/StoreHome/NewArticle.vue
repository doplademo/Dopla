<template>
	<div class="flex flex-col mt-5 items-start">
		<h6 class="heading-six my-1 flex w-5/12 justify-between text-blackLight"><span>{{ date }}</span> <span>|</span>
			<span>{{ day }}</span>
		</h6>
		<h4 class="heading-four font-semibold text-lg my-1">{{
			title
		}}</h4>
		<p class="p-normal my-1">{{ description }}</p>
		<main-button class="flex-start bg-redLightest w-auto -ml-2" text-class="text-xs" title="lue lisää" upper next
			:icon-size="18" />
	</div>
</template>

<script>
import MainButton from '../Button/MainButton.vue'
export default {
	components: { MainButton },
	props: {
		date: {
			type: String,
			required: true,
		},
		day: {
			type: String,
			required: true,
		},
		title: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
	},
}
</script>

<style>

</style>