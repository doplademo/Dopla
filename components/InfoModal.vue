<template>
	<div
		v-if="product"
		class="flex flex-col bg-white rounded-md overflow-y-scroll mt-12 mx-2 p-4 w-full max-w-[530px] self-center"
	>
		<!-- Header -->
		<div class="flex justify-between w-full">
			<p class="text-sm font-medium bg-greenBold p-2 py-1">INFO</p>
			<button class="bg-redLightest px-2 py-1" @click="$emit('close')">
				<close-icon size="small" />
			</button>
		</div>
		<h4
			class="heading-four font-semibold bg-redLightest rounded-md p-1 mt-5 lg:p-4"
		>
			{{ product.medicine_name }}
		</h4>

		<p class="p-small text-blackLight mt-4 mb-1">Product details</p>
		<div class="border border-redLightest rounded-md px-2.5 py-1.5">
			<p class="p-small text-blackMedium my-1">
				{{ product.prescription_dosage_instruction }}
			</p>
		</div>

		<div v-if="true" class="mt-5">
			<p class="p-normal inline-block font-semibold">
				Medicine exchange program
			</p>
			<button class="inline-block bg-redLightest font-semibold px-2 mr-2">
				i
			</button>
		</div>

		<dropdown-picker
			v-if="true"
			:selected-substitute="selectedSubstitute"
			:substitutes="substitutes"
			@on-select-option="onChangeOption"
		/>
		<div class="mt-2">
			<p class="p-small inline-block text-blackLight">
				The product has a price guarantee
			</p>
			<button
				class="inline-block bg-redLightest font-semibold text-xs px-2 mr-2"
			>
				i
			</button>
		</div>

		<div class="flex justify-between w-full mt-8">
			<amout-counter :count="amount" @add="add" @subtract="subtract" />
			<button
				class="main-button uppercase w-full ml-2"
				@click="$emit('add-prescription')"
			>
				Lisää tilaukseen
			</button>
		</div>

		<p class="p-x-small text-end text-blackMedium font-medium mt-4">
			Apteekin farmaseutti voi laskea lopullisen hinnan Kela-korvauksineen kun
			olet vahvistanut ehdotuksen. Näet lopullisen summan ennen maksamista.
			Ehdotetuilla tuotteilla on edullisimman tuotteen takuu.
		</p>
	</div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import CloseIcon from './Icons/CloseIcon.vue'
import DropdownPicker from './DropdownPicker.vue'
import AmoutCounter from './AmoutCounter.vue'
import MainButtonPressable from './Button/MainButtonPressable.vue'
import {
	KeyValueSubstitute,
	PrescribedProduct,
	PrescribedProductAddition,
	Substitute,
} from '~/types/user'
import { ALTERNATIVES_PATH } from '~/utils/api/urls'

export default defineComponent({
	components: {
		CloseIcon,
		DropdownPicker,
		AmoutCounter,
		MainButtonPressable,
	},
	props: {
		product: {
			type: Object as PropType<PrescribedProduct | null>,
			required: true,
		},
		productAdditions: {
			type: Map as PropType<Map<any, PrescribedProductAddition>>,
			required: true,
		},
	},

	emits: [
		'on-substitute-select',
		'add',
		'subtract',
		'close',
		'add-prescription',
	],
	data() {
		return {
			substitutes: new Map() as Map<string, Substitute>,
			selectedSubstitute: null as Substitute | null,
			amount: this.productAdditions.get(this.product!.id)?.amount || 1,
		}
	},
	async mounted() {
		const substitutes = (await this.$axios.$get(
			ALTERNATIVES_PATH + this.product!.prescription_oid
		)) as KeyValueSubstitute

		const substituteKeys = Object.keys(substitutes)

		substituteKeys.forEach((key) => {
			const substitute = substitutes[key]
			this.substitutes.set(substitute.sku, substitute)
		})

		const selectedSubstituteId = this.productAdditions.get(
			this.product!.id
		)?.substituteId

		if (selectedSubstituteId) {
			this.selectedSubstitute = this.substitutes.get(selectedSubstituteId)!
		} else {
			this.selectedSubstitute = substitutes.doctor_prescribed
		}

		this.selectedSubstitute =
			substitutes.doctor_prescribed || substitutes[substituteKeys[0]]
		const productAdditions = this.productAdditions.get(this.product!.id)
		productAdditions!.substituteId = this.selectedSubstitute.sku
		this.amount = productAdditions?.amount || 1
	},

	methods: {
		onChangeOption(sku: string) {
			this.selectedSubstitute = this.substitutes.get(sku)!
			this.$emit('on-substitute-select', sku)
		},
		add() {
			this.amount++
			this.$emit('add', this.amount)
		},
		subtract() {
			if (this.amount > 1) {
				this.amount--
				this.$emit('subtract', this.amount)
			}
		},
	},
})
</script>

<style>
</style>