<template>
    <p :class="(`text-xs leading-[12px] tracking-normal ` + className)">
        <slot />
    </p>
</template>

<script >
export default {
    props: {
        className: {
            type: String,
            default: '',
        },
    }
}
</script>