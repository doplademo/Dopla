<template>
	<section class="p-4 pt-16">
		<h3 class="heading-three text-redLightest text-center mb-4">Jäikö jokin vielä mietityttämään?</h3>
		<p class="p-large text-white text-center">Ota meihin yhteyttä, niin apteekin farmaseutti palaa asiaan
			mahdollisimman pian.
		</p>
		<form class="flex flex-col mt-8">
			<text-input class="my-2" type="text" placeholder="nimi" field="name" :text="name" @on-change="onChange" />
			<text-input class="my-2" type="text" placeholder="email" field="email" :text="email"
				@on-change="onChange" />
			<text-input class="my-2" type="text" placeholder="idk" field="idk" :text="idk" @on-change="onChange" />
			<text-area class="mb-4" placeholder="message" field="message" :text="message" :rows="5"
				@on-change="onChange" />
			<main-button class="" upper title="lähetä" />
		</form>
	</section>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue"
import MainButton from '../Button/MainButton.vue'
import TextArea from '../Input/TextArea.vue'
import TextInput from '../Input/TextInput.vue'
export default defineComponent({
	components: { TextInput, TextArea, MainButton },
	setup(_) {
		const name = ref('')
		const email = ref('')
		const idk = ref('')
		const message = ref('')

		function onChange(text: string, field: string) {
			switch (field) {
				case 'name':
					name.value = text
					break
				case 'email':
					email.value = text
					break
				case 'idk':
					idk.value = text
					break
				case 'message':
					message.value = text
					break
			}
		}

		return { name, email, idk, message, onChange }
	},
})
</script>

<style>

</style>
