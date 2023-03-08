<template>
	<main class="flex flex-col p-4 pt-20 lg:p-0 lg:pb-24">
		<div v-if="isDesktop" class="w-full bg-redLightest h-96" />
		<div class="lg:self-center lg:w-full lg:max-w-screen-xl lg:-mt-64">
			<div
				class="lg:px-4 lg:flex lg:justify-between lg:gap-8 lg:w-full lg:items-start"
			>
				<profile-navigation
					v-if="isDesktop || !nav"
					:nav="nav"
					@redirect="onRedirect"
				/>
				<profile-instructions v-if="!nav" />
				<profile-information
					v-else-if="nav === 'info'"
					@on-go-back="onGoBack"
				/>
				<profile-history v-else-if="nav === 'history'" @on-go-back="onGoBack" />
				<profile-reminders
					v-else-if="nav === 'reminders'"
					@on-go-back="onGoBack"
				/>
			</div>
		</div>
	</main>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import ProfileHistory from '~/components/Profile/ProfileHistory.vue'
import ProfileInformation from '~/components/Profile/ProfileInformation.vue'
import ProfileInstructions from '~/components/Profile/ProfileInstructions.vue'
import ProfileNavigation from '~/components/Profile/ProfileNavigation.vue'
import ProfileReminders from '~/components/Profile/ProfileReminders.vue'
import { ProfileNav } from '~/utils/profile'
import useScreen from '~/utils/hooks/useScreen'

export default defineComponent({
	components: {
		ProfileNavigation,
		ProfileInformation,
		ProfileHistory,
		ProfileReminders,
		ProfileInstructions,
	},
	layout: 'store',
	middleware: ['loggedIn', 'basket'],

	props: {},
	setup() {
		const { isDesktop } = useScreen()
		const nav = ref<ProfileNav>(null)

		function onRedirect(to: ProfileNav) {
			nav.value = to
		}

		function onGoBack() {
			nav.value = null
		}

		return {
			isDesktop,
			nav,
			onRedirect,
			onGoBack,
		}
	},

	asyncData({ $auth }) {
		console.log($auth.user)
	},
	head() {
		return {
			title: 'Profile',
		}
	},
})
</script>

<style>
</style>