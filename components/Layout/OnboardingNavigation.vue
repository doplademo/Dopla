<template>
	<div
		class="
			flex flex-col
			nav-container
			height-transition
			rounded-md
			bg-mainBold
			fixed
			top-1
			left-1
			right-1
			h-[60px]
			z-10
		"
	>
		<nav class="flex items-center justify-between px-3 py-4">
			<!-- TODO pinia check if logged in and if so redirect to store home page -->
			<nuxt-link to="/">
				<img
					class="w-28"
					src="~/assets/images/common/logo.png"
					alt="dopla logo"
				/>
			</nuxt-link>
		</nav>
	</div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<style>
</style>