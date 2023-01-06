<template>
    <div :class="`flex flex-col w-full p-3 border rounded-md text-start border-blackLightest ${className}`">
        <button @click="toggleDetails" class="flex items-center">
            <div class="mr-4">
                <icon-plus v-if="!showDetails" />
                <icon-minus v-else />
            </div>
            <paragraph-normal class-name="font-medium">{{
                    title
            }}</paragraph-normal>
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