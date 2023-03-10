<template>
	<div>
		<section class="px-4">
			<pending-prescription title="Your prescriptions">
				<main-button title="update" upper />
				<template #body>
					<div class="p-small text-white font-medium">
						<span> Prescriptions updated 25.02.2022 klo 13:59 </span>
						<p class="p-small text-blackLightest">
							You may request next update 25.02.2022 klo 15:59
						</p>
						<br />
						<p class="p-small text-white">
							Alla näet apteekista tilattavissa olevat reseptilääkkeet. Kun olet
							valinnut toimitettavat tuotteet, farmaseutti tarkistaa tilauksen
							ja Kela-korvauksen määrän.
						</p>
					</div>
				</template>
			</pending-prescription>
		</section>
		<section class="px-4 my-6">
			<h4 class="heading-four font-semibold">Available prescriptions</h4>
			<p class="p-normal mt-4 font-medium">
				Painamalla lääkkeen nimeä pääset tarkastelemaan lääkkeen tietoja,
				valitsemaan edullisemman lääkevalmisteen tai muuttamaan pakkauskokoa.
			</p>
			<p class="p-normal mt-4">
				Lisäät lääkkeen apteekin farmaseutin käsittelyyn painamalla sen vieressä
				olevan boksin vihreäksi.
			</p>
		</section>
		<section class="px-4 pb-12">
			<prescription-item
				v-for="product in prescribedProducts"
				:id="product.id"
				:key="product.id"
				:name="product.medicine_name"
				:instructions="product.prescription_dosage_instruction"
				:selected="selectedProductIds.includes(product.id)"
				@toggle="onMark(product)"
				@show-info="showProduct(product)"
			/>
			<p class="p-normal mt-6">
				Painamalla Lähetä-painiketta, tilaus siirtyy Farmaseutin käsiteltäväksi.
				Farmaseutti tarkistaa lääkkeistä saatavan Kela-korvauksen määrän.
			</p>
			<button
				class="main-button uppercase w-full mt-8 lg:hidden"
				@click="$emit('on-show')"
			>
				<span class="mr-2">seuraava</span>
				<arrow-right-icon />
			</button>
		</section>
		<section class="px-4 py-6 bg-greenHover">
			<h4 class="heading-four mb-4">Other prescriptions</h4>
			<p class="p-normal">
				Here’s other prescriptive drugs that you have already orderer inside
				ordering allowance for which to get reimbursement. These prescriptions
				will become available for reimbursement once a certain period has
				lapped.
			</p>
		</section>

		<modal-container v-if="showModal">
			<info-modal
				:product="selectedProduct"
				:product-additions="productAdditions"
				@on-substitute-select="onSubstitute"
				@add="addAmount"
				@subtract="subtractAmount"
				@add-prescription="
					(_) => {
						$emit('add-prescription', selectedProduct?.id)
						showModal = false
					}
				"
				@close="showModal = false"
			/>
		</modal-container>
	</div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import MainButton from '~/components/Button/MainButton.vue'
import PendingPrescription from '~/components/PendingPrescription.vue'
import PrescriptionItem from '~/components/PrescriptionItem.vue'
import ModalContainer from '~/components/ModalContainer.vue'
import InfoModal from '~/components/InfoModal.vue'
import ArrowRightIcon from '~/components/Icons/ArrowRightIcon.vue'
import { PrescribedProduct, PrescribedProductAddition } from '~/types/user'
export default defineComponent({
	components: {
		PendingPrescription,
		MainButton,
		PrescriptionItem,
		ModalContainer,
		InfoModal,
		ArrowRightIcon,
	},
	props: {
		prescribedProducts: {
			type: Array as PropType<PrescribedProduct[]>,
			default: () => [],
		},
		selectedProductIds: {
			type: Array as PropType<string[]>,
			required: true,
		},
		productAdditions: {
			type: Map as PropType<Map<any, PrescribedProductAddition>>,
			required: true,
		},
	},
	emits: ['remove-prescription', 'on-show', 'add-prescription'],

	data() {
		return {
			showModal: false,
			showOrder: false,
			selectedProduct: null as PrescribedProduct | null,
		}
	},

	methods: {
		showProduct(product: PrescribedProduct) {
			this.selectedProduct = product
			this.showModal = true
		},
		addAmount(amount: number) {
			const additionChange = this.productAdditions.get(this.selectedProduct?.id)
			if (additionChange) {
				additionChange.amount = amount
			}
		},
		subtractAmount(amount: number) {
			const additionChange = this.productAdditions.get(this.selectedProduct?.id)
			if (additionChange) {
				additionChange.amount = amount
			}
		},
		onChangeOption(productId: string, substituteId: string) {
			const additionChange = this.productAdditions.get(productId)
			if (additionChange) {
				additionChange.substituteId = substituteId
			}
		},
		onSubstitute(sku: string) {
			const additionChange = this.productAdditions.get(this.selectedProduct?.id)
			if (additionChange) {
				additionChange.substituteId = sku
			}
		},
		onMark(product: PrescribedProduct) {
			if (this.selectedProductIds.includes(product.id)) {
				this.$emit('remove-prescription', product.id)
			} else {
				this.showProduct(product)
			}
		},
	},
})
</script>

<style>
</style>