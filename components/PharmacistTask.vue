<template>
	<button
		:class="`grid
			column-template
			gap-2
			items-centers items-center
			px-2
			py-3
			w-full
			bg-white
            text-start
			rounded-md
            ${selected ? 'border-2 border-greenBold' : ''}
            `"
		@click="$emit('on-select')"
	>
		<p class="p-x-small text-blackLight font-medium">001</p>
		<handling-task v-if="taskType === 'handling'" />
		<contact-task v-else-if="taskType === 'contact'" />
		<waiting-task v-else-if="taskType === 'waiting'" />
		<listing-task v-else-if="taskType === 'listing'" />
		<div class="justify-self-end flex items-center">
			<icon-check v-if="isOk" />
			<icon-clock v-else />
			<p class="p-normal font-medium ml-1">{{ isOk ? 'OK' : 'Is due' }}</p>
		</div>

		<p class="p-normal uppercase font-medium mt-2 col-start-2 col-span-2">
			{{ name }}
		</p>
		<p
			:class="`heading-four col-start-3 font-semibold p-2.5 rounded-md ${
				!isOk ? (isExact ? 'bg-yellowWarning' : 'bg-redBold') : ''
			}`"
		>
			{{ minutesPassed }} min
		</p>

		<p class="p-small text-blackLightest col-span-2 ml-2">16.06.2022 13:59</p>
	</button>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
import type { Task } from '../types/pharmacist'
import IconCheck from './Icons/IconCheck.vue'
import IconClock from './Icons/IconClock.vue'
import ContactTask from './TaskTypes/ContactTask.vue'
import HandlingTask from './TaskTypes/HandlingTask.vue'
import ListingTask from './TaskTypes/ListingTask.vue'
import WaitingTask from './TaskTypes/WaitingTask.vue'

const MINUTES_FOR_LATE = 11

export default defineComponent({
	components: {
		HandlingTask,
		ContactTask,
		WaitingTask,
		ListingTask,
		IconClock,
		IconCheck,
	},
	props: {
		minutesPassed: { type: Number, required: true },
		taskType: { type: String as PropType<Task>, default: 'waiting' },
		name: String,
		selected: Boolean,
	},
	emits: ['on-select'],
	setup(props) {
		const isOk = computed(() => props.minutesPassed < MINUTES_FOR_LATE)
		const isExact = computed(() => props.minutesPassed === MINUTES_FOR_LATE)

		return {
			isOk,
			isExact,
		}
	},
})
</script>

<style>
.column-template {
	grid-template-columns: auto 1fr auto;
}
</style>