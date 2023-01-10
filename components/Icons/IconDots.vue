<template>
    <svg v-if="size==='large'" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="5.33268" cy="15.9997" r="2.66667" fill="black" />
        <circle cx="15.9997" cy="15.9997" r="2.66667" fill="black" />
        <circle cx="26.6667" cy="15.9997" r="2.66667" fill="black" />
    </svg>
    <svg v-else-if="size==='medium'" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="4" cy="12" r="2" fill="black" />
        <circle cx="12" cy="12" r="2" fill="black" />
        <circle cx="20" cy="12" r="2" fill="black" />
    </svg>
    <svg v-else  width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="2" cy="8" r="1.5" fill="black" />
        <circle cx="8" cy="8" r="1.5" fill="black" />
        <circle cx="14" cy="8" r="1.5" fill="black" />
    </svg>

</template>
<script>
import { Colors } from '~/utils/Colors'
export default {
    props: {
        size: {
            type: Number,
            default: 0,
        },
        width: {
            type: Number,
            default: 25,
        },
        height: {
            type: Number,
            default: 25,
        },
        color: {
            type: String,
            default: Colors.blackBold,
        },
    },
}
</script>