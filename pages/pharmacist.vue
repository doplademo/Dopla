<template>
	<div class="px-16 mt-24 mb-24">
		<step-indicator
			:steps="6"
			:current-step="2"
			steps-text-indicator="Prescription listing"
		/>
		<pharmacist-task-nav />
		<main class="w-full flex gap-4 h-[770px] mt-4">
			<pharmacist-tasks @on-order="setOrderType" />

			<pharmacist-tasks-body :order-type="orderType" />
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
import { Task } from '~/types/pharmacist'
import { GET_PHARMACIST_TASKS } from '~/utils/api/urls'

export default defineComponent({
	components: {
		PharmacistTaskNav,
		PharmacistTasks,
		PharmacistTasksBody,
		ArrowLeftIcon,
		ArrowRightIcon,
		StepIndicator,
	},
	props: {},
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

	async asyncData({ $axios, $auth }) {
		// if (!$auth) {
		// 	console.log("NOT LOGGED IN, CAN'T GET TASKS")
		// 	return {}
		// }
		try {
			const res = await $axios.$get(GET_PHARMACIST_TASKS)
			return { tasks: res.data }
		} catch (error) {
			console.log(error)
			return {
				tasks: [],
			}
		}
	},
	async mounted() {
		// console.log(this.tasks)
		try {
			console.log('BEFORE GETTING TASKS')
			const res = await this.$axios.$get(GET_PHARMACIST_TASKS)
			console.log('DATA', res.data)
			return { tasks: res.data }
		} catch (error) {
			console.log(error)
			return {
				tasks: [],
			}
		}
	},
})
</script>

<style>
</style>