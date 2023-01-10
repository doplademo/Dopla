<template>
	<div>
		<div class="flex justify-between items-center px-4 ">
			<p class="p-large font-semibold">
				{{ title }}
			</p>
			<button @click="toggle()">
				<icon-minus v-if="show" :color="Colors.redLightest" />
				<icon-plus v-else :color="Colors.redLightest" />
			</button>
		</div>
		<div v-if="show" class="pl-4 mt-2">
			<slot />
		</div>
		<hr class="bg-redLightest mt-4">
	</div>
</template>

<script>
import IconMinus from './Icons/IconMinus.vue'
import IconPlus from './Icons/IconPlus.vue'
import { Colors } from '~/utils/Colors'
export default {
	components: { IconMinus, IconPlus },
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
