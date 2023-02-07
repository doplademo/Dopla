<template>
	<div class="lg:flex lg:flex-col lg:items-center">
		<main class="flex flex-col gap-4 pt-24 pb-8 px-4 lg:gap-8 lg:max-w-3xl">
			<h2 class="heading-two">Tietosuojaseloste</h2>
			<p class="p-normal">
				Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit
				magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante
				fermentum sit amet. Pellentesque commodo lacus at sodales sodales.
				Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In
				iaculis arcu eros, eget tempus orci facilisis id.
			</p>

			<div class="flex flex-col lg:self-center lg:w-[100vw] lg:max-w-5xl">
				<img src="~/assets/images/common/image 5.png" class="w-full" />
				<p class="p-x-small text-blackLight italic self-end mt-2">
					image description h6
				</p>
			</div>

			<p class="p-normal">
				Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit
				magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante
				fermentum sit amet. Pellentesque commodo lacus at sodales sodales.
				Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In
				iaculis arcu eros, eget tempus orci facilisis id.
			</p>

			<p class="p-normal">
				Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit
				magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante
				fermentum sit amet. Pellentesque commodo lacus at sodales sodales.
				Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In
				iaculis arcu eros, eget tempus orci facilisis id.
			</p>

			<p class="p-normal font-semibold">Nullam quis imperdiet augue.</p>

			<p class="p-normal">
				Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit
				magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante
				fermentum sit amet. Pellentesque commodo lacus at sodales sodales.
				Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In
				iaculis arcu eros, eget tempus orci facilisis id.
			</p>

			<h2 class="heading-two text-center">1 500 000</h2>

			<p class="p-normal font-semibold">Nullam quis imperdiet augue.</p>

			<p class="p-normal">
				Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit
				magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante
				fermentum sit amet. Pellentesque commodo lacus at sodales sodales.
				Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In
				iaculis arcu eros, eget tempus orci facilisis id.
			</p>

			<h2 class="heading-two text-center">2 %</h2>

			<p class="p-normal font-semibold">Nullam quis imperdiet augue.</p>

			<p class="p-normal">
				Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit
				magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante
				fermentum sit amet. Pellentesque commodo lacus at sodales sodales.
				Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In
				iaculis arcu eros, eget tempus orci facilisis id.
			</p>

			<accordion title="Haitarielementti 1" :icon-color="Colors.blackBold">
			</accordion>
			<accordion title="Haitarielementti 2" :icon-color="Colors.blackBold">
			</accordion>
			<accordion title="Haitarielementti 3" :icon-color="Colors.blackBold">
			</accordion>

			<p class="p-normal font-semibold">
				Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit
				magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante
				fermentum sit amet.
			</p>

			<p class="p-normal">
				Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit
				magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante
				fermentum sit amet. Pellentesque commodo lacus at sodales sodales.
				Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In
				iaculis arcu eros, eget tempus orci facilisis id.
			</p>
		</main>
		<cta-section bg-class="bg-redLightest w-full" />
	</div>
</template>

<script>
import { defineComponent } from 'vue'
import Accordion from '~/components/Accordion.vue'
import CtaSection from '~/components/FAQ/CtaSection.vue'
import { Colors } from '~/utils/Colors'

export default defineComponent({
	components: { Accordion, CtaSection },
	props: {},
	data() {
		return {
			Colors,
		}
	},
})
</script>

<style>
</style>