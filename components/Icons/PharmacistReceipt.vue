<template>
	<div
		class="flex flex-col bg-white p-4 h-full overflow-y-scroll rounded-lg border border-blackLightest"
	>
		<div class="flex justify-between items-center">
			<p
				:class="`p-large font-semibold text-blackMedium rounded-md ${
					orderType === 'payed'
						? 'p-4 bg-mainBold text-white'
						: orderType === 'canceled'
						? 'p-4 bg-redBold'
						: ''
				}`"
			>
				Order #{{ task?.id }}
			</p>
			<p class="p-small font-medium text-blackLight">
				Updated
				{{ $moment(task?.updated_at).local().format('DD.MM.YYYY HH:mm') }}
			</p>
		</div>
		<div
			v-if="orderType === 'prescription' && task?.requires_contacting === '1'"
			:class="`flex items-center justify-center p-2 gap-2.5 mt-6 rounded ${
				wantsMedicalHelp ? 'bg-yellowWarning' : 'border border-blackLight'
			}`"
		>
			<icon-check />
			<span class="p-normal uppercase font-medium"> I need medical advice</span>
		</div>

		<div class="flex justify-between mt-4">
			<p class="p-normal uppercase font-medium">Drugs</p>
			<p v-if="taskProducts?.length" class="p-normal uppercase font-medium">
				{{ taskProducts.length }} pieces
			</p>
		</div>

		<div
			class="flex flex-col gap-4 border border-blackLight rounded px-2 py-4 mt-2 bg-grayishWhite"
		>
			<product-overview
				v-for="(product, index) in taskProducts"
				:key="product.name"
				:medicine-name="product.name"
				medicine-id="001"
				:instructions="product.prescription_dosage_instruction"
				:hide-border="index === taskProducts.length - 1"
			/>
		</div>

		<!-- <div class="flex justify-between mt-4">
			<p class="p-normal uppercase font-medium">
				Other medicine (webshop products)
			</p>
			<p v-if="taskProducts?.length" class="p-normal uppercase font-medium">
				{{ taskProducts.length }} pieces
			</p>
		</div> -->

		<p class="p-normal font-medium self-end mt-4">
			{{ taskProducts.length }} Products
		</p>

		<!-- <div v-if="orderType === 'prescription'" class="self-end flex gap-2 my-2">
			<button class="p-2.5 font-semibold text-center text-[15px] uppercase">
				Hold
			</button>
			<button class="main-button uppercase">See Order</button>
		</div> -->
		<a
			v-if="manageUrl"
			:href="manageUrl"
			target="__blank"
			class="main-button uppercase self-end my-2"
			>Manage order</a
		>
	</div>
</template>

<script lang='ts'>
import { defineComponent, PropType } from 'vue'
import ProductOverview from '../ProductOverview.vue'
import IconCheck from './IconCheck.vue'
import { TaskData, TaskProduct, TaskType } from '~/types/pharmacist'

export default defineComponent({
	components: { ProductOverview, IconCheck },
	props: {
		isDue: Boolean,
		wantsMedicalHelp: Boolean,
		orderType: {
			type: String as PropType<TaskType>,
			required: true,
		},
		taskProducts: {
			type: Array as PropType<TaskProduct[]>,
			required: true,
		},
		task: {
			type: Object as PropType<TaskData | null>,
			required: true,
		},
		manageUrl: {
			type: String,
			default: '',
		},
	},
})
</script>

<style>
</style>