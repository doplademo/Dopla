<template>
	<main class="flex flex-col items-center">
		<div class="flex flex-col mt-20 mb-8 px-4 max-w-[500px]">
			<img
				class="w-16 self-center"
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