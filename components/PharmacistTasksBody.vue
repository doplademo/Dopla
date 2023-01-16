<template>
	<section class="flex-1 flex gap-4 p-4 bg-grayishWhite items-start">
		<div class="w-[40%]">
			<div class="w-full flex items-center justify-between">
				<listing-task bigger-spacing />
				<p class="p-small text-blackLight col-span-2 ml-2">16.06.2022 13:59</p>
			</div>
			<h4 class="heading-four font-semibold mt-4">Ulla Espoolainen</h4>

			<div class="flex gap-4 mt-4 items-center">
				<p class="p-large p-medium">050 1234 123</p>
				<copy-button copy="050 1234 123" />
			</div>
			<div class="flex flex-col gap-2">
				<text-input
					:value="ssn"
					label="social security number"
					class-name="mt-4"
				/>

				<copy-button :copy="ssn" />
			</div>
		</div>
		<div class="h-full w-[60%] bg-redLightest"></div>
	</section>
</template>

<script>
import { defineComponent, ref } from 'vue'
import CopyButton from './Button/CopyButton.vue'
import TextInput from './Input/TextInput.vue'
import ListingTask from './TaskTypes/ListingTask.vue'

export default defineComponent({
	components: { ListingTask, CopyButton, TextInput },
	props: {},
	setup() {
		const ssn = ref('010234-1234')

		return {
			ssn,
		}
	},
})
</script>

<style>
.grid-template {
	grid-template-columns: 33% 77%;
}
</style>