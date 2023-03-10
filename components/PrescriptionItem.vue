<template>
	<div class="flex flex-col w-full">
		<p class="p-large my-2">{{ id }}</p>

		<!-- Main section -->
		<div
			:class="`flex w-full items-start bg-white border rounded drop-shadow-md shadow-blackLightest p-2 ${
				selected ? 'border-greenBold' : 'border-blackLightest'
			}`"
		>
			<check-box
				size="large"
				:selected="selected"
				@toggle="$emit('toggle', id)"
			/>

			<div class="flex flex-col items-start flex-1 relative px-2 ml-2">
				<!-- Pink field -->
				<div class="bg-redLightest rounded p-2 mb-2">
					<p class="p-x-small font-medium">
						<span>!</span>
						<span class="ml-2">Edullisempi saatavilla</span>
					</p>
				</div>
				<!-- Product name -->
				<h4 class="heading-four my-2">{{ name }}</h4>
				<!-- Info section -->
				<div class="flex items-center justify-between w-full my-2">
					<div class="flex items-center bg-oceanLight rounded p-1.5">
						<guide-icon :size="16" />
						<p class="p-small ml-2">{{ instructions }}.</p>
					</div>
					<!-- Info button -->
					<button class="main-button uppercase" @click="$emit('show-info', id)">
						Info
					</button>
				</div>
				<div class="bg-mainBold rounded absolute top-0 right-2 px-2 py-1.5">
					<p class="p-x-small font-medium text-white uppercase">
						Prescriptive drug
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { defineComponent } from 'vue'
import GuideIcon from './Icons/GuideIcon.vue'
import CheckBox from './Input/CheckBox.vue'

export default defineComponent({
	components: {
		CheckBox,
		GuideIcon,
	},
	props: {
		id: {
			type: String,
			required: true,
		},
		name: {
			type: String,
			required: true,
		},
		instructions: {
			type: String,
			required: true,
		},
		selected: Boolean,
	},
	emits: ['toggle', 'show-info'],
})
</script>

<style>
</style>