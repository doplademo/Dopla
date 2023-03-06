<template>
	<option :value="optionValue">{{ label }}</option>
</template>

<script lang='ts'>
import { defineComponent, PropType } from 'vue'

export default defineComponent({
	props: {
		value: {
			type: Object as PropType<any>,
			required: true,
		},
		getLabel: {
			type: Function,
			required: true,
		},
		getValue: {
			type: Function,
			required: true,
		},
	},
	computed: {
		label() {
			return this.getLabel(this.value)
		},
		optionValue() {
			return this.getValue(this.value)
		},
	},
})
</script>

<style>
</style>