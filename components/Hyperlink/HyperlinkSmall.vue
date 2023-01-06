<template>
    <a :href="href" :class="'text-sm leading-[14px] tracking-normal underline ' + className">
        <slot />
    </a>
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
        href: {
            type: String,
            default: '#',
        },
        className: {
            type: String,
            default: 'text-greenStrong font-medium',
        }
    }
})
</script>