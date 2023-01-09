<template>
    <p :class="(`text-lg leading-[18px] tracking-normal ` + className)">
        <slot />
    </p>
</template>

<script >
import { defineComponent } from 'vue';
export default defineComponent({
    props: {
        fontWeight: {
            type: String,
            required: false,
            default: 'medium',
        },
        className: {
            type: String,
            default: '',
        },

    }
})
</script>