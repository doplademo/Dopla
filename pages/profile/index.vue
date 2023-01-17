<template>
    <main class="p-4 pt-20">

        <h4 class="heading-four bg-pinkMedium p-2 font-medium rounded mb-4">Ulla Espoolainen</h4>
        <div class="flex flex-col gap-4">
            <profile-option title="My profile" subtitle="Subtitle" to="/profile/me" />
            <profile-option title="Order History" subtitle="Subtitle" to="/profile/order-history" />
            <profile-option title="Reminders" subtitle="4 active reminders" to="/profile/reminders" />
        </div>
        <div class="flex justify-center mt-24 mb-16 w-full">
            <button class="main-button uppercase">
                <arrow-right-icon />
                <span class="ml-1">Log out</span>
            </button>
        </div>
    </main>
</template>

<script>
import { defineComponent } from 'vue';
import ArrowRightIcon from '~/components/Icons/ArrowRightIcon.vue';
import ProfileOption from '~/components/ProfileOption.vue';

export default defineComponent({
    components: { ProfileOption, ArrowRightIcon },
    props: {},
})
</script>

<style>

</style>