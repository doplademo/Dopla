<template>
    <h2 :class="(`text-[34px] leading-[30px] font-normal tracking-[-3%] ` + className)">
        <slot />
    </h2>
</template>

<script>
export default {
    props: {

        className: {
            type: String,
            default: '',
        }
    }
}
</script>