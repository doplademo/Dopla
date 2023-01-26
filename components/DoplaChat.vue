<template>
	<div
		class="
			fixed
			flex flex-col
			items-end
			bottom-10
			right-2
			left-2
			lg:left-auto lg:right-12
		"
	>
		<div
			v-if="showChat"
			class="
				w-full
				max-w-[350px]
				h-[480px]
				flex flex-col
				bg-grayishWhite
				rounded-md
				overflow-hidden
				mb-2
				lg:border lg:border-blackLightest lg:mr-20
                lg:max-w-[440px]
			"
		>
			<div class="flex justify-between items-center bg-white p-4">
				<p class="p-normal font-medium">Dopla-chat</p>
				<icon-dots />
			</div>

			<div class="flex flex-col flex-1 p-2 gap-6 overflow-y-scroll">
				<chat-text
					from="Pharmacist"
					time="13:33"
					message="Hi! How can I help you?"
				/>
				<chat-text
					from="Me"
					time="13:33"
					message="Hi! Can i buy prescription drugs here?"
					is-user-text
				/>
				<chat-text from="Pharmacist" time="13:33" message="Yes, yes you can!" />
				<chat-text
					from="Pharmacist"
					time="13:33"
					message="Hi! How can I help you?"
				/>
				<chat-text
					from="Me"
					time="13:33"
					message="Hi! Can i buy prescription drugs here?"
					is-user-text
				/>
				<chat-text from="Pharmacist" time="13:33" message="Yes, yes you can!" />
			</div>

			<div class="p-2">
				<form
					class="flex justify-between items-center bg-white p-2 rounded-md"
					@on-submit.prevent="sendText"
				>
					<input
						v-model="userMessage"
						type="text"
						class="flex-1 outline-none"
						placeholder="Message here..."
					/>
					<input
						type="submit"
						value="send"
						class="
							main-button-shell
							text-xs
							py-1
							px-2
							ml-2
							uppercase
							font-semibold
                            lg:py-2 lg:px-4 lg:text-sm
						"
					/>
				</form>
			</div>
		</div>
		<button
			:class="`flex items-center justify-center w-16 h-16 rounded-full mr-2 ${
				showChat ? 'bg-grayishWhite' : 'bg-greenBold'
			} `"
			@click="setShowChat(!showChat)"
		>
			<chat-icon />
		</button>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import ChatText from './ChatText.vue'
import ChatIcon from './Icons/ChatIcon.vue'
import IconDots from './Icons/IconDots.vue'

export default defineComponent({
	components: { ChatIcon, IconDots, ChatText },
	props: {},

	setup() {
		const showChat = ref(false)
		const userMessage = ref('')

		function setShowChat(value: boolean) {
			showChat.value = value
		}

		function sendText() {
			userMessage.value = ''
		}

		return {
			showChat,
			userMessage,
			setShowChat,
			sendText,
		}
	},
})
</script>

<style>
</style>