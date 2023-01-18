<template>
	<div
		:class="`flex items-center rounded-md font-medium ${
			biggerSpacing ? 'p-2 gap-2' : 'p-1 gap-1'
		} ${orderTypeBg}`"
	>
		<icon-prescription v-if="orderType === 'listing'" size="small" />
		<icon-pill-pack v-else-if="orderType === 'handling'" size="small" />
		<icon-profile v-else-if="orderType === 'waiting'" size="small" />
		<icon-minus v-else-if="orderType === 'contact'" size="small" />
		<icon-check v-else-if="orderType === 'payed'" size="small" color="white" />
		<close-icon v-else size="small" />
		<span :class="`whitespace-nowrap text-ellipsis ${orderType === 'payed' ? 'text-white' : ''}`">{{
			orderTypeText
		}}</span>
	</div>
</template>

<script lang='ts'>
import { computed, defineComponent, onMounted, PropType, ref, watch } from 'vue'
import type { Task } from '../../types/pharmacist'
import CloseIcon from '../Icons/CloseIcon.vue'
import IconCheck from '../Icons/IconCheck.vue'
import IconMinus from '../Icons/IconMinus.vue'
import IconPillPack from '../Icons/IconPillPack.vue'
import IconPrescription from '../Icons/IconPrescription.vue'
import IconProfile from '../Icons/IconProfile.vue'

export default defineComponent({
	components: {
		IconPrescription,
		IconCheck,
		CloseIcon,
		IconPillPack,
		IconProfile,
		IconMinus,
	},
	props: {
		biggerSpacing: Boolean,
		orderType: {
			type: String as PropType<Task>,
			required: true,
		},
	},
	setup(props) {
		const orderType = computed(() => props.orderType)
		const orderTypeBg = ref('')
		const orderTypeText = ref('')

		onMounted(setOrderProperties)
		watch(orderType, setOrderProperties)

		function setOrderProperties() {
			switch (orderType.value) {
				case 'contact':
					orderTypeText.value = 'Waiting for customer contact'
					orderTypeBg.value = 'bg-yellowWarning'
					break
				case 'handling':
					orderTypeText.value = 'Prescription handling'
					orderTypeBg.value = 'bg-redLightest'

					break
				case 'listing':
					orderTypeText.value = 'Prescription listing'
					orderTypeBg.value = 'bg-oceanBold'
					break
				case 'waiting':
					orderTypeText.value = 'Waiting for customer'
					orderTypeBg.value = 'bg-grayishWhite'
					break
				case 'payed':
					orderTypeText.value = 'Paid order'
					orderTypeBg.value = 'bg-mainBold'
					break
				case 'canceled':
					orderTypeText.value = 'Cancelled order'
					orderTypeBg.value = 'bg-redBold'
					break
			}
		}

		return {
			orderTypeText,
			orderTypeBg,
		}
	},
})
</script>

<style>
</style>