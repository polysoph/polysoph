
<template>
	<div class="comment" id="comment-{{ comment.id }}">
		<aside class="comment-aside">
			<a v-link="linkToProfile" class="comment-avatar avatar">
				<img :src="comment.owner.avatar.url" class="comment-avatar-image avatar-image" />
			</a>
		</aside>
		<div class="comment-body">
			<header class="comment-header">
				<a class="comment-header-user" v-link="linkToProfile">
					<div class="comment-header-user-name">{{ comment.owner.name }}</div>
					<!-- <div class="comment-header-user-handle">@{{ comment.owner.handle }}</div> -->
				</a>
				<div class="comment-header-metadata">
					<a class="comment-header-metadata-timestamp" href="#comment-{{ comment.id }}" tooltip :title="comment.createdAt | date 'h:mma MMM D, Y'">{{ comment.createdAt | date 'MMM D' }}</a>
				</div>
			</header>
			<section class="comment-contents" v-html="comment.contents | markdown"></section>
		</div>
	</div>
</template>

<script>

import select from '../helpers/select'
import scrollToAnchor from '../helpers/scroll-to-anchor'

export default {
	name: 'Comment',

	props: {
		comment: {
			type: Object,
			required: true
		}
	},

	computed: {
		linkToProfile () {
			return { name: 'user', params: { slug: this.comment.owner.handle }}
		},
		isOwner () {
			return false
		}
	},

	ready () {
		const links = select(this.$el, '[href^="#comment-"]:not(.comment-header-timestamp)')
		links.forEach(el => el.addEventListener('click', scrollToAnchor))
	}
}


</script>
