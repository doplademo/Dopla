<template>
	<main class="flex flex-col items-center mt-20">
		<div class="px-4 lg:px-20 w-full">
			<progress-indicator width="75%" />
		</div>
		<div class="px-4 self-start lg:px-20 mt-4">
			<back-button caps text="Edellinen" />
		</div>
		<div class="flex flex-col mt-2 mb-8 px-4 w-full max-w-[500px] lg:pb-8">
			<h4 class="heading-four my-6 font-semibold">Yhteystiedot</h4>
			<p class="p-normal">
				Tarkistathan vielä, että tietosi ovat oikein. Täyttämällä kaikki kohdat
				voimme taata palvelun jouhevuuden.
			</p>

			<form class="flex flex-col" @submit.prevent="onSubmit()">
				<text-input
					id="name"
					class-name="my-3"
					label="Nimi*"
					placeholder="Name"
					:value="name"
					field="name"
					disabled
				/>
				<text-input
					id="email"
					class-name="my-3"
					label="Sähköpostiosoite*"
					placeholder="Email"
					:value="email"
					field="email"
					error="Kirjoitathan sähköpostin muodossa xxxx@sähköposti.com"
					@change="setField"
				/>
				<text-input
					id="phone"
					class-name="my-3"
					label="Puhelinnumero*"
					placeholder="Phone number"
					:value="phoneNumber"
					field="phoneNumber"
					@change="setField"
				/>
				<text-input
					id="city"
					label="City*"
					placeholder="City"
					:value="city"
					field="city"
					@change="setField"
				/>
				<text-input
					id="city"
					label="Kotiosoite*"
					placeholder="Home address"
					:value="homeAddress"
					field="homeAddress"
					@change="setField"
				/>

				<div class="flex justify-between my-3">
					<text-input
						id="postecode"
						class-name="w-5/12"
						label="Postikoodi*"
						placeholder="Postcode"
						:value="posteCode"
						field="posteCode"
						@change="setField"
					/>
					<text-input
						id="post"
						class-name="w-5/12"
						label="Toimipaikka*"
						placeholder="Placeholder"
						:value="post"
						field="post"
						@change="setField"
					/>
				</div>
				<button type="submit" class="main-button uppercase lg:mt-4">
					<span class="mr-2">seuraava</span>
					<arrow-right-icon />
				</button>
			</form>
		</div>
	</main>
</template>

<script lang="ts">
// @ts-nocheck
import { UserAddress } from '../../types/user'
import ArrowRightIcon from '~/components/Icons/ArrowRightIcon.vue'
import TextInput from '~/components/Input/TextInput.vue'
import BackButton from '~/components/onboarding/BackButton.vue'

export default {
	components: {
		BackButton,
		TextInput,
		ArrowRightIcon,
	},
	data() {
		const name = this.$auth.user.firstname + ' ' + this.$auth.user.lastname
		return {
			name,
			email: '',
			phoneNumber: '',
			city: '',
			posteCode: '',
			post: '',
			homeAddress: '',
		}
	},
	methods: {
		setField(text: string, field: string) {
			console.log(text, field)
			switch (field) {
				case 'email':
					this.email = text
					break
				case 'phoneNumber':
					this.phoneNumber = text
					break
				case 'city':
					this.city = text
					break
				case 'homeAddress':
					this.homeAddress = text
					break
				case 'posteCode':
					this.posteCode = text
					break
				case 'post':
					this.post = text
					break
			}
		},
		onSubmit() {
			console.log(this.$auth.user)
			const data = {
				firstname: this.$auth.user.firstname,
				lastname: this.$auth.user.lastname,
				email: this.email,
				id: this.$auth.user.id,
				addresses: [
					{
						city: this.city,
						postcode: this.posteCode,
						telephone: this.phoneNumber,
						default_shipping: true,
						default_billing: true,
						firstname: this.$auth.user.firstname,
						lastname: this.$auth.user.lastname,
						street: [this.homeAddress],
						country_id: 'FI',
					},
				] as UserAddress[],
			}
			this.$store.commit('onboarding/updateUserInfo', data)
			this.$store.dispatch('onboarding/finishRegistration')
		},
	},
}
</script>

<style>
</style>