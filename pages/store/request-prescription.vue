<!-- TODO replace all main-layout with this layout -->
<script lang="ts">
import { defineComponent, ref } from 'vue'
import { prescribedProducts } from '~/dummy/dummyproducts'
import RequestPrescription from '~/components/RequestPrescription.vue'
export default defineComponent({
	components: {
		RequestPrescription,
	},
	setup(_) {
		const products = ref([...prescribedProducts])
		const selectedHelp = ref<null | number>(null)

		const setSelected = (value: number) => {
			selectedHelp.value = value
		}

		const remove = (id: number) => {
			products.value = products.value.filter((product) => product.id !== id)
		}

		return {
			products,
			selectedHelp,
			setSelected,
			remove,
		}
	},
})
</script>

<template>
	<main class="bg-greenHover pt-24">
		<request-prescription />
	</main>
</template>


<style>
</style>