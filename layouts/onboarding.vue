<template>
	<div class="relative">
		<onboarding-navigation />
		<Nuxt />
		<store-footer />
		<dopla-chat />
	</div>
</template>

<!-- TODO separate into multiple layouts and make components have {layout: 'something'} -->

<script lang="ts">
import { defineComponent } from 'vue'
import DoplaChat from '~/components/DoplaChat.vue'
import OnboardingNavigation from '~/components/Layout/OnboardingNavigation.vue'
import StoreFooter from '~/components/Layout/StoreFooter.vue'
export default defineComponent({
	components: {
		StoreFooter,
		DoplaChat,
		OnboardingNavigation,
	},
})
</script>