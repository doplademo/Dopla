<template>
	<section class="bg-redLightest px-4 flex flex-col pb-8">
		<h4 class="heading-four mt-6 font-medium">Terveysuutisia</h4>
		<new-article
			v-for="article in dummyArticles"
			:key="article.title"
			:title="article.title"
			:date="article.date"
			:day="article.day"
			:description="article.description"
		/>
	</section>
</template>

<script>
import { dummyArticles } from '../../dummy/dummyArticles'
import NewArticle from './NewArticle.vue'

export default {
	components: { NewArticle },
	data() {
		return {
			dummyArticles,
		}
	},
}
</script>

<style>
</style>