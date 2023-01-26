<template>
	<div
		class="
			flex flex-col
			bg-white
			p-4
			h-full
			overflow-y-scroll
			rounded-lg
			border border-blackLightest
		"
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
				Order #1234567890
			</p>
			<p class="p-small font-medium text-blackLight">
				Updated 13.08.2022 13:59
			</p>
		</div>
		<div
			v-if="orderType === 'listing'"
			:class="`flex items-center justify-center p-2 gap-2.5 mt-6 rounded ${
				wantsMedicalHelp ? 'bg-yellowWarning' : 'border border-blackLight'
			}`"
		>
			<icon-check />
			<span class="p-normal uppercase font-medium"> I need medical advice</span>
		</div>

		<div class="flex justify-between mt-4">
			<p class="p-normal uppercase font-medium">Prescription drugs</p>
			<p class="p-normal uppercase font-medium">2 pieces</p>
		</div>

		<div
			class="
				flex flex-col
				gap-4
				border border-blackLight
				rounded
				px-2
				py-4
				mt-2
				bg-grayishWhite
			"
		>
			<product-overview
				medicine-name="Simvastatin ABC Pharma 20 mg, op98"
				medicine-id="001"
				instructions="Half a tablet in the morning to treat allergic rashes"
				:price="price"
			/>
			<product-overview
				hide-border
				medicine-name="Simvastatin ABC Pharma 20 mg, op98"
				medicine-id="001"
				instructions="Half a tablet in the morning to treat allergic rashes"
				:price="price"
			/>
		</div>

		<div class="flex justify-between mt-4">
			<p class="p-normal uppercase font-medium">
				Other medicine (webshop products)
			</p>
			<p class="p-normal uppercase font-medium">2 pieces</p>
		</div>

		<div
			class="
				flex flex-col
				gap-4
				border border-blackLight
				rounded
				px-2
				py-4
				mt-2
				bg-grayishWhite
			"
		>
			<product-overview
				medicine-name="Simvastatin ABC Pharma 20 mg, op98"
				medicine-id="001"
				instructions="Half a tablet in the morning to treat allergic rashes"
				:price="price"
			/>
			<product-overview
				hide-border
				medicine-name="Simvastatin ABC Pharma 20 mg, op98"
				medicine-id="001"
				instructions="Half a tablet in the morning to treat allergic rashes"
				:price="price"
			/>
		</div>

		<p class="p-normal font-medium self-end mt-4">3 Products {{ price }}</p>

		<div v-if="orderType === 'listing'" class="self-end flex gap-2 my-2">
			<button class="p-2.5 font-semibold text-center text-[15px] uppercase">
				Hold
			</button>
			<button class="main-button uppercase">See Order</button>
		</div>
		<button
			v-else-if="orderType === 'payed'"
			class="main-button uppercase self-end my-2"
		>
			manage
		</button>
	</div>
</template>

<script lang='ts'>
import { defineComponent, PropType } from 'vue'
import ProductOverview from '../ProductOverview.vue'
import IconCheck from './IconCheck.vue'
import { Task } from '~/types/pharmacist'

export default defineComponent({
	components: { ProductOverview, IconCheck },
	props: {
		isDue: Boolean,
		orderType: {
			type: String as PropType<Task>,
			default: 'payed',
		},
		price: String,
		wantsMedicalHelp: Boolean,
	},
})
</script>

<style>
</style>