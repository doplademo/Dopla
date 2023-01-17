<template>
	<aside class="flex flex-col w-1/3 max-w-[440px] h-full p-4 bg-grayishWhite">
		<div>
			<h4 class="heading-four font-semibold bg-pinkLight p-4">Tasks</h4>

			<div class="flex gap-2 items-center mt-4">
				<switch-button
					:checked="waitingOrders"
					@toggle="waitingOrders = !waitingOrders"
				/>
				<p class="p-normal font-medium">
					Show orders that wait for customer action
				</p>
			</div>

			<div class="flex justify-between mt-4">
				<p class="heading-five text-blackLightest">15 tasks</p>
				<p class="heading-five text-blackLightest">wait time circa 11 min.</p>
			</div>
		</div>

		<div class="flex flex-col gap-4 mt-4 flex-1 overflow-y-scroll">
			<pharmacist-task
				name="John Doe"
				task-type="payed"
				:minutes-passed="10"
				:selected="selected === 1"
				@on-select="
					() => {
						selected = 1
						$emit('on-order', 'payed')
					}
				"
			/>
			<pharmacist-task
				name="John Doe"
				task-type="canceled"
				:minutes-passed="12"
				:selected="selected === 2"
				@on-select="
					() => {
						selected = 2
						$emit('on-order', 'canceled')
					}
				"
			/>
			<pharmacist-task
				name="John Doe"
				task-type="handling"
				:minutes-passed="16"
				:selected="selected === 3"
				@on-select="
					() => {
						selected = 3
						$emit('on-order', 'handling')
					}
				"
			/>
			<pharmacist-task
				name="John Doe"
				task-type="listing"
				:minutes-passed="11"
				:selected="selected === 4"
				@on-select="
					() => {
						selected = 4
						$emit('on-order', 'listing')
					}
				"
			/>
			<pharmacist-task
				name="John Doe"
				task-type="waiting"
				:minutes-passed="5"
				:selected="selected === 5"
				@on-select="
					() => {
						selected = 5
						$emit('on-order', 'waiting')
					}
				"
			/>
			<pharmacist-task
				name="John Doe"
				task-type="contact"
				:minutes-passed="5"
				:selected="selected === 6"
				@on-select="
					() => {
						selected = 6
						$emit('on-order', 'contact')
					}
				"
			/>
		</div>
	</aside>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import PharmacistTask from './PharmacistTask.vue'
import SwitchButton from './SwitchButton.vue'

export default defineComponent({
	components: { SwitchButton, PharmacistTask },
	props: {},
	emits: ['on-order'],
	setup() {
		const selected = ref(-1)
		const waitingOrders = ref(false)

		return { selected, waitingOrders }
	},
})
</script>

