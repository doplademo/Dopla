<template>
    <div class="px-2 py-4">

        <div class="flex justify-between pb-2 border-b border-blackLightest">
            <p class="p-small font-medium uppercase text-blackLight">{{ active? 'Next reminder': 'Paused' }}</p>
            <p v-if="active" class="p-small font-medium">07.07.2023</p>
        </div>

        <div :class="`flex items-start py-4 border-b border-blackLightest`">
            <p class="p-small text-blackLight">{{ medicineId }}</p>

            <div class="mx-2">
                <div class="flex justify-between mb-2">
                    <p class="p-large flex-1 font-medium ">{{
                        medicineName
                    }}</p>
                </div>
                <div class="bg-oceanLight flex items-center rounded p-1">
                    <guide-icon :size="20" />
                    <p class="p-small ml-2"> Puoli tablettia aamuin illoin...</p>
                </div>
            </div>
        </div>

        <div class="flex justify-end gap-4 w-full mt-6">
            <button v-if="active" class="border-button-small border-redBold uppercase">Pause reminder</button>
            <button :class="`main-button-small uppercase ${!active ? 'w-full' : ''}`">{{
                active? "Ok": "Request activation"}}</button>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import GuideIcon from './Icons/GuideIcon.vue';

export default defineComponent({
    components: { GuideIcon },
    props: {
        active: Boolean,
        medicineName: String,
        medicineId: String,
    },
})
</script>

<style>

</style>