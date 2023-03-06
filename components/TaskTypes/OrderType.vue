<template>
	<div
		:class="`flex items-center rounded-md font-medium ${
			biggerSpacing ? 'p-2 gap-2' : 'p-1 gap-1'
		} ${orderTypeBg}`"
	>
		<icon-pill-pack v-if="orderType === 'prescription'" size="small" />
		<icon-profile v-else-if="orderType === 'update'" size="small" />
		<icon-minus v-else-if="needsContacting" size="small" />
		<close-icon v-else size="small" />
		<span :class="`whitespace-nowrap text-ellipsis`">{{ orderTypeText }}</span>
	</div>
</template>

<script lang='ts'>
import { computed, defineComponent, onMounted, PropType, ref, watch } from 'vue'
import type { TaskType } from '../../types/pharmacist'
import CloseIcon from '../Icons/CloseIcon.vue'
import IconMinus from '../Icons/IconMinus.vue'
import IconPillPack from '../Icons/IconPillPack.vue'
import IconProfile from '../Icons/IconProfile.vue'

export default defineComponent({
	components: {
		CloseIcon,
		IconPillPack,
		IconProfile,
		IconMinus,
	},
	props: {
		biggerSpacing: Boolean,
		needsContacting: Boolean,
		orderType: {
			type: String as PropType<TaskType>,
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
				case 'update':
					orderTypeText.value = 'Prescription handling'
					orderTypeBg.value = 'bg-redLightest'
					break
				case 'prescription':
					orderTypeText.value = 'Prescription listing'
					orderTypeBg.value = 'bg-oceanBold'
					break
				case 'pending':
					orderTypeText.value = 'Waiting for customer'
					orderTypeBg.value = 'bg-grayishWhite'
					break
				case 'cancel':
					orderTypeText.value = 'Cancelled order'
					orderTypeBg.value = 'bg-redBold'
					break
			}

			if (props.needsContacting) {
				orderTypeText.value = 'Contact customer'
				orderTypeBg.value = 'bg-grayishWhite'
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