<template>
	<div class="flex-1 flex gap-4 p-4 bg-grayishWhite items-start">
		<section v-if="task" class="w-[40%]">
			<div class="w-full flex items-center justify-between">
				<order-type
					:order-type="task.type"
					:needs-contacting="
						task.requires_contacting === '1' && task.customer_contact === '0'
					"
					bigger-spacing
				/>
				<p class="p-small text-blackLight col-span-2 ml-2">16.06.2022 13:59</p>
			</div>
			<h4 class="heading-four font-semibold mt-4">
				{{ `${task.customer_firstname} ${task.customer_lastname}` }}
			</h4>

			<div class="flex gap-4 mt-4 items-center">
				<p class="p-large p-medium">{{ task.telephone }}</p>
				<copy-button :copy="task.telephone" />
			</div>
			<div class="flex flex-col gap-2">
				<text-input
					:value="task.ssn"
					label="social security number"
					class-name="mt-4"
				/>

				<copy-button :copy="task.ssn" />
			</div>
		</section>

		<section class="h-full w-[60%] flex flex-col">
			<div class="flex self-end items-center">
				<icon-check v-if="isOk" />
				<icon-clock v-else />
				<p class="p-normal font-medium ml-1">{{ isOk ? 'OK' : 'Is due' }}</p>
			</div>

			<div
				class="flex justify-between items-center mt-4 pb-3 border-b border-redLightest"
			>
				<p class="heading-five font-medium">
					Prescriptions ({{ taskProducts.length }})
				</p>
				<div class="flex items-center gap-2">
					<button
						class="flex gap-2 items-center px-2 py-1 uppercase rounded bg-redLightest"
						@click="$emit('update-tasks')"
					>
						<icon-refresh />
						<span class="text-sm font-semibold">Update</span>
					</button>
					<p class="heading-five font-medium">
						Updated
						{{ $moment(lastUpdated).local().format('DD.MM.YYYY HH:mm') }}
					</p>
				</div>
			</div>

			<!-- sdklaskjdh -->

			<!-- <pharmacist-prescriptions
				v-if="false"
			/> -->
			<pharmacist-receipt
				v-if="taskProducts?.length"
				:manage-url="task?.manage_url"
				:order-type="orderType"
				:task-products="taskProducts"
				:task="task"
			/>
			<pharmacist-no-prescription v-else />
		</section>
	</div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue'
import CopyButton from './Button/CopyButton.vue'
import IconCheck from './Icons/IconCheck.vue'
import IconClock from './Icons/IconClock.vue'
import IconRefresh from './Icons/IconRefresh.vue'
import PharmacistReceipt from './Icons/PharmacistReceipt.vue'
import TextInput from './Input/TextInput.vue'
import PharmacistNoPrescription from './PharmacistView/PharmacistNoPrescription.vue'
import OrderType from './TaskTypes/OrderType.vue'
import { TaskData, TaskProduct, TaskType } from '~/types/pharmacist'

export default defineComponent({
	components: {
		CopyButton,
		TextInput,
		IconCheck,
		IconClock,
		IconRefresh,
		PharmacistNoPrescription,
		OrderType,
		PharmacistReceipt,
	},
	props: {
		orderType: {
			type: String as PropType<TaskType>,
			default: '',
		},
		task: {
			type: Object as PropType<TaskData | null>,
			required: true,
		},
		taskProducts: {
			type: Array as PropType<TaskProduct[]>,
			required: true,
		},
		lastUpdated: {
			type: Date,
			required: true,
		},
	},
	emits: ['update-tasks'],
	setup() {
		const ssn = ref('010234-1234')
		const isOk = ref(false)

		return {
			ssn,
			isOk,
		}
	},
	computed: {},

	mounted() {
		console.log(this.task)
	},
})
</script>

<style>
.grid-template {
	grid-template-columns: 33% 77%;
}
</style>