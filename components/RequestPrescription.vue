<script lang="ts">
import { defineComponent, PropType } from 'vue'
import PrescriptionCheckout from './PrescriptionCheckout.vue'
import RadioField from './RadioField.vue'
import ArrowLeftIcon from './Icons/ArrowLeftIcon.vue'
import { PrescribedProduct } from '~/types/user'
export default defineComponent({
	components: { PrescriptionCheckout, RadioField, ArrowLeftIcon },
	props: {
		isDesktop: {
			type: Boolean,
		},
		selectedProducts: {
			type: Array as PropType<PrescribedProduct[]>,
			required: true,
		},
		needsMedicalAssistance: {
			type: String,
			required: true,
		},
	},
	emits: [
		'request-prescription',
		'on-back',
		'remove-product',
		'medical-contact',
	],
})
</script>

<template>
	<div
		class="bg-greenHover pt-24 lg:bg-white lg:border lg:border-blackLightest lg:w-full lg:max-w-[400px] lg:pt-4"
	>
		<div class="ml-4 mb-4 lg:hidden">
			<button class="flex items-center" @click="$emit('on-back')">
				<arrow-left-icon :size="16" />
				<p class="p-x-small uppercase font-semibold ml-2">Go back</p>
			</button>
		</div>
		<section
			class="bg-white rounded-md border border-blackLight shadow-md shadow-blackLight p-4 mx-3 lg:border-none lg:shadow-none"
		>
			<h4 class="heading-four font-semibold bg-redLightest rounded p-2 mb-2">
				Your prescriptions
			</h4>
			<p class="p-normal mb-4">
				Alla näet tilauksesi, joka lähetetään farmaseutin käsittelyyn.
			</p>

			<prescription-checkout
				v-for="product in selectedProducts"
				:id="product.id"
				:key="product.id"
				:name="product.medicine_name"
				:instructions="product.prescription_dosage_instruction"
				@remove="$emit('remove-product', product.id)"
			/>

			<p class="p-normal font-medium mt-4">
				{{ selectedProducts.length }} product{{
					selectedProducts.length === 1 ? '' : 's'
				}}
			</p>
			<p class="p-normal text-blackLight mt-2">
				Farmaseutti laskee tilauksen lopullisen hinnan.
			</p>
		</section>

		<section class="bg-white mt-6 px-4 pt-6 pb-16 lg:mt-3">
			<h4 class="heading-four">Medical guidance</h4>
			<div class="flex flex-col w-full mt-6">
				<radio-field
					title="I want medical assistance through telephone"
					:selected="needsMedicalAssistance === '1'"
					@select="$emit('medical-contact', '1')"
				/>
				<radio-field
					class="mt-2"
					title="I don't need medical assistance"
					:selected="needsMedicalAssistance === '0'"
					@select="$emit('medical-contact', '0')"
				/>
			</div>

			<button
				v-if="needsMedicalAssistance !== '-1'"
				class="main-button w-full mt-4 uppercase"
				@click="$emit('request-prescription')"
			>
				Send to pharmacy
			</button>
		</section>
	</div>
</template>


<style>
</style>