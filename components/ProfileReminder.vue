<template>
	<div class="px-2 py-4">
		<div class="flex justify-between pb-2 border-b border-blackLightest">
			<p class="p-small font-medium uppercase text-blackLight">
				{{ active ? 'Next reminder' : 'Paused' }}
			</p>
			<p v-if="active" class="p-small font-medium">07.07.2023</p>
		</div>

		<product-overview
			:medicine-name="medicineName"
			:medicine-id="medicineId"
			instructions="Puoli tablettia aamuin illoin..."
		/>

		<div class="flex justify-end gap-4 w-full mt-6">
			<button
				v-if="active"
				class="border-button-small border-redBold uppercase"
			>
				Pause reminder
			</button>
			<button :class="`main-button-small uppercase ${!active ? 'w-full' : ''}`">
				{{ active ? 'Ok' : 'Request activation' }}
			</button>
		</div>
	</div>
</template>

<script>
import { defineComponent } from 'vue'
import ProductOverview from './ProductOverview.vue'

export default defineComponent({
	components: { ProductOverview },
	props: {
		active: Boolean,
		medicineName: String,
		medicineId: String,
		instructions: { type: String, default: 'Instructions...' },
	},
})
</script>

<style>
</style>