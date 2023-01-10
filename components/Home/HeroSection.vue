<template>
    <section class="relative">
        <img src="~/assets/images/home/hero_image.png" />
        <div class="flex flex-col items-start absolute bottom-16 left-4 right-4">
            <h1 class="heading-one mb-4 text-redLightest">Uudenlainen tapa ostaa lääkkeitä</h1>
            <p class="p-normal mb-4 text-redLightest">Doplasta tilaat reseptilääkkeet ja apteekin
                tuotteet suoraan
                kotiovelle.</p>
            <nuxt-link to="/" class="main-button uppercase w-auto"><span class="mr-2">aloita
                    tunnistautumalla</span><arrow-right-icon /></nuxt-link>
        </div>
    </section>
</template>

<script lang="ts">
import ArrowRightIcon from '../Icons/ArrowRightIcon.vue';

export default {
    components: {
        ArrowRightIcon
    },
}
</script>
<style>

</style>