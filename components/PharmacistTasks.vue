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
				<p class="heading-five text-blackLightest">{{ tasks.length }} tasks</p>
				<p class="heading-five text-blackLightest">wait time circa 11 min.</p>
			</div>
		</div>

		<div class="flex flex-col gap-4 mt-4 flex-1 overflow-y-scroll">
			<pharmacist-task
				v-for="task in tasks"
				:key="task.id"
				:task="task"
				:name="`${task.customer_firstname} ${task.customer_lastname}`"
				:task-type="task.type"
				:minutes-passed="10"
				:selected="task.id === selectedTaskId"
				:needs-contacting="task.requires_contacting === '1'"
				@on-select="$emit('on-select-task', task.id)"
			/>
		</div>
	</aside>
</template>

<script lang="ts">
import { PropType, defineComponent } from 'vue'
import PharmacistTask from './PharmacistTask.vue'
import SwitchButton from './SwitchButton.vue'
import { TaskData } from '~/types/pharmacist'

export default defineComponent({
	components: { SwitchButton, PharmacistTask },
	props: {
		tasks: { type: Array as PropType<TaskData[]>, default: () => [] },
		selectedTaskId: { type: String, default: '0' },
	},

	emits: ['on-order', 'on-select-task'],

	data() {
		return {
			selected: -1,
			waitingOrders: false,
		}
	},
})
</script>

