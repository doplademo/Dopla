<template>
	<div>
		<button class="flex justify-between items-center text-start w-full px-4 lg:py-4" @click="toggle()">
			<p class="p-large font-semibold">
				{{ title }}
			</p>
			<div>
				<icon-minus v-if="show" :color="iconColor || Colors.redLightest" />
				<icon-plus v-else :color="iconColor || Colors.redLightest" />
			</div>
		</button>
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
		iconColor: String,

	},
	data() {
		return { Colors, show: false }
	},
	methods: {
		toggle() {
			this.show = !this.show
		},
	},
}
</script>

<style>

</style>
