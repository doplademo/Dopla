<template>
	<section class="py-8 flex flex-col items-center">
		<HeadingThree class-name="mb-8"> Asiakkaamme kertovat </HeadingThree>
		<div>
			<!-- TODO v-for when more reviews  -->
			<review-card />
		</div>
		<paggination-dot :pages-number="dots" />
		<div class="mt-8">
			<button>
				<img
					class="w-6 h-6 mx-3"
					src="~/assets/images/icons/arrow-left.png"
					alt="move to previous review"
				/>
			</button>
			<button>
				<img
					class="w-6 h-6 mx-3"
					src="~/assets/images/icons/arrow-right.png"
					alt="move to next review"
				/>
			</button>
		</div>
	</section>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"
import HeadingThree from '../Heading/HeadingThree.vue'
import PagginationDot from '../PagginationDot.vue'
import ReviewCard from '../ReviewCard.vue'

export default defineComponent({
	components: {
		HeadingThree,
		ReviewCard,
		PagginationDot,
	},
	setup() {
		const selectedPage = ref(0)
		const dots = 5

		const setPage = (page: number) => {
			selectedPage.value = page
		}

		return { selectedPage, dots, setPage }
	},
})
</script>
