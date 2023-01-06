<template>
	<section class="bg-redLightest px-4 flex flex-col pb-8">
		<heading-four class-name="mt-6 font-medium">Terveysuutisia</heading-four>
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
import HeadingFour from '../Heading/HeadingFour.vue'
import NewArticle from './NewArticle.vue'

export default {
	components: { HeadingFour, NewArticle },
	data() {
		return {
			dummyArticles,
		}
	},
}
</script>

<style>
</style>