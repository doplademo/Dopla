<template>
	<div
		:class="`flex flex-col nav-container height-transition rounded-md bg-mainBold fixed lg:justify-center ${
			expanded
				? 'top-0 left-0 right-0 h-[100vh] rounded-none'
				: 'top-1 left-1 right-1 h-[60px]'
		} z-10`"
	>
		<nav class="flex items-center justify-between px-3 py-4 lg:py-0 lg:px-6">
			<nuxt-link to="/">
				<img
					class="w-28"
					src="~/assets/images/common/logo.png"
					alt="dopla logo"
				/>
			</nuxt-link>

			<div v-if="isMobile" class="flex items-center gap-2">
				<nuxt-link class="text-white text-xs" to="/store">Log in</nuxt-link>
				<nuxt-link to="/onboarding" class="main-button-small uppercase"
					>Begin</nuxt-link
				>
				<button @click="expanded = !expanded">
					<close-icon v-if="expanded" size="medium" :color="Colors.white" />
					<hamburger-icon v-else :color="Colors.white" />
				</button>
			</div>

			<div v-else class="flex items-center gap-4">
				<desktop-link text="How it works" to="/how-it-works" />
				<desktop-link text="About Dopla" to="/about" />
				<desktop-link text="faq" to="/faq" />
				<nuxt-link to="/onboarding" class="main-button-small uppercase"
					>Begin</nuxt-link
				>
			</div>
		</nav>

		<home-nav v-if="expanded && isMobile" @on-redirect="expanded = false" />
	</div>
</template>

<script lang='ts'>
import { defineComponent, ref } from 'vue'
import CloseIcon from '../Icons/CloseIcon.vue'
import HamburgerIcon from '../Icons/HamburgerIcon.vue'
import HomeNav from './HomeNav.vue'
import DesktopLink from './DesktopLink.vue'

import useScreen from '~/utils/hooks/useScreen'

import { Colors } from '~/utils/Colors'
export default defineComponent({
	components: { CloseIcon, HamburgerIcon, HomeNav, DesktopLink },
	setup() {
		const expanded = ref(false)
		const { isDesktop, isMobile } = useScreen()

		return {
			expanded,
			isDesktop,
			isMobile,
		}
	},
	data() {
		return {
			Colors,
		}
	},
})
</script>

<style>
</style>