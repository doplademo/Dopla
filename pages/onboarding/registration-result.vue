<template>
	<main>
		<div class="flex flex-col items-center px-4 mt-24 mb-8">
			<img class="w-16" src="~/assets/images/common/check-small.png" alt="success" />
			<h4 class="heading-four py-2 mt-8 w-full text-center font-semibold bg-pinkMedium">
				Kaikki valmista
			</h4>
			<p class="p-normal mt-4">Käyttöönotto on valmis, ja palvelu on nyt valmis
				käytettäväksi.</p>
			<br />
			<p class="p-normal mb-4">Reseptilääkkeiden näkymiseen menee vielä hetki. Farmaseutti on tuomassa
				niitä palveluun nähtävillesi.</p>
			<main-button class="w-full mt-2" title="aloita palvelun käyttö" upper />
		</div>
	</main>
</template>

<script>
import MainButton from '~/components/Button/MainButton.vue'
export default {
	components: { MainButton },
}
</script>

<style>

</style>