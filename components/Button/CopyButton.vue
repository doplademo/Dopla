<template>
	<button class="uppercase text-sm flex gap-1 font-semibold items-center" @click="copyText">
		<span>Copy</span>
		<icon-copy />
	</button>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import IconCopy from '../Icons/IconCopy.vue'

export default defineComponent({
	components: { IconCopy },
	props: {
		copy: {
			type: String,
			required: true,
		},
	},

	setup(props) {
		async function copyText() {
			if (props.copy) {
				await navigator.clipboard.writeText(props.copy)
			}
		}
		return {
			copyText,
		}
	},
})
</script>

<style>
</style>