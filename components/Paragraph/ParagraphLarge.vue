<template>
    <p :class="(`text-lg leading-[18px] tracking-normal ` + className)">
        <slot />
    </p>
</template>

<script >
import Vue from 'vue';
export default Vue.component('HeadingTwo', {
    name: 'HeadingTwo',
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