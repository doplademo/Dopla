<template>
	<section class="p-4 pt-16">
		<heading-three class-name="text-redLightest text-center mb-4"
			>Jäikö jokin vielä mietityttämään?</heading-three
		>
		<paragraph-large class-name="text-white text-center"
			>Ota meihin yhteyttä, niin apteekin farmaseutti palaa asiaan
			mahdollisimman pian.
		</paragraph-large>
		<form class="flex flex-col mt-8">
			<text-input
				class-name="my-2"
				type="text"
				placeholder="nimi"
				field="name"
				:text="name"
				@on-change="onChange"
			/>
			<text-input
				class-name="my-2"
				type="text"
				placeholder="email"
				field="email"
				:text="email"
				@on-change="onChange"
			/>
			<text-input
				class-name="my-2"
				type="text"
				placeholder="idk"
				field="idk"
				:text="idk"
				@on-change="onChange"
			/>
			<text-area
				class-name="mb-4"
				placeholder="message"
				field="message"
				:text="message"
				:rows="5"
				@on-change="onChange"
			/>
			<main-button class-name="" upper title="lähetä" />
		</form>
	</section>
</template>

<script lang="ts">
import { ref, defineComponent } from '@nuxtjs/composition-api'
import MainButton from '../Button/MainButton.vue'
import HeadingThree from '../Heading/HeadingThree.vue'
import TextArea from '../Input/TextArea.vue'
import TextInput from '../Input/TextInput.vue'
import ParagraphLarge from '../Paragraph/ParagraphLarge.vue'
export default defineComponent({
	components: { HeadingThree, ParagraphLarge, TextInput, TextArea, MainButton },
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

<style></style>
