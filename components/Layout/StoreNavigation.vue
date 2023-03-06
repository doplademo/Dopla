<template>
	<div
		class="flex flex-col nav-container height-transition rounded-md bg-mainBold fixed top-1 left-1 right-1 h-[60px] z-10 lg:justify-center"
	>
		<nav class="flex items-center justify-between px-3 py-4 lg:py-0 lg:px-10">
			<nuxt-link to="/store">
				<img
					class="w-28"
					src="~/assets/images/common/logo.png"
					alt="dopla logo"
				/>
			</nuxt-link>

			<div v-if="isMobile" class="flex items-center gap-2">
				<nuxt-link
					:class="`p-1 ${isProfile ? 'bg-white rounded-md' : ''}`"
					to="/profile"
				>
					<profile-icon
						:size="20"
						:color="isProfile ? Colors.greenBold : Colors.white"
					/>
				</nuxt-link>
				<button
					:class="`p-1 rounded ${showBasket ? 'bg-white' : ''}`"
					@click.prevent="showBasket = !showBasket"
				>
					<basket-icon
						:size="20"
						:color="showBasket ? Colors.greenBold : Colors.white"
					/>
				</button>
			</div>

			<div v-else class="flex items-center gap-6">
				<button
					:class="`p-1 rounded ${showBasket ? 'bg-white' : ''}`"
					@click.prevent="showBasket = !showBasket"
				>
					<basket-icon
						:size="26"
						:color="showBasket ? Colors.greenBold : Colors.white"
					/>
				</button>

				<nuxt-link
					to="/profile"
					class="flex gap-2 text-white items-center uppercase text-[15px] font-semibold"
				>
					<div :class="`p-1 ${isProfile ? 'bg-white rounded-md' : ''}`">
						<profile-icon
							:size="26"
							:color="isProfile ? Colors.greenBold : Colors.white"
						/>
					</div>
					<span>{{ $auth.user?.firstname }}</span>
				</nuxt-link>
			</div>
		</nav>

		<nav-basket v-if="showBasket" />
	</div>
</template>

<script lang='ts'>
import { defineComponent, ref } from 'vue'
import BasketIcon from '../Icons/BasketIcon.vue'
import ProfileIcon from '../Icons/ProfileIcon.vue'
import NavBasket from './NavBasket.vue'

import { Colors } from '~/utils/Colors'
import useScreen from '~/utils/hooks/useScreen'

const PROFILE_PATH = '/profile'
export default defineComponent({
	components: { BasketIcon, NavBasket, ProfileIcon },
	props: {},
	setup() {
		const showBasket = ref(false)
		const { isDesktop, isMobile } = useScreen()

		return {
			showBasket,
			isDesktop,
			isMobile,
		}
	},
	data() {
		return {
			Colors,
		}
	},
	computed: {
		isProfile(): boolean {
			return this.$route.path === PROFILE_PATH
		},
	},
})
</script>

<style>
</style>