<template>
	<div
		class="
			flex flex-col flex-shrink-0
			w-[220px]
			items-start
			bg-white
			shadow-md
			border border-blackLightest
			rounded-md
			px-2
			lg:w-[280px] lg:py-6 lg:gap-2 lg:pb-4
		"
	>
		<img class="self-center lg:w-28 lg:h-28" :src="image" alt="product" />
		<h5 class="heading-five mt-3 font-medium uppercase">{{ name }}</h5>
		<div class="flex p-1.5 my-0.5 bg-pinkStrong rounded">
			<pills-pack-icon :size="16" />
			<h5 class="heading-five ml-2 font-medium">{{ packageQuantity }}</h5>
		</div>
		<div class="flex p-1.5 my-0.5 bg-oceanLight rounded">
			<guide-icon :size="16" />
			<h5 class="heading-five ml-2 font-medium">{{ additions }}</h5>
		</div>
		<div class="flex items-center justify-between w-full px-1.5 my-0.5 rounded">
			<p class="p-large font-medium">{{ price }} {{ priceSign }}</p>
			<div class="px-2 py-1 bg-greenBold rounded lg:px-3 lg:py-1.5">
				<basket-icon :size="isDesktop ? 30 : 20" />
			</div>
		</div>
	</div>
</template>

<script>
import { defineComponent } from 'vue'
import BasketIcon from './Icons/BasketIcon.vue'
import GuideIcon from './Icons/GuideIcon.vue'
import PillsPackIcon from './Icons/PillsPackIcon.vue'
import useScreen from '~/utils/hooks/useScreen'
export default defineComponent({
	components: { PillsPackIcon, GuideIcon, BasketIcon },

	props: {
		id: {
			type: Number,
			required: true,
		},
		sku: {
			type: String,
			required: true,
		},
		name: {
			type: String,
			required: true,
		},
		packageQuantity: {
			type: String,
			required: true,
		},
		additions: {
			type: String,
			default: '',
		},
		price: {
			type: String,
			default: '',
		},
		priceSign: {
			type: String,
			default: '',
		},
		image: {
			type: String,
			default: '',
		},
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