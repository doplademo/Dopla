<template>
	<div :class="'flex flex-col ' + className">
		<label v-if="label" class="text-xs font-semibold mb-1" :for="id">{{
			label
		}}</label>
		<input
			:id="id"
			:class="`text-blackBold px-2 py-1 border rounded-sm  ${
				error ? 'border-redBold' : 'border-blackLightest'
			}`"
			:placeholder="placeholder"
			:value="value"
			:type="type"
			@change="textChange($event)"
		/>
		<p v-if="error" class="text-redBold text-xs mt-1" >{{ error }}</p>
	</div>
</template>

<script>
export default {
	components: {},
	props: {
		type: {
			type: String,
			required: true,
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
			required: true,
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
	},
	emits: 'on-change',
	methods: {
		textChange(event) {
			this.$emit('on-change', event.target.value, this.$props.field)
		},
	},
}
</script>

<style></style>
