<template>
	<section class="py-8 flex flex-col items-center">
		<h3 class="heading-three mb-8"> Asiakkaamme kertovat </h3>
		<div>
			<!-- TODO v-for when more reviews  -->
			<review-card />
		</div>
		<paggination-dot :pages-number="dots" />
		<div class="flex gap-6 mt-6 lg:gap-12 lg:mt-12">
			<button>
				<img class="w-6 h-6" src="~/assets/images/icons/arrow-left.png" alt="move to previous review" />
			</button>
			<button>
				<img class="w-6 h-6" src="~/assets/images/icons/arrow-right.png" alt="move to next review" />
			</button>
		</div>
	</section>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"
import PagginationDot from '../PagginationDot.vue'
import ReviewCard from '../ReviewCard.vue'

export default defineComponent({
	components: {
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
