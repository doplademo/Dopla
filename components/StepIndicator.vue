<template>
	<div class="flex flex-col w-full">
		<div class="flex gap-2">
			<div
				v-for="(_, index) in listings"
				:key="index"
				:class="`h-2 flex-1 ${
					index + 1 === currentStep
						? 'bg-greenLight'
						: index + 1 < currentStep
						? 'bg-greenBold'
						: 'bg-greenHover'
				}
            `"
			></div>
		</div>
		<p class="heading-five self-center font-medium uppercase mt-2 mb-4">
			{{ currentStep }}/{{ steps }} {{ stepsTextIndicator }}
		</p>
	</div>
</template>

<script lang='ts'>
import { defineComponent, ref } from 'vue'

export default defineComponent({
	props: {
		steps: { type: Number, required: true },
		currentStep: { type: Number, required: true },
		stepsTextIndicator: String,
	},
	setup(props) {
		// Dummy array for iterations only
		const listings = ref(Array(props.steps).fill(null))

		return {
			listings,
		}
	},
})
</script>

<style>
</style>