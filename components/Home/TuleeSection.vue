<template>
    <section class="bg-redLightest px-4 pt-12 pb-4">
        <h2 class="heading-two">Tulee luoksesi</h2>
        <ParagraphLarge className="text-blackBold mt-4 mb-8">Tilaa Dopla-palvelua käyttävästä apteekista
            reseptilääkkeitä ja
            muita apteekin tuotteita
            vaivattomasti valitsemaasi osoitteeseen.</ParagraphLarge>
        <!-- TODO add arrow to this button -->
        <MainButton title="katso miten" upper className="my-8" />
        <img class="mt-8" src="~/assets/images/home/Tulee.png" alt="design image">
    </section>
</template>

<script>
import ParagraphLarge from '../Paragraph/ParagraphLarge.vue';
import MainButton from '../Button/MainButton.vue';
export default {
    components: {
        ParagraphLarge,
        MainButton
    }
}
</script>

<style>

</style>