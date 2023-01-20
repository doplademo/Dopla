<template>
	<div
		class="
			hidden
			bg-white
			p-6
			border border-blackLightest
			rounded-md flex-shrink-0
			lg:flex lg:flex-col lg:gap-6
			max-w-[400px]
		"
	>
		<h4 class="heading-four font-semibold p-2 bg-redLightest">
			Your prescription drug order
		</h4>
		<p class="p-normal">
			Kun lisäät reseptilääkkeitä tilaukseesi, ne ilmestyvät tähän
		</p>
		<div class="grid place-content-center flex1 h-full">
			<img :src="Images.researcher" alt="researcher" class="w-44 h-28" />
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