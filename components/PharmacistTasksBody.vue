<template>
	<div class="flex-1 flex gap-4 p-4 bg-grayishWhite items-start">
		<section class="w-[40%]">
			<div class="w-full flex items-center justify-between">
				<order-type order-type="listing" bigger-spacing />
				<p class="p-small text-blackLight col-span-2 ml-2">16.06.2022 13:59</p>
			</div>
			<h4 class="heading-four font-semibold mt-4">Ulla Espoolainen</h4>

			<div class="flex gap-4 mt-4 items-center">
				<p class="p-large p-medium">050 1234 123</p>
				<copy-button copy="050 1234 123" />
			</div>
			<div class="flex flex-col gap-2">
				<text-input
					:value="ssn"
					label="social security number"
					class-name="mt-4"
				/>

				<copy-button :copy="ssn" />
			</div>
		</section>

		<section class="h-full w-[60%] flex flex-col">
			<div class="flex self-end items-center">
				<icon-check v-if="isOk" />
				<icon-clock v-else />
				<p class="p-normal font-medium ml-1">{{ isOk ? 'OK' : 'Is due' }}</p>
			</div>

			<div
				class="
					flex
					justify-between
					items-center
					mt-4
					pb-3
					border-b border-redLightest
				"
			>
				<p class="heading-five font-medium">Prescriptions (4)</p>
				<div class="flex items-center gap-2">
					<button
						class="
							flex
							gap-2
							items-center
							px-2
							py-1
							uppercase
							rounded
							bg-redLightest
						"
					>
						<icon-refresh />
						<span class="text-sm font-semibold">Update</span>
					</button>
					<p class="heading-five font-medium">Updated 13.03.2022 13:33</p>
				</div>
			</div>

			<!-- sdklaskjdh -->

			<pharmacist-prescriptions
				v-if="orderType === 'waiting' || orderType === 'contact'"
			/>
			<pharmacist-no-prescription v-else-if="orderType === 'handling'" />
			<pharmacist-receipt
				v-else
				:orderType="orderType"
				:price="orderType !== 'listing' ? '99.99 €' : ''"
			/>
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
import PharmacistPrescriptions from './PharmacistPrescriptions.vue'
import PharmacistNoPrescription from './PharmacistView/PharmacistNoPrescription.vue'
import OrderType from './TaskTypes/OrderType.vue'
import { Task } from '~/types/pharmacist'

export default defineComponent({
	components: {
		CopyButton,
		TextInput,
		IconCheck,
		IconClock,
		IconRefresh,
		PharmacistPrescriptions,
		PharmacistNoPrescription,
		OrderType,
		PharmacistReceipt,
	},
	props: {
		orderType: {
			type: String as PropType<Task>,
			required: true,
		},
	},
	setup() {
		const ssn = ref('010234-1234')
		const isOk = ref(false)

		return {
			ssn,
			isOk,
		}
	},
})
</script>

<style>
.grid-template {
	grid-template-columns: 33% 77%;
}
</style>