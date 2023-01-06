<template>
	<main>
		<div class="flex flex-col items-center px-4 mt-24 mb-8">
			<img
				class="w-16"
				src="~/assets/images/common/check-small.png"
				alt="success"
			/>
			<heading-four
				class-name="py-2 mt-8 w-full text-center font-semibold bg-pinkMedium"
			>
				Kaikki valmista
			</heading-four>
			<paragraph-normal class-name="mt-4"
				>Käyttöönotto on valmis, ja palvelu on nyt valmis
				käytettäväksi.</paragraph-normal
			>
			<br />
			<paragraph-normal class-name="mb-4"
				>Reseptilääkkeiden näkymiseen menee vielä hetki. Farmaseutti on tuomassa
				niitä palveluun nähtävillesi.</paragraph-normal
			>
			<main-button
				class-name="w-full mt-2"
				title="aloita palvelun käyttö"
				upper
			/>
		</div>
	</main>
</template>

<script>
import MainButton from '~/components/Button/MainButton.vue'
import HeadingFour from '~/components/Heading/HeadingFour.vue'
import ParagraphNormal from '~/components/Paragraph/ParagraphNormal.vue'
export default {
	components: { HeadingFour, ParagraphNormal, MainButton },
}
</script>

<style>
</style>