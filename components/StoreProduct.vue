<template>
	<div class="flex flex-col flex-shrink-0 w-[190px] items-start bg-white shadow-lg shadow-blackLightest rounded-md mx-2 px-2">
        <img class="self-center" src="~/assets/images/common/product.png" alt="product" />
        <heading-five class-name="mt-3 font-medium uppercase">{{name}}</heading-five>
        <div class="flex p-1.5 my-0.5 bg-pinkStrong rounded ">
            <pills-pack-icon :size="16" />
            <heading-five class-name="ml-2 font-medium">{{packageQuantity}}</heading-five>
        </div>
        <div class="flex p-1.5 my-0.5 bg-oceanLight rounded">
            <guide-icon :size="16" />
            <heading-five class-name="ml-2 font-medium">{{additions}}</heading-five>
        </div>
        <div class="flex items-center justify-between w-full p-1.5 my-0.5 rounded">
            <paragraph-large class-name="font-medium">{{price}}</paragraph-large>
            <div class="px-2 py-1 bg-greenBold rounded">
                <basket-icon :size="20" />
            </div>
        </div>
    </div>
</template>

<script>
import HeadingFive from './Heading/HeadingFive.vue'
import BasketIcon from './Icons/BasketIcon.vue'
import GuideIcon from './Icons/GuideIcon.vue'
import PillsPackIcon from './Icons/PillsPackIcon.vue'
import ParagraphLarge from './Paragraph/ParagraphLarge.vue'
export default {
  components: { PillsPackIcon, HeadingFive, GuideIcon, BasketIcon, ParagraphLarge },
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