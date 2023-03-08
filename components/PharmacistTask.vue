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
            ${selected ? 'border-4 border-greenLight' : ''}
            `"
		@click="$emit('on-select')"
	>
		<p class="p-x-small text-blackLight font-medium">001</p>
		<order-type :order-type="taskType" :needs-contacting="needsContacting" />
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
				timePassedStatus !== 'on-time'
					? timePassedStatus === 'warning'
						? 'bg-yellowWarning'
						: 'bg-redBold'
					: ''
			}`"
		>
			{{ timePassed > 15 ? '15+' : timePassed }} min
		</p>

		<p class="p-small text-blackLightest col-span-2 ml-2">{{ taskCreatedAt }}</p>
	</button>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
import type { TaskData, TaskType } from '../types/pharmacist'
import IconCheck from './Icons/IconCheck.vue'
import IconClock from './Icons/IconClock.vue'
import OrderType from './TaskTypes/OrderType.vue'

const MINUTES_FOR_LATE = 11
const MAX_MINUTES = 15

export default defineComponent({
	components: {
		OrderType,
		IconCheck,
		IconClock,
	},
	props: {
		minutesPassed: { type: Number, required: true },
		taskType: { type: String as PropType<TaskType>, default: 'update' },
		task: { type: Object as PropType<TaskData>, required: true },
		name: String,
		selected: Boolean,
		needsContacting: Boolean,
	},
	emits: ['on-select'],
	setup(props) {
		const isExact = computed(() => props.minutesPassed === MINUTES_FOR_LATE)

		return {
			isExact,
		}
	},
	computed: {
		timePassed() {
			return this.$moment().local().diff(this.task.created_at, 'minutes')
		},
		taskCreatedAt() {
			return this.$moment(this.task.created_at).local().format('DD.MM.YYYY HH:mm')
		},
		isOk() {
			return this.timePassed < MINUTES_FOR_LATE
		},
		timePassedStatus() {
			if (this.timePassed < MINUTES_FOR_LATE) {
				return 'on-time'
			}
			if (this.timePassed < MAX_MINUTES) {
				return 'warning'
			}

			return 'late'
		},
	},
})
</script>

<style>
.column-template {
	grid-template-columns: auto 1fr auto;
}
</style>