<template>
    <section class="relative">
        <img :src="Images.homeHeroLarge" class="w-full h-[600px] object-cover resize lg:h-auto" />
        <div class="flex flex-col items-start absolute bottom-16 left-4 right-4 lg:inset-0 lg:justify-center lg:max-w-screen-md lg:left-6">
            <h1 class="heading-one mb-4 text-redLightest">Uudenlainen tapa ostaa lääkkeitä</h1>
            <p class="p-large mb-4 text-redLightest">Doplasta tilaat reseptilääkkeet ja apteekin
                tuotteet suoraan
                kotiovelle.</p>
            <nuxt-link to="/" class="main-button uppercase w-auto">get started</nuxt-link>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Images } from '~/utils/Images'


export default defineComponent({
    data() {
        return {
            Images,
        }
    }
})
</script>
<style>

</style>