<template>
	<form class="flex flex-col gap-2" @submit.prevent="onSubmit">
		<text-input
			id="recipientName"
			label="Name of recipient*"
			:value="addressInfo.recipientName"
			field="recipientName"
			type="text"
			placeholder="Name of recipient"
			@change="onChangeText"
		/>
		<text-input
			id="deliveryMethodName"
			label="Name your delivery method"
			:value="addressInfo.deliveryMethodName"
			field="deliveryMethodName"
			type="text"
			placeholder="Delivery method name"
			@change="onChangeText"
		/>
		<text-input
			id="streetAddress"
			type="text"
			label="Street address*"
			:value="addressInfo.streetAddress"
			field="streetAddress"
			placeholder="Street address"
			@change="onChangeText"
		/>
		<div class="flex justify-between gap-2">
			<text-input
				id="zipCode"
				type="text"
				class-name="w-5/12"
				label="Zip code*"
				:value="addressInfo.zipCode"
				field="zipCode"
				placeholder="Zip code"
				@change="onChangeText"
			/>
			<text-input
				id="city"
				class-name="w-5/12"
				label="City*"
				:value="addressInfo.city"
				field="city"
				type="text"
				placeholder="City"
				@change="onChangeText"
			/>
		</div>

		<div class="flex flex-col gap-2 mt-4">
			<radio-field
				title="Home delivery"
				description="2,90 - 4,90 E"
				hide-border
				:selected="addressInfo.deliveryMethod === 'home'"
				@select="$emit('field-change', 'deliveryMethod', 'home')"
			/>
			<radio-field
				title="Pick up from a pick up point"
				description="1,90 E"
				hide-border
				:selected="addressInfo.deliveryMethod === 'pickup'"
				@select="$emit('field-change', 'deliveryMethod', 'pickup')"
			/>
			<select-input
				v-if="addressInfo.deliveryMethod === 'pickup'"
				:placeholder="
					enteredZipCode ? 'Select pick up point' : 'Enter zip code first'
				"
				:get-value="getSelectValue"
				:get-label="getSelectLabel"
				:options="locations"
			/>
		</div>

		<div v-if="fromProfile" class="flex self-end mt-2">
			<button class="button-no-bg uppercase py-1 px-1">cancel</button>
			<input
				type="submit"
				class="main-button uppercase py-1 px-1"
				value="save"
			/>
		</div>
		<input v-else type="submit" class="main-button" value="SAVE" />
	</form>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import TextInput from './Input/TextInput.vue'
import RadioField from './RadioField.vue'
import SelectInput from './Input/SelectInput.vue'
import { DeliveryAddress, PostiAddress } from '~/types/user'
export default defineComponent({
	components: { TextInput, RadioField, SelectInput },
	props: {
		addressInfo: { type: Object as PropType<DeliveryAddress>, required: true },
		locations: { type: Array as PropType<PostiAddress[]>, required: true },
		fromProfile: Boolean,
	},
	emits: ['field-change', 'submit'],
	computed: {
		enteredZipCode() {
			return this.addressInfo.zipCode.length === 5
		},
	},
	methods: {
		onChangeText(value: string, field: string) {
			this.$emit('field-change', field, value)
		},
		onSubmit() {
			this.$emit('submit')
		},
		getSelectValue(address: PostiAddress) {
			return address.id
		},
		getSelectLabel(address: PostiAddress) {
			return `${address.name}, ${address.address} ${address.postcode}, ${address.city}`
		},
	},
})
</script>

<style>
</style>