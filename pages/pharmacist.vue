<template>
	<div class="px-16 mt-24 mb-24">
		<step-indicator
			:steps="6"
			:current-step="2"
			steps-text-indicator="Prescription listing"
		/>
		<pharmacist-task-nav
			:set-filter="filterTasks"
			:selected-task="selectedFilter"
		/>
		<main class="w-full flex gap-4 h-[770px] mt-4">
			<pharmacist-tasks
				:tasks="tasks"
				:selected-task-id="selectedTaskId"
				@on-select-task="selectTask"
				@on-order="setOrderType"
			/>

			<pharmacist-tasks-body
				:task="selectedTask"
				:order-type="orderType"
				:task-products="taskProducts"
			/>
		</main>

		<div class="flex gap-4 justify-end pr-48 mt-6">
			<button
				class="flex gap-2 items-center uppercase heading-five font-semibold p-2"
			>
				<arrow-left-icon />
				<span>previous</span>
			</button>
			<button
				class="flex gap-2 items-center uppercase heading-five font-semibold p-2"
			>
				<span>next</span>
				<arrow-right-icon />
			</button>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import ArrowLeftIcon from '~/components/Icons/ArrowLeftIcon.vue'
import ArrowRightIcon from '~/components/Icons/ArrowRightIcon.vue'
import PharmacistTaskNav from '~/components/PharmacistTaskNav.vue'
import PharmacistTasks from '~/components/PharmacistTasks.vue'
import PharmacistTasksBody from '~/components/PharmacistTasksBody.vue'
import StepIndicator from '~/components/StepIndicator.vue'
import { Task, TaskProduct, TaskType } from '~/types/pharmacist'
import { GET_PHARMACIST_TASKS, GET_TASK_PRODUCTS } from '~/utils/api/urls'
import { loadPharmacist } from '~/utils/pharmacist'

export default defineComponent({
	components: {
		PharmacistTaskNav,
		PharmacistTasks,
		PharmacistTasksBody,
		ArrowLeftIcon,
		ArrowRightIcon,
		StepIndicator,
	},

	layout: 'onboarding',

	setup() {
		const orderType = ref<Task>('handling')

		function setOrderType(value: Task) {
			console.log(value)
			orderType.value = value
		}

		return {
			orderType,
			setOrderType,
		}
	},
	async asyncData({ $axios, $auth, route, redirect }) {
		const token = route.query.token
		if (token) {
			await loadPharmacist(token as string, $auth, redirect)
			return
		}

		try {
			const res = await $axios.$get(GET_PHARMACIST_TASKS)
			const bam = await $axios.$get(GET_TASK_PRODUCTS + 1)

			console.log(bam)
			const firstTask = res[0]
			return {
				tasks: res,
				selectedFilter: 'all' as TaskType,
				selectedTaskId: firstTask.id,
				selectedTask: firstTask,
			}
		} catch (error) {
			console.log(error)
			return {
				tasks: [],
			}
		}
	},

	data() {
		return {
			tasks: [],
			selectedFilter: 'all' as TaskType,
			selectedTaskId: '0',
			selectedTask: null,
			taskProducts: [] as TaskProduct[],
		}
	},

	watch: {
		tasks(newTasks) {
			console.log(newTasks)
		},
		selectedTaskId(newId) {
			this.selectedTask = this.tasks.find((task: any) => task.id === newId)!
			this.setTaskProducts(newId)
		},
	},

	mounted() {
		this.setTaskProducts(this.selectedTaskId)
	},

	methods: {
		async filterTasks(filter: TaskType) {
			const filterParam = filter === 'all' ? '' : `?filter=${filter}`
			const res = await this.$axios.$get(GET_PHARMACIST_TASKS + filterParam)
			this.selectedFilter = filter
			this.tasks = res
		},
		async setTaskProducts(id: string) {
			const products = await this.$axios.$get(GET_TASK_PRODUCTS + id)
			this.taskProducts = products.slice(1)
		},
		selectTask(id: string) {
			this.selectedTaskId = id
		},
	},
})
</script>

<style>
</style>