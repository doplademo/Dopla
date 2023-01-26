<template>
	<div
		class="
			lg:w-full
			lg:max-w-[400px]
			lg:bg-white
			lg:flex
			lg:flex-col
			lg:gap-4
			lg:p-4
			lg:border
			lg:border-blackLightest
			lg:rounded-md
		"
	>
		<img
			:src="Images.coach"
			alt="hello"
			class="hidden lg:block lg:self-center"
		/>
		<h4
			class="
				heading-four
				bg-pinkMedium
				p-2
				font-medium
				rounded
				mb-4
				lg:text-center lg:p-4
			"
		>
			Ulla Espoolainen
		</h4>
		<div class="flex flex-col gap-4">
			<profile-option
				title="My profile"
				subtitle="Subtitle"
				:selected="nav === 'info'"
				@redirect="$emit('redirect', 'info')"
			/>
			<profile-option
				title="Order History"
				subtitle="Subtitle"
				:selected="nav === 'history'"
				@redirect="$emit('redirect', 'history')"
			/>
			<profile-option
				title="Reminders"
				subtitle="4 active reminders"
				:selected="nav === 'reminders'"
				@redirect="$emit('redirect', 'reminders')"
			/>
		</div>
		<div class="flex justify-center mt-24 mb-16 w-full lg:mb-0">
			<button class="main-button uppercase">
				<arrow-right-icon />
				<span class="ml-1">Log out</span>
			</button>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import ArrowRightIcon from '~/components/Icons/ArrowRightIcon.vue'
import ProfileOption from '~/components/ProfileOption.vue'
import { Images } from '~/utils/Images'
import { ProfileNav } from '~/utils/profile'

export default defineComponent({
	components: { ProfileOption, ArrowRightIcon },
	props: {
		nav: {
			type: String as PropType<ProfileNav>,
			required: true,
		},
	},
	emits: ['redirect'],
	data() {
		
		return {
			Images,
		}
	},
})
</script>

<style>
</style>