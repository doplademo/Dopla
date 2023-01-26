<template>
	<div class="relative">
		<!-- <default-navigation /> -->
		<!-- <onboarding-navigation /> -->
		<store-navigation />
		<Nuxt />
		<store-footer />
		<dopla-chat />
	</div>
</template>

<!-- TODO separate into multiple layouts and make components have {layout: 'something'} -->

<script lang="ts">
import { defineComponent } from 'vue'
import DoplaChat from '~/components/DoplaChat.vue'
import StoreFooter from '~/components/Layout/StoreFooter.vue'
import StoreNavigation from '~/components/Layout/StoreNavigation.vue'
export default defineComponent({
	components: {
		StoreFooter,
		DoplaChat,
		StoreNavigation,
	},
})
</script>