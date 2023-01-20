<template>
	<section class="bg-redLightest px-4 flex flex-col pb-8 lg:px-44 lg:py-14">
		<h4 class="heading-four mt-6 font-medium lg:mt-0">Terveysuutisia</h4>
		<div class="flex flex-col lg:grid lg:grid-cols-3 lg:gap-16">

			<new-article
			v-for="article in dummyArticles"
			:key="article.title"
			:title="article.title"
			:date="article.date"
			:day="article.day"
			:description="article.description"
			/>
		</div>
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