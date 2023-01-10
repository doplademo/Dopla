<template>
	<main>
		<div class="flex flex-col mt-20 mb-8 px-4 ">
			<back-button caps text="Edellinen" />
			<h4 class="heading-four my-6 font-semibold">Yhteystiedot</h4>
			<p class="p-normal">Tarkistathan vielä, että tietosi ovat oikein. Täyttämällä kaikki kohdat
				voimme taata palvelun jouhevuuden.</p>

			<form class="flex flex-col" @submit.prevent="onSubmit()">
				<text-input id="name" class-name="my-3" label="Nimi*" placeholder="Placeholder" :value="name"
					field="name" />
				<text-input id="email" class-name="my-3" label="Sähköpostiosoite*" placeholder="Placeholder"
					:value="email" field="email" error="Kirjoitathan sähköpostin muodossa xxxx@sähköposti.com"
					@on-change="setField" />
				<text-input id="phone" class-name="my-3" label="Puhelinnumero*" placeholder="Placeholder"
					:value="phoneNumber" field="phoneNumber" @on-change="setField" />
				<text-input id="city" label="Kotiosoite*" placeholder="Placeholder" :value="city" field="city"
					@on-change="setField" />

				<div class="flex justify-between my-3">
					<text-input id="postecode" class-name="w-5/12" label="Postikoodi*" placeholder="Placeholder"
						:value="posteCode" field="posteCode" @on-change="setField" />
					<text-input id="post" class-name="w-5/12" label="Toimipaikka*" placeholder="Placeholder"
						:value="post" field="post" @on-change="setField" />
				</div>
				<button type="submit" class="main-button uppercase">
					<span class="mr-2">seuraava</span>
					<arrow-right-icon />
				</button>
			</form>
		</div>
	</main>
</template>

<script>
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
		const name = 'John Doe'
		return {
			name,
			email: '',
			phoneNumber: '',
			city: '',
			posteCode: '',
			post: '',
		}
	},
	methods: {
		setField(text, field) {
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
				case 'posteCode':
					this.posteCode = text
					break
				case 'post':
					this.post = text
					break
			}
		},
		onSubmit() {
			this.$router.replace('onboarding/registration-result');
		},
	},
}
</script>

<style>

</style>