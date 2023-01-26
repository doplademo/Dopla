<template>
	<div
		:class="`flex items-start py-4 border-b border-blackLightest lg:py-0 gap-3 ${
			hideBorder ? 'border-none' : 'lg:pb-4'
		}`"
	>
		<p class="p-small text-blackLight lg:pt-0.5">{{ medicineId }}</p>

		<div class="w-3/4">
			<div class="mb-2">
				<p class="p-large flex-1 font-medium">{{ medicineName }}</p>
			</div>
			<div class="bg-oceanLight flex items-center rounded p-1">
				<guide-icon :size="isDesktop ? 30 : 20" />
				<p v-if="instructions" class="p-small ml-2">{{ instructions }}</p>
			</div>
		</div>
		<p v-if="price" class="p-normal font-semibold flex-shrink-0">{{ price }}</p>
	</div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import GuideIcon from './Icons/GuideIcon.vue'
import useScreen from '~/utils/hooks/useScreen'

export default defineComponent({
	components: { GuideIcon },
	props: {
		medicineName: String,
		medicineId: String,
		price: String,
		hideBorder: Boolean,
		instructions: { type: String, default: '' },
	},
	setup() {
		const { isDesktop } = useScreen()

		return {
			isDesktop,
		}
	},
})
</script>

<style>
</style>