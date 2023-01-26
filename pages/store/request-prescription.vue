<script lang="ts">
import { defineComponent } from 'vue'
import RequestPrescription from '~/components/RequestPrescription.vue'
export default defineComponent({
	components: {
		RequestPrescription,
	},
	layout: 'store',
})
</script>

<template>
	<main class="bg-greenHover pt-24">
		<request-prescription />
	</main>
</template>


<style>
</style>