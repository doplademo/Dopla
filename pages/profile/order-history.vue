<template>
    <profile-wrapper>
        <section class="flex flex-col gap-4 mt-4">
            <profile-accordion title="Order 15.11.2022" subtitle="Delivered">
                <order-history-receipt />
            </profile-accordion>
            <profile-accordion title="Order 15.11.2022" subtitle="Delivered">
                <order-history-receipt />
            </profile-accordion>
            <profile-accordion title="Order 15.11.2022" subtitle="Delivered">
                <order-history-receipt />
            </profile-accordion>
            <profile-accordion title="Order 15.11.2022" subtitle="Delivered">
                <order-history-receipt />
            </profile-accordion>

        </section>
    </profile-wrapper>
</template>

<script>
import { defineComponent } from 'vue';
import OrderHistoryReceipt from '~/components/OrderHistoryReceipt.vue';
import ProfileAccordion from '~/components/ProfileAccordion.vue';
import ProfileWrapper from '~/components/ProfileWrapper.vue';

export default defineComponent({
    components: { ProfileWrapper, ProfileAccordion, OrderHistoryReceipt },
    props: {},
})
</script>

<style>

</style>