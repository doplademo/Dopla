<template>
    <section class="bg-mainBold flex flex-col">
        <h2 class="heading-two text-center text-redLightest mt-12">Näin tilaat reseptilääkkeitä</h2>
        <div class="flex flex-col p-4">
            <div class="flex flex-col">
                <img class="self-center my-20" src="~/assets/images/how-it-works/automobile.png" alt="automobile" />
                <h4 className="heading-four font-semibold text-redLightest mb-4">1. Aloita
                    tunnistautumalla</h4>
                <paragraph-large className="text-redLightest font-normal">Kirjaudu sisään ja valtuuta apteekki
                    reseptilääkeasioiden
                    hoitamiseen. Farmaseutti päivittää reseptilääketiedot tietokannasta.
                </paragraph-large>
            </div>

            <div class="flex flex-col">
                <img class="self-center my-12" src="~/assets/images/how-it-works/researcher.png" alt="automobile" />
                <h4 className="heading-four font-semibold text-redLightest mb-4">2. Valitse tuotteet ja tee
                    tilaus</h4>
                <paragraph-large className="text-redLightest font-normal">Kirjaudu sisään ja valtuuta apteekki
                    reseptilääkeasioiden
                    hoitamiseen. Farmaseutti päivittää reseptilääketiedot tietokannasta.
                </paragraph-large>
            </div>

            <div class="flex flex-col">
                <img class="self-center my-20" src="~/assets/images/how-it-works/automobile.png" alt="automobile" />
                <h4 className="heading-four font-semibold text-redLightest mb-4">3. Odota tilauksen
                    saapumista</h4>
                <paragraph-large className="text-redLightest font-normal">Posti toimittaa tilauksen valitsemaasi
                    osoitteeseen.</paragraph-large>
            </div>

            <div class="flex flex-col">
                <img class="self-center my-12" src="~/assets/images/how-it-works/leisure.png" alt="automobile" />
                <h4 className="heading-four font-semibold text-redLightest mb-4">4. Saa tulevat tilaukset jatkuvana
                    palveluna
                </h4>
                <paragraph-large className="text-redLightest font-normal">Dopla muistuttaa tulevista lääketilauksista
                    tekstiviestillä ja
                    halutessasi uusii tilaukset. Tilauksen sisältöä voi aina muokata Omat
                    tiedot -sivulla.
                </paragraph-large>
            </div>
        </div>
    </section>
</template>

<script>
import ParagraphLarge from '../Paragraph/ParagraphLarge.vue'
export default {
    components: { ParagraphLarge },
}
</script>