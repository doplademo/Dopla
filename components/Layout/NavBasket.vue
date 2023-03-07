<template>
	<div
		class="absolute flex flex-col bg-white max-h-[500px] rounded-md top-20 left-2 right-2 p-5 lg:max-h-[700px] lg:left-auto lg:rounded-md lg:right-24 shadow-md shadow-blackLightest"
	>
		<div class="flex justify-between items-center">
			<p class="p-small bg-pinkLight p-1 font-medium rounded">
				Shopping basket
			</p>
			<button
				class="bg-pinkLight px-1 py-0.5 rouded"
				@click="$emit('close-basket')"
			>
				<close-icon size="small" />
			</button>
		</div>
		<h4 class="heading-four bg-pinkLight rounded font-semibold p-2 mt-4">
			{{ basket?.items_count || 0 }} Product{{
				basket?.items_count === 1 ? '' : 's'
			}}
			in basket
		</h4>
		<div
			v-if="basket?.items_count"
			class="flex1 overflow-y-scroll scrollbar-hide"
		>
			<p
				v-if="prescriptionDrugs?.length"
				class="p-normal text-blackLight font-medium mt-3"
			>
				prescription drugs
			</p>
			<div
				v-if="prescriptionDrugs?.length"
				class="flex flex-col gap-4 my-2 flex-1"
			>
				<nav-basket-product
					v-for="item in prescriptionDrugs"
					:key="item.item_id"
					:product-id="item.item_id"
					:product-name="item.name"
					:price="item.priceString"
					action-text="Remove"
				/>
			</div>

			<p
				v-if="shopItems?.length"
				class="p-normal text-blackLight font-medium mt-3"
			>
				Pharmacy products
			</p>

			<div v-if="shopItems?.length" class="flex flex-col gap-4 my-2">
				<nav-basket-product
					v-for="item in shopItems"
					:key="item.item_id"
					:product-id="item.item_id"
					:product-name="item.name"
					:price="item.priceString"
					action-text="Remove"
				/>
			</div>

			<div class="pb-2 border-b border-redLightest">
				<div class="flex justify-between items-center">
					<p class="p-normal text-blackLight">Total before deduction</p>
					<p class="p-normal font-medium">{{ basket.grand_total_string }}</p>
				</div>
				<div class="flex justify-between items-center">
					<p class="p-normal text-blackLight">Reimbursement</p>
					<p class="p-normal font-medium mt-2">
						0.00€
					</p>
				</div>
			</div>

			<div class="flex justify-between items-center mt-2">
				<p class="p-normal">Amount payable</p>
				<p class="p-normal font-medium mt-2">{{ basket.grand_total_string }}</p>
			</div>

			<nuxt-link
				to="/checkout"
				class="main-button w-full mt-6"
				@click.native="$emit('close-basket')"
				>PAY</nuxt-link
			>
		</div>
		<div v-else class="flex-1 items-center justify-center">
			<p class="p-normal text-blackLight font-medium mt-3">
				Your shopping basket is empty
			</p>
			<nuxt-link
				to="/store"
				class="main-button w-full mt-6"
				@click.native="$emit('close-basket')"
				>Continue shopping</nuxt-link
			>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import CloseIcon from '../Icons/CloseIcon.vue'
import NavBasketProduct from '../NavBasketProduct.vue'
import { Basket } from '~/types/baskte'

export default defineComponent({
	components: { CloseIcon, NavBasketProduct },
	props: {
		basket: {
			type: Object as PropType<Basket>,
			required: true,
		},
	},
	emits: ['close-basket'],
	computed: {
		prescriptionDrugs() {
			return (
				this.basket?.items?.filter(
					(item) => item.product_type === 'prescription_drug'
				) || ([] as Basket['items'])
			)
		},
		shopItems() {
			return (
				this.basket?.items?.filter((item) => item.product_type === 'simple') ||
				([] as Basket['items'])
			)
		},
	},
	mounted() {
		console.log('basket', this.basket)
	},
})
</script>

<style>
</style>