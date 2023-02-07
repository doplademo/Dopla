<template>
	<main class="flex flex-col items-center mt-20">
		<div class="px-4 lg:px-20 w-full">
			<progress-indicator width="100%" />
		</div>
		
		<div class="flex flex-col mb-8 px-4 py-16 max-w-[500px] ">
			<img
				class="w-20 self-center"
				src="~/assets/images/common/check-small.png"
				alt="success"
			/>
			<h4
				class="
					heading-four
					py-2
					mt-8
					w-full
					text-center
					font-semibold
					bg-pinkMedium
				"
			>
				Kaikki valmista
			</h4>
			<p class="p-normal mt-4">
				Käyttöönotto on valmis, ja palvelu on nyt valmis käytettäväksi.
			</p>
			<br />
			<p class="p-normal mb-4">
				Reseptilääkkeiden näkymiseen menee vielä hetki. Farmaseutti on tuomassa
				niitä palveluun nähtävillesi.
			</p>
			<nuxt-link to="/store" class="main-button uppercase width-full mt-2"
				>aloita palvelun käyttö"</nuxt-link
			>
		</div>
	</main>
</template>

<script>
export default {
	components: {},
}
</script>

<style>
</style>