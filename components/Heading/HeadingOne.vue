<template>
    <h1 :class="(`text-[40px] leading-9 font-normal tracking-[-2%] ` + className)">
        <slot />
    </h1>
</template>

<script >
export default {
    props: {
        className: {
            type: String,
            default: '',
        }
    }
}
</script>