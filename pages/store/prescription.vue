<template>
	<main class="flex flex-col lg:pb-24">
		<greeting-section :name="name" />
		<div class="lg:self-center lg:w-full lg:max-w-screen-xl">
			<div class="lg:flex lg:items-start lg:-mt-32 lg:gap-16">
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
										Alla näet apteekista tilattavissa olevat reseptilääkkeet.
										Kun olet valinnut toimitettavat tuotteet, farmaseutti
										tarkistaa tilauksen ja Kela-korvauksen määrän.
									</p>
								</div>
							</template>
						</pending-prescription>
					</section>
					<section class="px-4 my-6">
						<h4 class="heading-four font-semibold">Available prescriptions</h4>
						<p class="p-normal mt-4 font-medium">
							Painamalla lääkkeen nimeä pääset tarkastelemaan lääkkeen tietoja,
							valitsemaan edullisemman lääkevalmisteen tai muuttamaan
							pakkauskokoa.
						</p>
						<p class="p-normal mt-4">
							Lisäät lääkkeen apteekin farmaseutin käsittelyyn painamalla sen
							vieressä olevan boksin vihreäksi.
						</p>
					</section>
					<section class="px-4 pb-12">
						<prescription-item
							v-for="prescription in prescriptions"
							:name="prescription.name"
							:id="prescription.id"
							:selected="prescription.selected"
							:key="prescription.id"
							@toggle="onSelect"
							@show-info="onShowInfo"
						/>
						<p class="p-normal mt-6">
							Painamalla Lähetä-painiketta, tilaus siirtyy Farmaseutin
							käsiteltäväksi. Farmaseutti tarkistaa lääkkeistä saatavan
							Kela-korvauksen määrän.
						</p>
						<nuxt-link
							
							class="main-button uppercase w-full mt-8 lg:hidden"
							to="/store/request-prescription"
						>
							<span class="mr-2">seuraava</span>
							<arrow-right-icon />
						</nuxt-link>
					</section>
					<section class="px-4 py-6 bg-greenHover">
						<h4 class="heading-four mb-4">Other prescriptions</h4>
						<p class="p-normal">
							Here’s other prescriptive drugs that you have already orderer
							inside ordering allowance for which to get reimbursement. These
							prescriptions will become available for reimbursement once a
							certain period has lapped.
						</p>
					</section>
					<section class="px-4 pb-12 bg-greenHover">
						<prescription-item
							v-for="prescription in prescriptionsOther"
							:id="prescription.id"
							:key="prescription.id"
							:name="prescription.name"
							:selected="prescription.selected"
							@toggle="onSelectOther"
						/>
					</section>
					<modal-container v-if="showModal">
						<info-modal
							:product="infoProduct"
							@on-option-select="onChangeOption"
							@add="add"
							@subtract="subtract"
							@close="closeModal"
						/>
					</modal-container>
				</div>
				<request-prescription v-if="showOrder" />
				<no-data v-else />
			</div>
		</div>
	</main>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { prescribedProducts } from '~/dummy/dummyproducts'
import MainButton from '~/components/Button/MainButton.vue'
import PendingPrescription from '~/components/PendingPrescription.vue'
import GreetingSection from '~/components/StoreHome/GreetingSection.vue'
import PrescriptionItem from '~/components/PrescriptionItem.vue'
import ModalContainer from '~/components/ModalContainer.vue'
import InfoModal from '~/components/InfoModal.vue'
import ArrowRightIcon from '~/components/Icons/ArrowRightIcon.vue'
import NoData from '~/components/NoData.vue'
import RequestPrescription from '~/components/RequestPrescription.vue'
export default defineComponent({
	components: {
		GreetingSection,
		PendingPrescription,
		MainButton,
		PrescriptionItem,
		ModalContainer,
		InfoModal,
		ArrowRightIcon,
		NoData,
		RequestPrescription,
	},
	setup() {
		const name = ref('Ulla')
		const prescriptions = ref([...prescribedProducts])
		const prescriptionsOther = ref([...prescribedProducts])
		const infoProduct = ref(prescribedProducts[0])
		const showModal = ref(false)
		const showOrder = ref(false)
		const orderTab = ref(false)

		const updateProduct = (value, field, index) => {
			prescriptions.value[index][field] = value
		}

		const onSelect = (id) => {
			const index = prescriptions.value.findIndex((item) => item.id === id)
			prescriptions.value[index].selected = !prescriptions.value[index].selected
			showOrder.value = true
		}
		const onSelectOther = (id) => {
			const index = prescriptions.value.findIndex((item) => item.id === id)
			prescriptions.value[index].selected = !prescriptions.value[index].selected
		}

		const onChangeOption = (id) => {
			infoProduct.value.selectedOption = id
		}

		const add = () => {
			infoProduct.value.amount++
		}
		const subtract = () => {
			infoProduct.value.amount--
		}

		const onShowInfo = (id) => {
			infoProduct.value = prescribedProducts.find(
				(product) => product.id === id
			)
			showModal.value = true
		}

		const closeModal = () => {
			showModal.value = false
		}

		return {
			name,
			prescriptions,
			prescriptionsOther,
			infoProduct,
			showModal,
			showOrder,
			orderTab,
			updateProduct,
			add,
			subtract,
			onSelect,
			onSelectOther,
			onShowInfo,
			onChangeOption,
			closeModal,
		}
	},
})
</script>

<style>
</style>