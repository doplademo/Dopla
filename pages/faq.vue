<template>
	<main class="bg-mainBold text-redLightest">
		<faq-hero />
		<faq-contact />
		<cta-section />
	</main>
</template>

<script>
import CtaSection from '~/components/FAQ/CtaSection.vue'
import FaqContact from '~/components/FAQ/FaqContact.vue'
import FaqHero from '~/components/FAQ/FaqHero.vue'
export default {
	components: { FaqHero, FaqContact, CtaSection },
}
</script>

<style></style>
