<template>
	<section
		class="
			hidden
			lg:flex lg:flex-col
			items-start
			pt-20
			bg-redLightest
			h-96
			px-0
		"
	>
		<div class="lg:self-center w-full lg:max-w-screen-xl px-4">
			<div class="flex gap-24 justify-between">
				<div class="flex flex-col items-start">
					<h3 class="heading-three font-medium bg-white p-2 rounded mb-8">
						{{ title }}
					</h3>
					<slot name="description">
						<p class="p-normal font-medium mb-4">
							Kaikki on nyt valmista tilattavaksi.
						</p>
						<p class="p-normal">Kaikki on nyt valmista tilattavaksi.</p>
					</slot>
				</div>
				<slot name="right" />
			</div>
		</div>
	</section>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'

export default defineComponent({
	props: {
		title: String,
	},
	setup() {},
})
</script>

<style>
</style>