<template>
	<div>
		<store-navigation :is-onboarding="isOnboarding" :is-logged="isLogged"  />
		<main :class="className">
			<slot />
		</main>
		<store-footer />
	</div>
</template>

<script>
import StoreFooter from './StoreFooter.vue'
import StoreNavigation from './StoreNavigation.vue'
export default {
	components: { StoreNavigation, StoreFooter },
	props: {
		className: {
			type: String,
			default: '',
		},
		isOnboarding: Boolean,
		isLogged: Boolean,
	},
}
</script>

<style>
</style>