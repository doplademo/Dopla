<template>
	<section
		class="
			flex flex-col
			items-start
			px-4
			pt-20
			lg:bg-oceanBold lg:h-80 lg:px-0
		"
	>
		<div class="lg:self-center lg:w-full lg:max-w-screen-xl lg:px-4">
			<div class="flex flex-col items-start">
				<h3
					class="
						heading-three
						font-medium
						mb-4
						lg:bg-white lg:p-2 lg:rounded lg:mb-8
					"
				>
					Hei {{ name }}!
				</h3>
				<p class="p-normal">Kirjauduit Doplaan 16.29.</p>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	props: {
		name: {
			type: String,
			required: true,
		},
	},
}
</script>

<style>
</style>