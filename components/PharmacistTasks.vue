<template>
	<aside class="flex flex-col w-1/3 max-w-[440px] h-full p-4 bg-grayishWhite">
		<div>
			<h4 class="heading-four font-semibold bg-pinkLight p-4">Tasks</h4>

			<div class="flex gap-2 items-center mt-4">
				<switch-button :checked="checked" @toggle="checked = !checked" />
				<p class="p-normal font-medium">
					Show orders that wait for customer action
				</p>
			</div>

			<div class="flex justify-between mt-4">
				<p class="heading-five text-blackLightest">15 tasks</p>
				<p class="heading-five text-blackLightest">wait time circa 11 min.</p>
			</div>
		</div>

		<div class="flex flex-col gap-4 mt-4 flex-1 overflow-y-scroll">
			<pharmacist-task name="John Doe" task-type="handling" :minutes-passed="16" />
			<pharmacist-task name="John Doe" task-type="listing" :minutes-passed="11" />
			<pharmacist-task name="John Doe" task-type="waiting" :minutes-passed="5" />
			<pharmacist-task name="John Doe" task-type="contact" :minutes-passed="5" />
		</div>
	</aside>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import PharmacistTask from './PharmacistTask.vue'
import SwitchButton from './SwitchButton.vue'

export default defineComponent({
	components: { SwitchButton, PharmacistTask },
	props: {},
	setup() {
		const checked = ref(false)

		return { checked }
	},
})
</script>

