<template>
	<div>

		<div :class="'flex items-center ' + className">
			<button @click="$emit('toggle')">
				<selected-check-box-icon v-if="selected" :size="size"></selected-check-box-icon>
				<empty-check-box v-else :size="size"></empty-check-box>
			</button>
			<div v-if="title || subtitle" class="ml-2">
				<p class="p-normal font-medium">{{ title }}</p>
				<p v-if="subtitle" class="p-small text-blackLightest font-normal">{{
					subtitle
				}}</p>
			</div>
		</div>
		<p v-if="error" class="p-small text-redBold">{{ error}}</p>
	</div>
</template>

<script>
import { defineComponent } from "vue"
import EmptyCheckBox from '../Icons/EmptyCheckBox.vue'
import SelectedCheckBoxIcon from '../Icons/SelectedCheckBoxIcon.vue'
export default defineComponent({
	components: { EmptyCheckBox, SelectedCheckBoxIcon },
	props: {
		selected: Boolean,
		title: {
			type: String,
			default: '',
		},
		subtitle: {
			type: String,
			default: '',
		},
		className: {
			type: String,
			default: '',
		},
		size: {
			type: String,
			default: 'small',
		},
		error: String,
	},
	emits: ['on-press'],
})
</script>

<style>

</style>