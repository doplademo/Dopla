<template>
    <div class="flex flex-col p-4 flex-1 justify-between">
        <ul class="flex flex-col gap-6 mt-6">
            <li class="px-2 border-b border-white pb-5">
                <nuxt-link to="/how-it-works" @click.native="$emit('on-redirect')">
                    <p class=" p-x-small text-white">001</p>
                    <div class="flex justify-between items-center mt-2">
                        <h3 class="heading-three text-white font-semibold uppercase">How it works</h3>
                        <arrow-right-icon :color="Colors.white" :size="30" />
                    </div>
                </nuxt-link>
            </li>
            <li class="px-2 border-b border-white pb-5">
                <nuxt-link to="/about" @click.native="$emit('on-redirect')">
                    <p class="p-x-small text-white">002</p>
                    <div class="flex justify-between items-center mt-2">
                        <h3 class="heading-three text-white font-semibold uppercase">DOPLA AS COMPANY</h3>
                        <arrow-right-icon :color="Colors.white" :size="30" />
                    </div>
                </nuxt-link>
            </li>
            <li class="px-2 border-b border-white pb-5">
                <nuxt-link to="/faq" @click.native="$emit('on-redirect')">
                    <p class="p-x-small text-white">003</p>
                    <div class="flex justify-between items-center mt-2">
                        <h3 class="heading-three text-white font-semibold uppercase">Info</h3>
                        <arrow-right-icon :color="Colors.white" :size="30" />
                    </div>
                </nuxt-link>
            </li>
        </ul>

        <div class="flex flex-col items-center w-full">
            <nuxt-link to="/onboarding" class="main-button uppercase mb-6">Log in</nuxt-link>
            <p class="p-x-small text-blackLightest">© Dopla 2022</p>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import ArrowRightIcon from '../Icons/ArrowRightIcon.vue';

import { Colors } from '~/utils/Colors';
export default defineComponent({
    components: { ArrowRightIcon },
    props: {
    },
    emits: ['on-redirect'],

    data() {
        return { Colors }
    }
})
</script>

<style>

</style>