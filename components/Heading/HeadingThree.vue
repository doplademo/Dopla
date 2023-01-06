<template>
    <h3 :class="(`text-2xl leading-6 font-normal tracking-normal ` + className)">
        <slot />
    </h3>
</template>

<script >
export default {
    props: {
        fontWeight: {
            type: String,
            required: false,
            default: 'medium',
        },
        className: {
            type: String,
            default: '',
        }
    }
}
</script>