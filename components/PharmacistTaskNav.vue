<template>
	<nav class="flex gap-2 w-full overflow-x-auto overflow-y-auto">
		<pharmacist-task-filter
			name="All tasks"
			:amount="50"
			task-color-class="bg-redBold"
			selected
		/>
		<pharmacist-task-filter
			name="Listing request"
			:amount="30"
			task-color-class="bg-yellowWarning opacity-50"
		/>
		<pharmacist-task-filter
			name="Handling request"
			:amount="20"
			task-color-class="bg-greenBold"
		/>
		<pharmacist-task-filter
			name="Paid orders"
			:amount="2"
			task-color-class="bg-greenBold"
		/>
		<pharmacist-task-filter
			name="Waiting for customer contact"
			:amount="0"
			task-color-class="bg-yellowWarning"
		/>
		<pharmacist-task-filter
			name="Cancelled"
			:amount="2"
			task-color-class="bg-greenBold"
		/>
		<pharmacist-task-filter
			name="Comments"
			:amount="2"
			task-color-class="bg-blackLightest"
		/>
	</nav>
</template>

<script>
import { defineComponent } from 'vue'
import PharmacistTaskFilter from './PharmacistTaskFilter.vue'

export default defineComponent({
  components: { PharmacistTaskFilter },
	props: {},
})
</script>

<style>
</style>