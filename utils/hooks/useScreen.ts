import { onMounted, onUnmounted, ref } from 'vue'
import { getScreen } from '../client'

export default function useScreen() {
	const isDesktop = ref(false)
	const isMobile = ref(false)

	onMounted(() => {
		onScreen()
		window.addEventListener('resize', onScreen)
	})

	onUnmounted(() => {
		window.removeEventListener('resize', onScreen)
	})

	function onScreen() {
		const screen = getScreen()
		isDesktop.value = screen === 'desktop'
		isMobile.value = screen === 'mobile'
	}

	return {
		isDesktop,
		isMobile,
	}
}
