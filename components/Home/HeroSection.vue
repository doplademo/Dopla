<template>
    <section class="relative">
        <img src="~/assets/images/home/hero_image.png" />
        <div class="absolute bottom-16 left-4 right-4">
            <HeadingOne className="mb-4 text-redLightest">Uudenlainen tapa ostaa lääkkeitä</HeadingOne>
            <ParagraphNormal className="mb-4 text-redLightest">Doplasta tilaat reseptilääkkeet ja apteekin
                tuotteet suoraan
                kotiovelle.</ParagraphNormal>
            <MainButton title="aloita tunnistautumalla" className="bg-greenBold text-blackBold mt-4" upper />
        </div>
    </section>
</template>

<script lang="ts">
import HeadingOne from '../Heading/HeadingOne.vue';
import ParagraphNormal from '../Paragraph/ParagraphNormal.vue';
import MainButton from '../Button/MainButton.vue';
import { TWColor } from '~/types/colors';

export default {
    components: {
        HeadingOne,
        ParagraphNormal,
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