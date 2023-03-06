<template>
	<select
		:class="`p-4 border border-blackLightest rounded-md max-w-lg bg-white ${className}`"
	>
		<option>{{ placeholder }}</option>
		<SelectOption
			v-for="option in options"
			:key="getValue(option)"
			:value="option"
			:get-label="getLabel"
			:get-value="getValue"
		/>
	</select>
</template>

<script lang='ts'>
import { defineComponent, PropType } from 'vue'
import SelectOption from './SelectOption.vue'

export default defineComponent({
	props: {
		placeholder: {
			type: String,
			default: '',
		},
		getValue: {
			type: Function,
			required: true,
		},
		field: {
			type: String,
			default: '',
		},
		getLabel: {
			type: Function,
			required: true,
		},
		options: {
			type: Array as PropType<any[]>,
			required: true,
		},
		className: {
			type: String,
			default: '',
		},
	},
	components: { SelectOption },
})
</script>

<style>
</style>