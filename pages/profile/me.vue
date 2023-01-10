<template>
    <main class="p-4 pt-20">
        <div class="flex items-center">
            <arrow-left-icon size="16" />
            <p class="p-x-small uppercase font-semibold ml-2">Previous</p>
        </div>

        <section class="mt-4">
            <h4 class="heading-four font-semibold">Hi Ulla!</h4>
            <p class="p-normal mt-2">Lorem ipsum dolor sit amet!</p>
        </section>

        <section class="flex flex-col gap-4 mt-4">
            <profile-accordion title="Ulla Espoolainen" subtitle="Louhentie 5 A 14">
                <profile-field title="STREET ADDRESS" subtitle="Louhentie 5 A 14 02130, Espoo">
                    <p>Henlo</p>
                </profile-field>
                <profile-field title="PHONE NUMBER" subtitle="050 123 4567">
                    <p>Henlo</p>
                </profile-field>
                <profile-field title="EMAIL" subtitle="ulla.espoolainen@sähköposti.net">
                    <p>Henlo</p>
                </profile-field>

                <div class="flex flex-col my-8 gap-4 px-4">
                    <check-box title="Marketing 1"
                        subtitle="Lorem ipsum dolor sita met tosi pitkällä rivillä niin nähdään miten käyttäytyy" />
                    <check-box title="Marketing 2"
                        subtitle="Lorem ipsum dolor sita met tosi pitkällä rivillä niin nähdään miten käyttäytyy" />
                </div>
            </profile-accordion>

            <profile-accordion title="Wallet">
                <profile-field title="Payment card 1" subtitle="4920 **** **** **65">
                    <p>Henlo</p>
                </profile-field>
                <profile-field title="Payment card 2" subtitle="4920 **** **** **65">
                    <p>Henlo</p>
                </profile-field>
                <add-field border-none title="Add payment method"></add-field>
            </profile-accordion>

            <profile-accordion title="Delivery address">
                <profile-field title="Home" subtitle="Louhentie 5 A 14">
                    <p>Henlo</p>
                </profile-field>
                <profile-field title="work" subtitle="Fredrikinkatu 42,00100 Helsinki">
                    <p>Henlo</p>
                </profile-field>
                <add-field border-none title="Add new delivery method"></add-field>
            </profile-accordion>

        </section>
    </main>
</template>

<script>
import { defineComponent } from 'vue';
import AddField from '~/components/AddField.vue';
import ArrowLeftIcon from '~/components/Icons/ArrowLeftIcon.vue';
import CheckBox from '~/components/Input/CheckBox.vue';
import ProfileAccordion from '~/components/ProfileAccordion.vue';
import ProfileField from '~/components/ProfileField.vue';

export default defineComponent({
    components: { ArrowLeftIcon, ProfileAccordion, ProfileField, AddField, CheckBox },
    props: {},
})
</script>

<style>

</style>