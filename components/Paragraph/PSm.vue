<template>
    <p :class="(`text-sm leading-[14px] tracking-normal ` + className)">
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