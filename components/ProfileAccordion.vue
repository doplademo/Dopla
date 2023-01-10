<template>
    <div :class="`flex flex-col w-full py-3 border rounded-md text-start border-blackLightest overflow-hidden ${className}`">
        <button class="flex items-center justify-between px-3" @click="toggleDetails">
            <div>
                <p class="p-normal font-medium">{{
                    title
                }}</p>
                <p v-if="subtitle" class="p-normal text-blackLight">{{
                    subtitle
                }}</p>
            </div>

            <div class="bg-greenHover rounded py-1 px-2">
                <icon-plus v-if="!showDetails" size="small"/>
                <icon-minus v-else size="small"/>
            </div>
        </button>
        <div v-if="showDetails" class="mt-2 -mb-3 bg-greenHover">
            <slot />
        </div>
    </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import IconMinus from './Icons/IconMinus.vue';
import IconPlus from './Icons/IconPlus.vue';

export default defineComponent({
  components: { IconPlus, IconMinus },
    props: {
        title: String,
        subtitle: String,
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