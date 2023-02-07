<template>
	<section class="bg-mainBold flex flex-col lg:pb-16">
		<h2 class="heading-two text-center text-redLightest mt-12 my-16">
			Näin tilaat reseptilääkkeitä
		</h2>
		<div
			class="
				flex flex-col gap-16
				p-4
				lg:flex-row lg:justify-center lg:gap-8 lg:px-24 lg:w-full
			"
		>
			<HIWStep
				title="1. Aloita tunnistautumalla"
				description="Kirjaudu sisään ja valtuuta apteekki reseptilääkeasioiden hoitamiseen.
					Farmaseutti päivittää reseptilääketiedot tietokannasta."
				:image="Images.automobile"
			/>

			<HIWStep
				title="2. Valitse tuotteet ja tee tilaus"
				description="Kirjaudu sisään ja valtuuta apteekki reseptilääkeasioiden hoitamiseen.
					Farmaseutti päivittää reseptilääketiedot tietokannasta."
				:image="Images.hiwResearcher"
			/>

			<HIWStep
				title="3. Odota tilauksen saapumista"
				description="Posti toimittaa tilauksen valitsemaasi osoitteeseen."
				:image="Images.automobile"
			/>

			<HIWStep
				title="4. Saa tulevat tilaukset jatkuvana palveluna"
				description="Dopla muistuttaa tulevista lääketilauksista tekstiviestillä ja
					halutessasi uusii tilaukset. Tilauksen sisältöä voi aina muokata Omat
					tiedot -sivulla."
				:image="Images.leisure"
			/>
		</div>
	</section>
</template>

<script>
import { defineComponent } from 'vue'
import HIWStep from '../HIWStep.vue'
import { Images } from '~/utils/Images'
export default defineComponent({
	components: { HIWStep },
	data() {
		return {
			Images,
		}
	},
})
</script>