<template>
    <section class="px-4 pt-12 pb-4 flex flex-col">
        <h2 class="heading-two">Huolehtii eduistasi</h2>
        <ParagraphLarge className="mt-4 mb-8">Dopla-palvelua käyttävän apteekin farmaseutit ehdottavat sinulle aina
            edullisimpia saatavilla
            olevia reseptilääkkeitä lääkemääräyksesi perusteella sekä laskevat lääkkeistä saatavien Kela-korvausten
            määrän. </ParagraphLarge>
        <MainButton className="self-start" title="katso miten" upper />
        <img class="mt-4 w-2/3 self-center" src="~/assets/images/home/Hintatietoinen.png" alt="">
    </section>
</template>

<script>
import ParagraphLarge from '../Paragraph/ParagraphLarge.vue';
import MainButton from '../Button/MainButton.vue';
export default {
    components: { ParagraphLarge, MainButton }
}
</script>

<style>

</style>