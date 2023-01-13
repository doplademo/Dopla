<template>
    <div :class="`w-2/3 rounded-md bg-white p-2 ${isUserText ? 'self-end' : ''}`">
        <div class="flex items-center gap-2">
            <div class="w-4 h-4 bg-blackLightest rounded-full" />
            <p class="p-small font-medium flex-1">{{ from }}</p>
            <p class="p-small text-blackLightest">{{ time }}</p>
        </div>
        <p class="p-normal py-2">{{ message }}</p>
    </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        from: String,
        message: String,
        isUserText: Boolean,
        time: String,
    },
})
</script>

<style>

</style>