<template>
    <section class="px-4 pt-12 pb-4 flex flex-col">
        <HeadingTwo>Huolehtii eduistasi</HeadingTwo>
        <ParagraphLarge className="mt-4 mb-8">Dopla-palvelua käyttävän apteekin farmaseutit ehdottavat sinulle aina edullisimpia saatavilla
            olevia reseptilääkkeitä lääkemääräyksesi perusteella sekä laskevat lääkkeistä saatavien Kela-korvausten
            määrän. </ParagraphLarge>
        <MainButton className="self-start" title="katso miten" upper />
        <img class="mt-4 w-2/3 self-center" src="~/assets/images/home/Hintatietoinen.png" alt="">
    </section>
</template>

<script>
import HeadingTwo from '../Heading/HeadingTwo.vue';
import ParagraphLarge from '../Paragraph/ParagraphLarge.vue';
import MainButton from '../Button/MainButton.vue';
export default {
    components: { HeadingTwo, ParagraphLarge, MainButton }
}
</script>

<style>

</style>