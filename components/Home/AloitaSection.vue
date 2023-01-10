<template>
    <section class="py-16 flex flex-col items-center bg-white">
        <h2 class="heading-two mb-6">Aloita jo tänään.</h2>
        <nuxt-link to="/" class="main-button uppercase">
            <span class="mr-2">Get started</span>
            <arrow-right-icon />
        </nuxt-link>
    </section>
</template>

<script>
import ArrowRightIcon from '../Icons/ArrowRightIcon.vue';

export default {
    components: { ArrowRightIcon }
}
</script>