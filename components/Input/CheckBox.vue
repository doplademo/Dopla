<template>
	<div>

		<div :class="'flex items-center ' + className">
			<button @click="$emit('toggle')">
				<selected-check-box-icon v-if="selected" :size="size"></selected-check-box-icon>
				<empty-check-box v-else :size="size"></empty-check-box>
			</button>
			<div v-if="title || subtitle" class="ml-2">
				<paragraph-normal class="font-medium">{{ title }}</paragraph-normal>
				<p-sm v-if="subtitle" class="text-blackLightest font-normal">{{
						subtitle
				}}</p-sm>
			</div>
		</div>
		<p-sm v-if="error" class="text-redBold">{{ error}}</p-sm>
	</div>
</template>

<script>
import { defineComponent } from "vue"
import EmptyCheckBox from '../Icons/EmptyCheckBox.vue'
import SelectedCheckBoxIcon from '../Icons/SelectedCheckBoxIcon.vue'
import ParagraphNormal from '../Paragraph/ParagraphNormal.vue'
import PSm from '../Paragraph/PSm.vue'
export default defineComponent({
	components: { EmptyCheckBox, SelectedCheckBoxIcon, PSm, ParagraphNormal },
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