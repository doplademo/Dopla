<template>
	<div class="flex flex-col mt-5 items-start">
		<heading-six class-name="my-1 flex w-5/12 justify-between text-blackLight"
			><span>{{ date }}</span> <span>|</span>
			<span>{{ day }}</span></heading-six
		>
		<heading-four class-name="font-semibold text-lg my-1">{{
			title
		}}</heading-four>
		<paragraph-normal class-name="my-1">{{ description }}</paragraph-normal>
		<main-button
			class-name="flex-start bg-redLightest w-auto -ml-2"
			text-class="text-xs"
			title="lue lisää"
			upper
			next
			:icon-size="18"
		/>
	</div>
</template>

<script>
import MainButton from '../Button/MainButton.vue'
import HeadingSix from '../Heading/HeadingSix.vue'
export default {
	components: { HeadingSix, MainButton },
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