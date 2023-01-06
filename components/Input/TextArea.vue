<template>
	<textarea :class="'text-blackBold px-2 py-1 rounded outline outline-1 outline-blackLight  ' + className" :placeholder="placeholder"
		:cols="cols" :rows="rows" :value="value" @change="textChange($event)"></textarea>
</template>

<script>
import { defineComponent } from "vue"

export default defineComponent({
	props: {
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
		},
		className: {
			type: String,
			default: '',
		},
		rows: {
			type: Number,
			default: 1,
		},
		cols: {
			type: Number,
			default: 1,
		},
	},
	emits: ['on-change'],
	methods: {
		textChange(event) {
			this.$emit('on-change', event.target.value, this.$props.field)
		},
	},
})
</script>

<style>

</style>
