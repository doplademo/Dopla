<template>
	<nav class="flex gap-2 w-full overflow-x-auto overflow-y-auto">
		<pharmacist-task-filter
			name="All tasks"
			task-color-class="bg-redBold"
			:selected="selectedTask === 'all'"
			:amount="tasksCount.all"
			@on-filter="setFilter('all')"
		/>
		<pharmacist-task-filter
			name="Updated"
			:amount="tasksCount.update"
			task-color-class="bg-yellowWarning opacity-50"
			:selected="selectedTask === 'update'"
			@on-filter="setFilter('update')"
		/>
		<pharmacist-task-filter
			name="Prescription"
			task-color-class="bg-greenBold"
			:selected="selectedTask === 'prescription'"
			:amount="tasksCount.prescription"
			@on-filter="setFilter('prescription')"
		/>
		<pharmacist-task-filter
			name="Cancelled"
			task-color-class="bg-greenBold"
			:selected="selectedTask === 'cancel'"
			:amount="tasksCount.cancel"
			@on-filter="setFilter('cancel')"
		/>
		<pharmacist-task-filter
			name="Pending"
			task-color-class="bg-greenBold"
			:selected="selectedTask === 'pending'"
			:amount="tasksCount.pending"
			@on-filter="setFilter('pending')"
		/>
	</nav>
</template>

<script lang="ts">
// @ts-nocheck
import { defineComponent, PropType } from 'vue'
import PharmacistTaskFilter from './PharmacistTaskFilter.vue'
import { TaskData, TaskType } from '~/types/pharmacist'

export default defineComponent({
	components: { PharmacistTaskFilter },
	props: {
		selectedTask: {
			type: String as PropType<TaskType>,
			default: 'all',
		},
		setFilter: {
			type: Function as PropType<(value: TaskType) => void>,
			default: () => {},
		},
		tasks: {
			type: Array as PropType<TaskData[]>,
			default: () => [],
		},
	},
	computed: {
		tasksCount() {
			const all = this.tasks.length
			const update = this.tasks.filter((task) => task.type === 'update').length
			const prescription = this.tasks.filter(
				(task) => task.type === 'prescription'
			).length
			const cancel = this.tasks.filter((task) => task.type === 'cancel').length
			const pending = this.tasks.filter(
				(task) => task.type === 'pending'
			).length

			return {
				all,
				update,
				prescription,
				cancel,
				pending,
			}
		},
	},
})
</script>