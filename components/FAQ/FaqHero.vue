<template>
	<section class="pt-32 px-4 lg:flex lg:flex-col lg:items-center">
		<h1 class="heading-one text-center">Usein kysyttyä</h1>
		<div class="mt-16 flex flex-col gap-4 w-full max-w-[850px]">
			<accordion title="Mikä on Dopla?">
				<faq-answer
					:image="Images.placeholderImage"
					answer="lorem ipsum dolor amet answer"
				/>
			</accordion>
			<accordion title="Mikä on Dopla?">
				<faq-answer
					:image="Images.placeholderImage"
					answer="lorem ipsum dolor amet answer"
				/>
			</accordion>
			<accordion title="Mikä on Dopla?">
				<faq-answer
					:image="Images.placeholderImage"
					answer="lorem ipsum dolor amet answer"
				/>
			</accordion>
			<accordion title="Mikä on Dopla?">
				<faq-answer
					:image="Images.placeholderImage"
					answer="lorem ipsum dolor amet answer"
				/>
			</accordion>
			<accordion title="Mikä on Dopla?">
				<faq-answer
					:image="Images.placeholderImage"
					answer="lorem ipsum dolor amet answer"
				/>
			</accordion>
		</div>
	</section>
</template>

<script>
import Accordion from '../Accordion.vue'
import FaqAnswer from '../FaqAnswer.vue'
import { Images } from '~/utils/Images'
export default {
	components: { Accordion, FaqAnswer },
	data() {
		return {
			Images,
		}
	},
}
</script>

