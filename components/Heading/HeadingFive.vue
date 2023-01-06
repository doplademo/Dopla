<template>
    <h5 :class="(`text-sm leading-[14px] tracking-normal ` + className)">
        <slot />
    </h5>
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