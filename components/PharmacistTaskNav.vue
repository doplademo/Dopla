<template>
	<nav class="flex gap-2 w-full overflow-x-auto overflow-y-auto">
		<pharmacist-task-filter
			name="All tasks"
			task-color-class="bg-redBold"
			:selected="selectedTask === 'all'"
			@on-filter="setFilter('all')"
		/>
		<pharmacist-task-filter
			name="Updated"
			:amount="30"
			task-color-class="bg-yellowWarning opacity-50"
			:selected="selectedTask === 'update'"
			@on-filter="setFilter('update')"
		/>
		<pharmacist-task-filter
			name="Prescription"
			task-color-class="bg-greenBold"
			:selected="selectedTask === 'prescription'"
			@on-filter="setFilter('prescription')"
		/>
		<pharmacist-task-filter
			name="Cancelled"
			task-color-class="bg-greenBold"
			:selected="selectedTask === 'cancel'"
			@on-filter="setFilter('cancel')"
		/>
		<pharmacist-task-filter
			name="Pending"
			task-color-class="bg-greenBold"
			:selected="selectedTask === 'pending'"
			@on-filter="setFilter('pending')"
		/>
	</nav>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import PharmacistTaskFilter from './PharmacistTaskFilter.vue'
import { TaskType } from '~/types/pharmacist'

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
	},
})
</script>