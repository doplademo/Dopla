<template>
	<footer class="bg-mainBold p-6 flex flex-col items-start">
		<nuxt-link to="/">
			<img class="mt-6" src="~/assets/images/common/logo.png" alt="dopla logo" />
		</nuxt-link>
		<h5 class="heading-five text-white my-4">Together with:</h5>
		<img class="" src="~/assets/images/common/posti-logo.png" alt="posti logo" />
		<div class="flex flex-wrap w-full">
			<div class="flex flex-col flex-shrink-0 flex-grow-0 w-6/12">
				<h4 class="heading-four text-redLightest mb-2 mt-12">Lorem</h4>
				<hyperlink-small class="text-white my-2">Lorem ipsum</hyperlink-small>
				<hyperlink-small class="text-white my-2">Dolor amet</hyperlink-small>
				<hyperlink-small class="text-white my-2">Adipiscing elit</hyperlink-small>
				<hyperlink-small class="text-white my-2">Consectetuer</hyperlink-small>
			</div>
			<div class="flex flex-col flex-shrink-0 flex-grow-0 w-6/12 mt-12">
				<h4 class="heading-four text-redLightest mb-2">Lorem</h4>
				<hyperlink-small class="text-white my-2">Lorem ipsum</hyperlink-small>
				<hyperlink-small class="text-white my-2">Dolor amet</hyperlink-small>
				<hyperlink-small class="text-white my-2">Adipiscing elit</hyperlink-small>
				<hyperlink-small class="text-white my-2">Consectetuer</hyperlink-small>
			</div>
			<div class="flex flex-col flex-shrink-0 flex-grow-0 w-6/12 mt-12">
				<h4 class="heading-four text-redLightest mb-2">Lorem</h4>
				<hyperlink-small class="text-white my-2">Lorem ipsum</hyperlink-small>
				<hyperlink-small class="text-white my-2">Dolor amet</hyperlink-small>
				<hyperlink-small class="text-white my-2">Adipiscing elit</hyperlink-small>
				<hyperlink-small class="text-white my-2">Consectetuer</hyperlink-small>
			</div>
		</div>
		<div class="flex flex-col items-center w-full mt-10">
			<h4 class="heading-four text-white my-2">Newsletter</h4>
			<text-input class-name="w-full my-2" type="email" :value="email" field="email" placeholder="email@example.com"
				@change="setEmail" />
			<main-button class-name="w-full my-2" title="TILAA" />
		</div>

		<div class="flex justify-between w-full mt-10">
			<hyperlink-small class="text-white">Lorem</hyperlink-small>
			<hyperlink-small class="text-white">Lorem</hyperlink-small>
			<hyperlink-small class="text-white">Lorem</hyperlink-small>
			<hyperlink-small class="text-white">Lorem</hyperlink-small>
		</div>

		<p class="w-full text-center mt-8 mb-6 text-xs text-blackLightest">© Dopla 2022</p>
	</footer>
</template>

<script>
import MainButton from '../Button/MainButton.vue'
import HyperlinkSmall from '../Hyperlink/HyperlinkSmall.vue'
import TextInput from '../Input/TextInput.vue'
export default {
	components: {
		HyperlinkSmall,
		TextInput,
		MainButton,
	},
	data() {
		return {
			email: '',
		}
	},
	methods: {
		setEmail(text) {
			this.email = text
		},
	},
}
</script>

<style>

</style>