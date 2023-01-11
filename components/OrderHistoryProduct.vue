<template>
    <div class="flex gap-2 py-4 px-2 border-b border-blackLightest ">
        <p class="p-normal text-blackLight">{{ amount }}</p>
        <!-- Product Info -->
        <div class="flex-1">
            <p class="p-normal uppercase font-medium ">{{ productName }}</p>
            <p class="p-normal text-blackLight">{{ quantity }}</p>
        </div>
        <!-- Price -->
        <p class="p-normal flex-shrink-0 font-medium">{{ price}}</p>
    </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
    props: {
        productName: String,
        quantity: String,
        price: String,
        amount: String,
    },
})
</script>

<style>

</style>