<template>
    <div class="flex gap-2 py-3 px-2 border-b border-blackLightest ">
        <p class="p-x-small text-blackLight">{{ productId }}</p>
        <!-- Product Info -->
        <div class="flex-1">
            <p class="p-normal uppercase font-medium ">{{ productName }}</p>
            <button class="link-small text-blackLight">{{ actionText }}</button>
        </div>
        <!-- Price -->
        <p class="p-normal flex-shrink-0 font-medium">{{ price }}</p>
    </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        productId: String,
        price: String,
        productName: String,
        actionText: String,
    },

    emits: ['on-action']
})
</script>

<style>

</style>