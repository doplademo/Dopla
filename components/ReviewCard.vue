<template>
    <div class="w-[330px] h-[400px] bg-mainBold rounded-md px-4 py-8 flex flex-col">
        <p class="text-8xl text-white leading-3 mt-8">“</p>
        <div class="flex flex-col flex-1 px-4 justify-between">
            <p class="text-xl font-semibold text-white ">{{ review }}</p>
            <div>
                <p class="text-sm text-white">{{ reviewer }}</p>
                <p class="text-sm text-blackLight">{{ date}}</p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    props: {
        review: {
            type: String,
            default: 'Review'
        },
        reviewer: {
            type: String,
            default: 'John Doe',
        },
        date: {
            type: String,
            default: 'DD.MM.YYYY'
        }
    }
}
</script>
