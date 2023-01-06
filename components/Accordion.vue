<template>
	<div>
		<div class="flex justify-between items-center px-4 ">
			<paragraph-large class-name="font-semibold">
				{{ title }}
			</paragraph-large>
			<button @click="toggle()">
				<plus-icon :size="30" :color="Colors.redLightest" />
			</button>
		</div>
		<div v-if="show">
			<slot />
		</div>
		<hr class="bg-redLightest mt-4">
	</div>
</template>

<script>
import PlusIcon from './Icons/PlusIcon.vue'
import ParagraphLarge from './Paragraph/ParagraphLarge.vue'
import { Colors } from '~/utils/Colors'
export default {
	components: { ParagraphLarge, PlusIcon },
	props: {
		title: {
			type: String,
			required: true,
		},
	},
	data() {
		return { Colors, show: false }
	},
	methods: {
		toggle() {
			console.log(this.show)
			this.show = !this.show
		},
	},
}
</script>

<style>

</style>
