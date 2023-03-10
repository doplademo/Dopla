<template>
	<div :class="'flex flex-col ' + className">
		<label
			v-if="label"
			class="text-xs font-semibold mb-1 lg:text-[13px]"
			:for="id"
			>{{ label }}</label
		>
		<input
			:id="id"
			:class="`text-blackBold px-2 py-1 border rounded-sm lg:text-[17px] lg:py-2.5 lg:px-2 lg:rounded-md focus:outline-1 focus:outline-greenBold ${
				error ? 'border-redBold' : 'border-blackLightest'
			} ${disabled ? 'opacity-80' : ''}`"
			:placeholder="placeholder"
			:value="value"
			:type="type"
			:disabled="disabled"
			@input="textChange"
		/>
		<p v-if="error" class="text-redBold text-xs mt-1">{{ error }}</p>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	props: {
		type: {
			type: String,
			default: 'text',
		},
		value: {
			type: String,
			required: true,
		},
		placeholder: {
			type: String,
			default: '',
		},
		field: {
			type: String,
			default: '',
		},
		className: {
			type: String,
			default: '',
		},
		id: {
			type: String,
			default: '',
		},
		label: {
			type: String,
			default: '',
		},
		error: {
			type: String,
			default: '',
		},
		disabled: {
			type: Boolean,
			default: false,
		},
	},
	emits: ['change'],
	methods: {
		textChange(event: any) {
			this.$emit('change', event.target.value, this.$props.field)
		},
	},
})
</script>

<style></style>
