<template>
	<section class="flex flex-col px-4 pt-24 pb-6 bg-mainBold">
		<img src="~/assets/images/how-it-works/hands.png" alt="hands" />
		<HeadingOne class-name="my-6 text-redLightest"
			>Lääkkeet vaivatto-masti verkosta</HeadingOne
		>
		<ParagraphLarge class-name="text-redLightest"
			>Doplasta tilaat reseptilääkkeitä ja apteekin tuotteita, jotka toimitetaan
			oikea-aikaisesti suoraan kotiovelle. Palvelu muistuttaa tulevien
			reseptilääketilausten uusiutumisesta tekstiviestillä.
		</ParagraphLarge>
	</section>
</template>

<script>
import HeadingOne from '../Heading/HeadingOne.vue'
import ParagraphLarge from '../Paragraph/ParagraphLarge.vue'

export default {
	components: { HeadingOne, ParagraphLarge },
}
</script>

<style>
</style>