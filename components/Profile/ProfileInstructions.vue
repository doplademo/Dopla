<template>
	<div
		class="
			hidden
			p-6
			
			rounded-md
			flex-shrink-0
			lg:flex lg:flex-col lg:gap-6
			max-w-[400px]
		"
	>
		<div class="grid place-content-center flex1 h-full">
			<img :src="Images.researcherWhite" alt="researcher" class="w-24 object-contain object-center" />
		</div>
        <div class="border border-blackLightest p-4 rounded-md bg-white">

            <p class="p-normal font-semibold mb-4">
                Open from the left
            </p>
            <p class="p-normal">You’ll get more information that way. Lorem ipsum</p>
        </div>
	</div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import { Images } from '~/utils/Images'
export default defineComponent({
	props: {},
	setup() {},
	data() {
		return {
			Images,
		}
	},
})
</script>

<style>
</style>