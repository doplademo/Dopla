<template>
    <div class="flex gap-2 my-2">
        <p class="p-normal text-blackLight">X</p>
        <!-- Product Info -->
        <div class="">
            <p class="p-normal uppercase font-medium ">{{ productName }}</p>
            <p class="p-normal text-blackLight">{{ productType }}</p>
            <p class="p-normal text-blackLight">{{ amount }}</p>
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
        productType: String,
        amount: String,
        price: String,
    },
})
</script>

<style>

</style>