<template>
	<profile-wrapper @on-go-back="$emit('on-go-back')">
		<section class="flex flex-col gap-4 mt-4">
			<profile-accordion title="Ulla Espoolainen" subtitle="Louhentie 5 A 14">
				<profile-field title="STREET ADDRESS" :subtitle="wholeAddress">
				</profile-field>
				<profile-field title="PHONE NUMBER" :subtitle="phone">
					<form class="flex flex-col">
						<text-input :value="phone" field="phone" label="Phone number" />
						<div class="flex self-end mt-2">
							<button class="button-no-bg uppercase py-1 px-1">cancel</button>
							<input
								type="submit"
								class="main-button uppercase py-1 px-1"
								value="save"
							/>
						</div>
					</form>
				</profile-field>
				<profile-field title="EMAIL" :subtitle="email">
					<form class="flex flex-col">
						<text-input :value="email" field="email" label="Email" />
						<div class="flex self-end mt-2">
							<button class="button-no-bg uppercase py-1 px-1">cancel</button>
							<input
								type="submit"
								class="main-button uppercase py-1 px-1"
								value="save"
							/>
						</div>
					</form>
				</profile-field>

				<div class="flex flex-col my-8 gap-4 px-4">
					<check-box
						:selected="marketing1"
						@toggle="marketing1 = !marketing1"
						title="Marketing 1"
						subtitle="Lorem ipsum dolor sita met tosi pitkällä rivillä niin nähdään miten käyttäytyy"
					/>
					<check-box
						:selected="marketing2"
						@toggle="marketing2 = !marketing2"
						title="Marketing 2"
						subtitle="Lorem ipsum dolor sita met tosi pitkällä rivillä niin nähdään miten käyttäytyy"
					/>
				</div>
			</profile-accordion>

			<profile-accordion title="Wallet">
				<profile-field
					has-delete
					title="Payment card 1"
					subtitle="4920 **** **** **65"
				>
					<card-form from-profile />
				</profile-field>
				<profile-field
					has-delete
					title="Payment card 2"
					subtitle="4920 **** **** **65"
				>
					<card-form from-profile />
				</profile-field>
				<add-field border-none title="Add payment method">
					<div class="pl-3">
						<card-form from-profile />
					</div>
				</add-field>
			</profile-accordion>

			<profile-accordion title="Delivery address">
				<profile-field has-delete title="Home" subtitle="Louhentie 5 A 14">
					<address-form from-profile />
				</profile-field>
				<profile-field
					has-delete
					title="work"
					subtitle="Fredrikinkatu 42,00100 Helsinki"
				>
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

<script lang="ts">
import { defineComponent, ref } from 'vue'
import AddField from '~/components/AddField.vue'
import AddressForm from '~/components/AddressForm.vue'
import CardForm from '~/components/CardForm.vue'
import CheckBox from '~/components/Input/CheckBox.vue'
import TextInput from '~/components/Input/TextInput.vue'
import ProfileAccordion from '~/components/ProfileAccordion.vue'
import ProfileField from '~/components/ProfileField.vue'
import ProfileWrapper from '~/components/ProfileWrapper.vue'
import { User } from '~/types/user'
import { getAttributes } from '~/utils/user'

export default defineComponent({
	components: {
		ProfileAccordion,
		ProfileField,
		AddField,
		CheckBox,
		TextInput,
		CardForm,
		AddressForm,
		ProfileWrapper,
	},
	props: {},
	emits: ['on-go-back'],

	data() {
		const user = this.$auth.user as User
		const attributes = getAttributes(user)

		return {
			email: user?.email,
			phone: user?.addresses?.[0]?.telephone,
			marketing1: attributes.newsletter1_subscribed !== '0',
			marketing2: attributes.newsletter2_subscribed !== '0',
		}
	},

	computed: {
		wholeAddress() {
			const user = this.$auth.user as User
			const city = user.addresses[0].city
			const street = user.addresses[0].street[0]
			const postcode = user.addresses[0].postcode
			return `${street} ${postcode}, ${city}`
		},
	},

	mounted() {
		console.log(this.$auth.user)
	},
})
</script>

<style>
</style>