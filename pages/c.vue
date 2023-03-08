<template>
	<div>Redirecting...</div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'

export default defineComponent({
	props: {},
	asyncData({ $auth, redirect, store }) {
		if ($auth.loggedIn) {
			redirect('/checkout')
		} else {
			store.commit('appState/setRedirectTo', 'checkout')
			redirect('/onboarding?to=checkout')
		}
	},
})
</script>

<style>
</style>