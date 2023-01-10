<template>
    <!-- TODO add props for answer and image in the future -->
    <div class="flex flex-col items-center">
        <p class="p-normal text-redLightest">lorem ipsum dolor sit amet. May contain images.</p>
        <img src="~/assets/images/common/image 5.png" alt="" class="mt-2">
    </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    props: {},
})
</script>

<style>

</style>