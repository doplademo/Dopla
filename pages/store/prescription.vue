<template>
	<main>
	  <greeting-section :name="name" />
	  <section class="px-4">
		<pending-prescription title="Your prescriptions">
		  <main-button title="update" upper />
		  <template #body>
			<p-sm class-name="text-white font-medium">
			  <span> Prescriptions updated 25.02.2022 klo 13:59 </span>
			  <p-sm class-name="text-blackLightest"
				>You may request next update 25.02.2022 klo 15:59</p-sm
			  >
			  <br />
			  <p-sm
				>Alla näet apteekista tilattavissa olevat reseptilääkkeet. Kun
				olet valinnut toimitettavat tuotteet, farmaseutti tarkistaa
				tilauksen ja Kela-korvauksen määrän.</p-sm
			  >
			</p-sm>
		  </template>
		</pending-prescription>
	  </section>
	  <section class="px-4 my-6">
		<heading-four class-name="font-semibold"
		  >Available prescriptions</heading-four
		>
		<paragraph-normal class-name="mt-4 font-medium"
		  >Painamalla lääkkeen nimeä pääset tarkastelemaan lääkkeen tietoja,
		  valitsemaan edullisemman lääkevalmisteen tai muuttamaan pakkauskokoa.
		</paragraph-normal>
		<paragraph-normal class-name="mt-4"
		  >Lisäät lääkkeen apteekin farmaseutin käsittelyyn painamalla sen
		  vieressä olevan boksin vihreäksi.
		</paragraph-normal>
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
		<paragraph-normal class-name="mt-6"
		  >Painamalla Lähetä-painiketta, tilaus siirtyy Farmaseutin
		  käsiteltäväksi. Farmaseutti tarkistaa lääkkeistä saatavan
		  Kela-korvauksen määrän.</paragraph-normal
		>
		<main-button title="seuraava" upper class-name="w-full mt-6" />
	  </section>
	  <section class="px-4 py-6 bg-greenHover">
		<heading-four class-name="mb-4"> Other prescriptions </heading-four>
		<paragraph-normal
		  >Here’s other prescriptive drugs that you have already orderer inside
		  ordering allowance for which to get reimbursement. These prescriptions
		  will become available for reimbursement once a certain period has
		  lapped.</paragraph-normal
		>
	  </section>
	  <section class="px-4 pb-12 bg-greenHover">
		<prescription-item
		  v-for="prescription in prescriptionsOther"
		  :name="prescription.name"
		  :id="prescription.id"
		  :selected="prescription.selected"
		  :key="prescription.id"
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
	</main>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from "vue";
  import { prescribedProducts, PrescriptionType } from "~/dummy/dummyproducts";
  import MainButton from "~/components/Button/MainButton.vue";
  import HeadingFour from "~/components/Heading/HeadingFour.vue";
  import ParagraphNormal from "~/components/Paragraph/ParagraphNormal.vue";
  import PSm from "~/components/Paragraph/PSm.vue";
  import PendingPrescription from "~/components/PendingPrescription.vue";
  import GreetingSection from "~/components/StoreHome/GreetingSection.vue";
  import PrescriptionItem from "~/components/PrescriptionItem.vue";
  import ModalContainer from "~/components/ModalContainer.vue";
  import InfoModal from "~/components/InfoModal.vue";
  export default defineComponent({
	components: {
	  GreetingSection,
	  PendingPrescription,
	  MainButton,
	  PSm,
	  HeadingFour,
	  ParagraphNormal,
	  PrescriptionItem,
	  ModalContainer,
	  InfoModal,
	},
	setup() {
	  const name = ref("Ulla");
	  const prescriptions = ref<PrescriptionType[]>([...prescribedProducts]);
	  const prescriptionsOther = ref<PrescriptionType[]>([...prescribedProducts]);
	  const infoProduct = ref<PrescriptionType>(prescribedProducts[0]);
	  const showModal = ref(false);
  
	  const updateProduct = (value: any, field: string, index: number) => {
		prescriptions.value[index][field] = value;
	  };
  
	  const onSelect = (id: number) => {
		const index = prescriptions.value.findIndex((item) => item.id === id);
		prescriptions.value[index].selected =
		  !prescriptions.value[index].selected;
	  };
	  const onSelectOther = (id: number) => {
		const index = prescriptions.value.findIndex((item) => item.id === id);
		prescriptions.value[index].selected =
		  !prescriptions.value[index].selected;
	  };
  
	  const onChangeOption = (id: number) => {
		infoProduct.value.selectedOption = id;
	  };
  
	  const add = () => {
		infoProduct.value.amount++;
	  };
	  const subtract = () => {
		infoProduct.value.amount--;
	  };
  
	  const onShowInfo = (id: number) => {
		infoProduct.value = prescribedProducts.find(
		  (product) => product.id === id
		)!;
		showModal.value = true;
	  };
  
	  const closeModal = () => {
		showModal.value = false;
	  };
  
	  return {
		name,
		prescriptions,
		prescriptionsOther,
		infoProduct,
		showModal,
		updateProduct,
		add,
		subtract,
		onSelect,
		onSelectOther,
		onShowInfo,
		onChangeOption,
		closeModal,
	  };
	},
  });
  </script>
  
  <style>
  </style>