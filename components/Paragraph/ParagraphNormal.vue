<template>
    <p :class="(`text-[16px] leading-[17.4px] tracking-normal ` + className)">
        <slot />
    </p>
</template>

<script lang="ts">
export default {
    props: {
        color: {
            type: String,
            default: 'redLightest',
        },
        fontWeight: {
            type: String,
            default: 'normal'
        },
        className: {
            type: String,
            default: '',
        }
    }
}
</script>