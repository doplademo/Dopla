<template>
	<div>
		<p class="p-small font-medium text-blackMedium mb-1">001</p>
		<div class="flex flex-col bg-white p-4 rounded-lg border border-blackLightest">
			<div class="flex justify-between">
				<p class="p-small font-medium">17.08.2021</p>
				<p class="p-small font-medium text-blackLight">
					Updated 13.08.2022 13:59
				</p>
			</div>
			<p class="heading-five text-blackLight mt-2">OID: 184935793754</p>

			<p
				class="
					p-normal p-2.5
					bg-pinkBold
					rounded
					uppercase
					font-medium
					self-start
					mt-4
				"
			>
				Oftan scopolamin 2,25 mg/ml
			</p>

			<p class="heading-five text-blackLight mt-2">VNR: 123456789</p>

			<div
				class="
					flex flex-col
					bg-grayishWhite
					border border-blackLightest
					rounded-lg
                    mt-8
				"
			>
				<div
					class="
						flex
						justify-between
						items-center
						px-2
						py-4
						border-b border-blackLight
					"
				>
					<p class="heading-five font-medium uppercase text-blackMedium">
						Left on prescription
					</p>
					<p
						class="
							p-normal p-2.5
							bg-oceanBold
							rounded
							uppercase
							font-medium
							self-start
						"
					>
						17.07.2022
					</p>
				</div>

				<add-field border-none title="Show more" />
			</div>
		</div>
	</div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import AddField from './AddField.vue'

export default defineComponent({
	components: { AddField },
	props: {},
	setup() {},
})
</script>

<style>
</style>