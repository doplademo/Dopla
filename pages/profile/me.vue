<template>
    <profile-wrapper>
        <section class="flex flex-col gap-4 mt-4">
            <profile-accordion title="Ulla Espoolainen" subtitle="Louhentie 5 A 14">
                <profile-field title="STREET ADDRESS" subtitle="Louhentie 5 A 14 02130, Espoo">
                </profile-field>
                <profile-field title="PHONE NUMBER" subtitle="050 123 4567">
                    <form class="flex flex-col">
                        <text-input value="050 123 4567" field="phone" label="Phone number" />
                        <div class="flex self-end mt-2">
                            <button class="button-no-bg uppercase py-1 px-1">cancel</button>
                            <input type="submit" class="main-button uppercase py-1 px-1" value="save" />
                        </div>
                    </form>
                </profile-field>
                <profile-field title="EMAIL" subtitle="ulla.espoolainen@sähköposti.net">
                    <form class="flex flex-col">
                        <text-input value="ulla.espoolainen@sähköposti.net" field="phone" label="Email" />
                        <div class="flex self-end mt-2">
                            <button class="button-no-bg uppercase py-1 px-1">cancel</button>
                            <input type="submit" class="main-button uppercase py-1 px-1" value="save" />
                        </div>
                    </form>
                </profile-field>

                <div class="flex flex-col my-8 gap-4 px-4">
                    <check-box :selected="marketing1" @toggle="toggleMarketing1" title="Marketing 1"
                        subtitle="Lorem ipsum dolor sita met tosi pitkällä rivillä niin nähdään miten käyttäytyy" />
                    <check-box :selected="marketing2" @toggle="toggleMarketing2" title="Marketing 2"
                        subtitle="Lorem ipsum dolor sita met tosi pitkällä rivillä niin nähdään miten käyttäytyy" />
                </div>
            </profile-accordion>

            <profile-accordion title="Wallet">
                <profile-field title="Payment card 1" subtitle="4920 **** **** **65">
                    <card-form from-profile />
                </profile-field>
                <profile-field title="Payment card 2" subtitle="4920 **** **** **65">
                    <card-form from-profile />
                </profile-field>
                <add-field border-none title="Add payment method">
                    <div class="pl-3">
                        <card-form from-profile />
                    </div>
                </add-field>
            </profile-accordion>

            <profile-accordion title="Delivery address">
                <profile-field title="Home" subtitle="Louhentie 5 A 14">
                    <address-form from-profile />
                </profile-field>
                <profile-field title="work" subtitle="Fredrikinkatu 42,00100 Helsinki">
                    <address-form from-profile />
                </profile-field>
                <add-field border-none title="Add new delivery method">
                    <div class="pl-3">
                        <address-form from-profile />
                    </div>
                </add-field>
            </profile-accordion>

        </section>
    </profile-wrapper>
</template>

<script>
import { defineComponent, ref } from 'vue';
import AddField from '~/components/AddField.vue';
import AddressForm from '~/components/AddressForm.vue';
import CardForm from '~/components/CardForm.vue';
import CheckBox from '~/components/Input/CheckBox.vue';
import TextInput from '~/components/Input/TextInput.vue';
import ProfileAccordion from '~/components/ProfileAccordion.vue';
import ProfileField from '~/components/ProfileField.vue';
import ProfileWrapper from '~/components/ProfileWrapper.vue';

export default defineComponent({
    components: {  ProfileAccordion, ProfileField, AddField, CheckBox, TextInput, CardForm, AddressForm, ProfileWrapper },
    props: {},
    setup() {
        const marketing1 = ref(true);
        const marketing2 = ref(true);

        function toggleMarketing1() {
            marketing1.value = !marketing1.value;
        }

        function toggleMarketing2() {
            marketing2.value = !marketing2.value;
        }

        return {
            marketing1,
            marketing2,
            toggleMarketing1,
            toggleMarketing2,
        }
    }
})
</script>

<style>

</style>