<template>
    <section class="relative">
        <img src="~/assets/images/home/hero_image.png" />
        <div class="absolute bottom-16 left-4 right-4">
            <h1 class="heading-one mb-4 text-redLightest">Uudenlainen tapa ostaa lääkkeitä</h1>
            <p class="p-normal mb-4 text-redLightest">Doplasta tilaat reseptilääkkeet ja apteekin
                tuotteet suoraan
                kotiovelle.</p>
            <MainButton title="aloita tunnistautumalla" className="bg-greenBold text-blackBold mt-4" upper />
        </div>
    </section>
</template>

<script lang="ts">
import MainButton from '../Button/MainButton.vue';
import { TWColor } from '~/types/colors';

export default {
    components: {
        MainButton
    },

    data() {
        return {
            TWColor,
        }
    }
}
</script>
<style>

</style>