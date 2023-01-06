<template>
    <section class="py-16 flex flex-col items-center bg-white">
        <HeadingTwo className="mb-6">Aloita jo tänään.</HeadingTwo>
        <MainButton title="aloita tunnistautumalla" upper />
    </section>
</template>

<script>
import MainButton from '../Button/MainButton.vue';
import HeadingTwo from '../Heading/HeadingTwo.vue';

export default {
    components: { HeadingTwo, MainButton }
}
</script>