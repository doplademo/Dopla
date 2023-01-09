<template>
    <section class="py-16 flex flex-col items-center bg-white">
        <h2 class="heading-two mb-6">Aloita jo tänään.</h2>
        <MainButton title="aloita tunnistautumalla" upper />
    </section>
</template>

<script>
import MainButton from '../Button/MainButton.vue';

export default {
    components: { MainButton }
}
</script>