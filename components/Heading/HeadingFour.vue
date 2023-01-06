<template>
    <h4 :class="(`text-xl leading-5 tracking-normal ` + className)">
        <slot />
    </h4>
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