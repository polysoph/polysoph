
<template>
	<article class="discover-question discover-question--{{ question.category.slug }}">
		<header class="discover-question-header">
			<a class="discover-question-category" v-link="{ name: 'discover:discipline', params: { discipline: question.category.slug }}">
				<category-badge class="discover-question-category-badge" :category="question.category.slug"></category-badge>
				<div class="discover-question-category-title">{{ question.category.title }}</div>
			</a>
			<a v-link="{ name: 'question', params: { slug: question.slug } }" class="discover-question-title">{{ question.title }}</a>
		</header>
		<section class="discover-question-body">
			<div class="discover-question-contents">
				<p class="discover-question-description" v-html="question.summary | markdown | truncate 150"></p>
			</div>
			<a class="discover-question-read-more" v-link="{ name: 'question', params: { slug: question.slug } }">Read More</a>
		</section>
	</article>
</template>

<script>

import CategoryBadge from './category-badge.vue'

export default {
	name: 'QuestionPreview',

	components: {
		CategoryBadge
	},

	props: {
		question: {
			type: Object,
			required: true
		}
	}
}

</script>
