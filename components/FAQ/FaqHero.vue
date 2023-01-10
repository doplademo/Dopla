<template>
	<section class="pt-32 px-4">
		<h1 class="heading-one text-center">Usein kysyttyä</h1>
		<div class="mt-16 flex flex-col gap-4">
			<accordion title="Mikä on Dopla?">
				<!-- TODO here will be placed the element that will be reviewed on pressing plus icon -->
				<faq-answer />
			</accordion>
			<accordion title="Mikä on Dopla?">
				<!-- TODO here will be placed the element that will be reviewed on pressing plus icon -->
				<faq-answer />
			</accordion>
			<accordion title="Mikä on Dopla?">
				<!-- TODO here will be placed the element that will be reviewed on pressing plus icon -->
				<faq-answer />
			</accordion>
			<accordion title="Mikä on Dopla?">
				<!-- TODO here will be placed the element that will be reviewed on pressing plus icon -->
				<faq-answer />
			</accordion>
			<accordion title="Mikä on Dopla?">
				<!-- TODO here will be placed the element that will be reviewed on pressing plus icon -->
				<faq-answer />
			</accordion>
		</div>

	</section>
</template>

<script>
import Accordion from '../Accordion.vue'
import FaqAnswer from '../FaqAnswer.vue'
export default {
	components: { Accordion, FaqAnswer },
}
</script>

Accordion
<style>

</style>
