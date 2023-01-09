<template>
    <section class="px-4 pt-12 pb-4 bg-brownNormal">
        <h2 class="heading-two">Säästää aikaa</h2>
        <ParagraphLarge className="mt-4 mb-8">
            Dopla-palvelu muistuttaa tulevista reseptilääketilauksista ja halutessasi apteekki uusii tilaukset
            voimassaolevan reseptisi mukaisesti.
        </ParagraphLarge>
        <MainButton title="katso miten" upper />
        <img class="mt-8" src="~/assets/images/home/Saastaa.png" alt="">
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