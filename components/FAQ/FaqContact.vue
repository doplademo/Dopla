<template>
	<section class="p-4 pt-16 lg:flex lg:flex-col lg:items-center lg:pb-14">
		<h3 class="heading-three text-redLightest text-center mb-4">
			Jäikö jokin vielä mietityttämään?
		</h3>
		<p class="p-large text-white text-center max-w-[500px]">
			Ota meihin yhteyttä, niin apteekin farmaseutti palaa asiaan mahdollisimman
			pian.
		</p>
		<form class="flex flex-col mt-8 w-full lg:max-w-[420px]">
			<text-input
				class-name="my-2"
				type="text"
				placeholder="nimi"
				field="name"
				:value="name"
				@on-change="onChange"
			/>
			<text-input
				class-name="my-2"
				type="text"
				placeholder="email"
				field="email"
				:value="email"
				@on-change="onChange"
			/>
			<text-input
				class-name="my-2"
				type="text"
				placeholder="idk"
				field="idk"
				:value="idk"
				@on-change="onChange"
			/>
			<text-area
				class-name="mb-4"
				placeholder="message"
				field="message"
				:value="message"
				:rows="5"
				@on-change="onChange"
			/>

			<input type="submit" class="main-button uppercase" value="lähetä" />
		</form>
	</section>
</template>



<script lang="ts">
import { ref, defineComponent } from 'vue'
import TextArea from '../Input/TextArea.vue'
import TextInput from '../Input/TextInput.vue'

export default defineComponent({
	components: { TextInput, TextArea },
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
