<template>
    <div
        :class="`flex flex-col bg-greenHover w-full py-3 text-start ${!hideBorder ? 'border-b border-blackLight' : ''} ${className}`">
        <button class="flex items-center justify-between px-3 text-start" @click="toggleDetails">
            <div>
                <p class="p-normal font-medium uppercase">{{
                    title
                }}</p>
                <p v-if="subtitle" class="p-normal text-blackLight">{{
                    subtitle
                }}</p>
            </div>

            <div class="rounded py-1 px-2">
                <icon-dots />
            </div>
        </button>
        <div v-if="showDetails" class="mt-2 px-3">
            <slot />
        </div>
    </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import IconDots from './Icons/IconDots.vue';

export default defineComponent({
    components: { IconDots },
    props: {
        title: String,
        subtitle: String,
        hideBorder: Boolean,
    },
    setup() {
        const showDetails = ref(false);

        function toggleDetails() {
            showDetails.value = !showDetails.value;
        }

        return {
            showDetails,
            toggleDetails,
        }
    }
})
</script>

<style>

</style>