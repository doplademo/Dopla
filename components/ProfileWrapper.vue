<template>
    <main class="p-4 pt-20 pb-24">
        <nuxt-link to="/profile" class="flex items-center">
            <arrow-left-icon size="16" />
            <p class="p-x-small uppercase font-semibold ml-2">Previous</p>
        </nuxt-link>

        <section class="mt-4">
            <h4 class="heading-four font-semibold">Hi Ulla!</h4>
            <p class="p-normal mt-2">Lorem ipsum dolor sit amet!</p>
        </section>

        <slot />
    </main>
</template>

<script>
import { defineComponent } from "vue";
import ArrowLeftIcon from "./Icons/ArrowLeftIcon.vue";

export default defineComponent({
    components: { ArrowLeftIcon },

})
</script>