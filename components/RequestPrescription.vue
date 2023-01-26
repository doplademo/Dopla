<script lang="ts">
import { defineComponent, ref } from 'vue'
import PrescriptionCheckout from './PrescriptionCheckout.vue'
import RadioField from './RadioField.vue'
import ArrowLeftIcon from './Icons/ArrowLeftIcon.vue'
import { prescribedProducts } from '~/dummy/dummyproducts'
export default defineComponent({
	components: { PrescriptionCheckout, RadioField, ArrowLeftIcon },
	props: {
		isDesktop: {
			type: Boolean,
		},
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
	<div
		class="
			bg-greenHover
			pt-24
			lg:bg-white
			lg:border
			lg:border-blackLightest
			lg:w-full
			lg:max-w-[400px]
			lg:pt-4
		"
	>
		<div class="ml-4 mb-4 lg:hidden">
			<button class="flex items-center" @click="$emit('on-back')">
				<arrow-left-icon :size="16" />
				<p class="p-x-small uppercase font-semibold ml-2">Go back</p>
			</button>
		</div>
		<section
			class="
				bg-white
				rounded-md
				border border-blackLight
				shadow-md shadow-blackLight
				p-4
				mx-3
				lg:border-none lg:shadow-none
			"
		>
			<h4 class="heading-four font-semibold bg-redLightest rounded p-2 mb-2">
				Your prescriptions
			</h4>
			<p class="p-normal mb-4">
				Alla näet tilauksesi, joka lähetetään farmaseutin käsittelyyn.
			</p>

			<prescription-checkout
				v-for="product in products"
				:id="product.id"
				:key="product.id"
				:name="product.name"
				@remove="remove"
			/>

			<p class="p-normal font-medium mt-4">
				{{ products.length }} product{{ products.length === 1 ? '' : 's' }}
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
					:selected="selectedHelp === 1"
					@select="setSelected(1)"
				/>
				<radio-field
					title="I don't need medical assistance"
					:selected="selectedHelp === 2"
					@select="setSelected(2)"
					class="mt-2"
				/>
			</div>

			<button class="main-button w-full mt-4 uppercase">
				Send to pharmacy
			</button>
		</section>
	</div>
</template>


<style>
</style>