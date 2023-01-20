<template>
	<footer class="bg-mainBold p-6 flex flex-col items-start lg:px-24 lg:py-16">
		<div class="lg:flex lg:justify-between lg:items-center lg:w-full">
			<nuxt-link to="/">
				<img
					class="mt-6"
					src="~/assets/images/common/logo.png"
					alt="dopla logo"
				/>
			</nuxt-link>
			<div class="lg:flex lg:items-start lg:gap-16">
				<h5 class="heading-five text-white my-4 lg:my-0">Together with:</h5>
				<img
					class=""
					src="~/assets/images/common/posti-logo.png"
					alt="posti logo"
				/>
			</div>
		</div>

		<div class="w-full lg:flex lg:justify-between lg:flex-wrap">
			<div
				class="flex flex-wrap w-full lg:flex-nowrap max-w-xl lg:justify-between"
			>
				<div class="flex flex-col flex-shrink-0 w-6/12 lg:w-auto">
					<h4 class="heading-four text-redLightest mb-2 mt-12">Lorem</h4>
					<hyperlink-small class-name="text-white my-2"
						>Lorem ipsum</hyperlink-small
					>
					<hyperlink-small class-name="text-white my-2">
						Dolor amet</hyperlink-small
					>
					<hyperlink-small class-name="text-white my-2"
						>Adipiscing elit</hyperlink-small
					>
					<hyperlink-small class-name="text-white my-2"
						>Consectetuer</hyperlink-small
					>
				</div>
				<div
					class="flex flex-col flex-shrink-0 flex-grow-0 w-6/12 lg:w-auto mt-12"
				>
					<h4 class="heading-four text-redLightest mb-2">Lorem</h4>
					<hyperlink-small class-name="text-white my-2"
						>Lorem ipsum</hyperlink-small
					>
					<hyperlink-small class-name="text-white my-2"
						>Dolor amet</hyperlink-small
					>
					<hyperlink-small class-name="text-white my-2"
						>Adipiscing elit</hyperlink-small
					>
					<hyperlink-small class-name="text-white my-2"
						>Consectetuer</hyperlink-small
					>
				</div>
				<div
					class="flex flex-col flex-shrink-0 flex-grow-0 w-6/12 lg:w-auto mt-12"
				>
					<h4 class="heading-four text-redLightest mb-2">Lorem</h4>
					<hyperlink-small class-name="text-white my-2"
						>Lorem ipsum</hyperlink-small
					>
					<hyperlink-small class-name="text-white my-2"
						>Dolor amet</hyperlink-small
					>
					<hyperlink-small class-name="text-white my-2"
						>Adipiscing elit</hyperlink-small
					>
					<hyperlink-small class-name="text-white my-2"
						>Consectetuer</hyperlink-small
					>
				</div>
			</div>

			<div class="w-full lg:w-auto">
				<div class="flex flex-col items-center w-full mt-10">
					<h4 class="heading-four text-white my-2 lg:self-start lg:w-[330px] lg:flex-shrink-0">Newsletter</h4>
					<text-input
						class-name="w-full my-2"
						type="email"
						:value="email"
						field="email"
						placeholder="email@example.com"
						@change="setEmail"
					/>
					<main-button class-name="w-full my-2" title="TILAA" />
				</div>

				<div class="flex justify-between w-full mt-10">
					<hyperlink-small class-name="text-white">Lorem</hyperlink-small>
					<hyperlink-small class-name="text-white">Lorem</hyperlink-small>
					<hyperlink-small class-name="text-white">Lorem</hyperlink-small>
					<hyperlink-small class-name="text-white">Lorem</hyperlink-small>
				</div>
			</div>
		</div>

		<p class="w-full text-center mt-8 mb-6 text-xs text-blackLightest lg:mb-0">
			© Dopla 2022
		</p>
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