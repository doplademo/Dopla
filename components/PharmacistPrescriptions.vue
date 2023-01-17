<template>
	<div class="flex flex-col mt-2 h-full overflow-y-scroll gap-2">
		<pharmacist-prescription />
		<pharmacist-prescription />
		<pharmacist-prescription />
		<pharmacist-prescription />
	</div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import PharmacistPrescription from './PharmacistPrescription.vue'

export default defineComponent({
  components: { PharmacistPrescription },
	props: {},
})
</script>

<style>
</style>