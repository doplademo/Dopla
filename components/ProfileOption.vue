<template>
    <nuxt-link class="flex items-center justify-between py-2 px-4 border border-blackLight rounded cursor-pointer" :to="to" >
        <div>
            <p class="p-normal font-semibold mb2">{{ title }}</p>
            <p class="p-normal text-blackLight">{{ subtitle }}</p>
        </div>
        <arrow-left-icon />
    </nuxt-link>
</template>

<script>
import { defineComponent } from 'vue';
import ArrowLeftIcon from './Icons/ArrowLeftIcon.vue';

export default defineComponent({
    components: { ArrowLeftIcon },
    props: {
        to: {
            type: String,
            required: true,
        },
        title: String,
        subtitle: String,
    },
})
</script>

<style>

</style>