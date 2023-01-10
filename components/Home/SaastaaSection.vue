<template>
    <section class="flex flex-col px-4 pt-12 pb-4 bg-brownNormal">
        <h2 class="heading-two">Säästää aikaa</h2>
        <p class="p-large mt-4 mb-8">
            Dopla-palvelu muistuttaa tulevista reseptilääketilauksista ja halutessasi apteekki uusii tilaukset
            voimassaolevan reseptisi mukaisesti.
        </p>
        <nuxt-link to="/" class="main-button uppercase self-start">
            <span class="mr-2">katso miten</span>
            <arrow-right-icon />
        </nuxt-link>
        <img class="mt-8" src="~/assets/images/home/Saastaa.png" alt="">
    </section>
</template>

<script>
import ArrowRightIcon from '../Icons/ArrowRightIcon.vue';

export default {
    components: {
        ArrowRightIcon
    }
}
</script>

<style>

</style>