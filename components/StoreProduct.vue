<template>
	<div class="flex flex-col flex-shrink-0 w-[190px] items-start bg-white shadow-lg shadow-blackLightest rounded-md mx-2 px-2">
        <img class="self-center" src="~/assets/images/common/product.png" alt="product" />
        <h5 class="heading-five mt-3 font-medium uppercase">{{name}}</h5>
        <div class="flex p-1.5 my-0.5 bg-pinkStrong rounded ">
            <pills-pack-icon :size="16" />
            <h5 class="heading-five ml-2 font-medium">{{packageQuantity}}</h5>
        </div>
        <div class="flex p-1.5 my-0.5 bg-oceanLight rounded">
            <guide-icon :size="16" />
            <h5 class="heading-five ml-2 font-medium">{{additions}}</h5>
        </div>
        <div class="flex items-center justify-between w-full p-1.5 my-0.5 rounded">
            <p class="p-large font-medium">{{price}}</p>
            <div class="px-2 py-1 bg-greenBold rounded">
                <basket-icon :size="20" />
            </div>
        </div>
    </div>
</template>

<script>
import BasketIcon from './Icons/BasketIcon.vue'
import GuideIcon from './Icons/GuideIcon.vue'
import PillsPackIcon from './Icons/PillsPackIcon.vue'
export default {
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
			required: true,
		},
	},
}
</script>

<style>
</style>