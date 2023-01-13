<template>
	<div
		class="
			absolute
			bg-white
			max-h-[500px]
			overflow-y-scroll
			rounded-md
			top-20
			left-2
			right-2
			p-5
		"
	>
		<div class="flex justify-between items-center">
			<p class="p-small bg-pinkLight p-1 font-medium rounded">
				Shopping basket
			</p>
			<div class="bg-pinkLight px-1 py-0.5 rouded">
				<close-icon size="small" />
			</div>
		</div>
		<h4 class="heading-four bg-pinkLight rounded font-semibold p-2 mt-4">
			4 Products in basket
		</h4>
		<p class="p-normal text-blackLight font-medium mt-3">
			3 prescription drugs
		</p>

		<div class="flex flex-col gap-4 my-2">
			<nav-basket-product
				product-id="001"
				product-name="simvastatin abc pharma 20 mg, op98"
				price="99,99 €"
				action-text="You sure?"
			/>
			<nav-basket-product
				product-id="001"
				product-name="simvastatin abc pharma 20 mg, op98"
				price="99,99 €"
				action-text="Delete"
			/>
			<nav-basket-product
				product-id="001"
				product-name="simvastatin abc pharma 20 mg, op98"
				price="99,99 €"
				action-text="Delete"
			/>
		</div>

		<p class="p-normal text-blackLight font-medium mt-3">Pharmacy products</p>

		<div class="flex flex-col gap-4 my-2">
			<nav-basket-product
				product-id="001"
				product-name="simvastatin abc pharma 20 mg, op98"
				price="99,99 €"
				action-text="You sure?"
			/>
		</div>

		<div class="pb-2 border-b border-redLightest">
			<div class="flex justify-between items-center">
				<p class="p-normal text-blackLight">Total before deduction</p>
				<p class="p-normal font-medium">99,99 €</p>
			</div>
			<div class="flex justify-between items-center">
				<p class="p-normal text-blackLight">Reimbursement</p>
				<p class="p-normal font-medium mt-2">-9,99 €</p>
			</div>
		</div>

		<div class="flex justify-between items-center mt-2">
			<p class="p-normal">Amount payable</p>
			<p class="p-normal font-medium mt-2">90,00 €</p>
		</div>

		<nuxt-link to="/checkout" class="main-button w-full mt-6">PAY</nuxt-link>
	</div>
</template>

<script>
import { defineComponent } from 'vue'
import CloseIcon from '../Icons/CloseIcon.vue'
import NavBasketProduct from '../NavBasketProduct.vue'

export default defineComponent({
	components: { CloseIcon, NavBasketProduct },
	props: {},
})
</script>

<style>
</style>