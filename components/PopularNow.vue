<template>
	<section class="px-4 lg:p-24">
		<h4 class="heading-four my-4 font-semibold">Suosittua juuri nyt</h4>
		<p class="p-normal">Tutustu apteekin verkkokaupan tuotteisiin.</p>

		<div class="relative mt-4 max-w-[420px]">
			<form
				class="
					flex
					justify-between
					items-center
					bg-white
					p-2
					border border-blackLight
					rounded-md
					max-w-[360px]
				"
				@on-submit.prevent="onSearch"
			>
				<input
					v-model="searchQuery"
					type="text"
					class="flex-1 outline-none"
					placeholder="Search..."
				/>
				<button type="submit"><icon-search size="large" /></button>
			</form>

			<div
				v-if="searchQuery"
				class="
					absolute
					left-0
					right-0
					top-full
					mt-2
					bg-white
					h-[300px]
					border border-blackLight
					rounded-md
					overflow-y-scroll
					px-2
				"
			>
				<search-product
					name="simvastatin abc pharma 20 mg, op98"
					price="99,99 €"
					@select-product="onSelectProduct(true)"
				/>
				<search-product
					name="simvastatin abc pharma 20 mg, op98"
					price="99,99 €"
				/>
				<search-product
					name="simvastatin abc pharma 20 mg, op98"
					price="99,99 €"
				/>
				<search-product
					name="simvastatin abc pharma 20 mg, op98"
					price="99,99 €"
				/>
				<search-product
					name="simvastatin abc pharma 20 mg, op98"
					price="99,99 €"
				/>
				<search-product
					name="simvastatin abc pharma 20 mg, op98"
					price="99,99 €"
				/>
				<search-product
					name="simvastatin abc pharma 20 mg, op98"
					price="99,99 €"
					is-last
				/>
			</div>
		</div>

		<div class="flex flex-row overflow-x-scroll my-4 py-2 scroll-auto gap-4">
			<store-product
				v-for="product in dummyProducts"
				:id="product.id"
				:key="product.id"
				:sku="product.sku"
				:name="product.name"
				:price="product.price"
				:additions="product.additions"
				:package-quantity="product.packageQuantity"
			/>
		</div>
		<modal-container v-if="showProduct">
			<store-product-modal @on-close="showProduct = false" />
		</modal-container>
	</section>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import StoreProduct from './StoreProduct.vue'
import IconSearch from './Icons/IconSearch.vue'
import SearchProduct from './SearchProduct.vue'
import ModalContainer from './ModalContainer.vue'
import StoreProductModal from './StoreProductModal.vue'

import { dummyProducts } from '~/dummy/dummyReviews'
export default defineComponent({
	components: {
		StoreProduct,
		IconSearch,
		SearchProduct,
		ModalContainer,
		StoreProductModal,
	},
	setup() {
		const searchQuery = ref('')
		const showProduct = ref(false)

		function onSelectProduct(value: boolean) {
			showProduct.value = value
		}
		function onSearch() {
			searchQuery.value = ''
		}

		return {
			searchQuery,
			showProduct,
			onSearch,
			onSelectProduct,
			dummyProducts,
		}
	},
})
</script>

<style>
</style>