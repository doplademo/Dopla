<template>
	<div>
		<div
			:class="`flex items-center border rounded relative ${
				showOptions ? 'border-greenBold' : 'border-blackLightest'
			}`"
			@click="showOptions = !showOptions"
		>
			<dropdown-info
				v-if="selectedSubstitute"
				:name="selectedSubstitute.name"
				:description="selectedSubstitute.price"
			/>
			<div id="arrow" :class="`mx-2 ${showOptions ? 'rotate-180' : ''}`">
				<arrow-down size="small" />
			</div>

			<div
				v-if="showOptions && selectedSubstitute"
				class="mt-2 border rounded border-blackLightest absolute top-full w-full"
			>
				<div
					v-for="[sku, substitute] in substitutes"
					:key="sku"
					:class="`flex items-center ${
						sku === selectedSubstitute.sku ? 'bg-greenHover' : 'bg-white'
					}`"
					@click="onSelect(sku)"
				>
					<dropdown-info
						:key="sku"
						:name="substitute.name"
						:description="substitute.price"
					/>
					<div v-if="selectedSubstitute.sku === sku" class="mx-2">
						<check-icon size="small" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import ArrowDown from './Icons/ArrowDown.vue'
import DropdownInfo from './DropdownInfo.vue'
import CheckIcon from './Icons/CheckIcon.vue'
import { Substitute } from '~/types/user'
export default defineComponent({
	components: { ArrowDown, DropdownInfo, CheckIcon },
	props: {
		selectedSubstitute: {
			type: Object as PropType<Substitute | null>,
			required: true,
		},
		substitutes: {
			type: Map as PropType<Map<string, Substitute>>,
			required: true,
		},
	},
	emits: ['on-select-option'],
	data() {
		return {
			showOptions: false,
		}
	},
	methods: {
		onSelect(sku: string) {
			this.$emit('on-select-option', sku)
		},
	},
})
</script>

<style>
#arrow {
	transition: transform 200ms ease-in;
}
</style>