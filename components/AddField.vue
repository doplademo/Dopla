<template>
    <div
        :class="`flex flex-col w-full p-3 border rounded-md text-start border-blackLightest ${borderNone ? 'border-none' : ''} ${className}`">
        <button :class="`flex items-center`" @click="toggleDetails">
            <div class="mr-4">
                <icon-plus v-if="!showDetails" />
                <icon-minus v-else />
            </div>
            <div>

                <p class="p-normal font-medium">{{
                    title
                }}</p>
                <p v-if="subtitle" class="p-normal text-blackLight">{{
                    subtitle
                }}</p>
            </div>
        </button>
        <div v-if="showDetails" class="mt-2">
            <slot />
        </div>
    </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import IconMinus from "./Icons/IconMinus.vue";
import IconPlus from "./Icons/IconPlus.vue";

export default defineComponent({
    components: { IconPlus, IconMinus },
    props: {
        title: String,
        subtitle: String,
        borderNone: Boolean,
        className: {
            type: String,
            default: '',
        }
    },
    emits: ['onAdd'],
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