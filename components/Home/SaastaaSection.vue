<template>
    <section class="px-4 pt-12 pb-4 bg-brownNormal">
        <h2 class="heading-two">Säästää aikaa</h2>
        <p class="p-large mt-4 mb-8">
            Dopla-palvelu muistuttaa tulevista reseptilääketilauksista ja halutessasi apteekki uusii tilaukset
            voimassaolevan reseptisi mukaisesti.
        </p>
        <MainButton title="katso miten" upper />
        <img class="mt-8" src="~/assets/images/home/Saastaa.png" alt="">
    </section>
</template>

<script>
import MainButton from '../Button/MainButton.vue';

export default {
    components: {
        MainButton
    }
}
</script>

<style>

</style>