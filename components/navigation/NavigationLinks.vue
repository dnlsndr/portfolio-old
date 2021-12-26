<template>
	<nav class="lg:flex lg:sticky lg:top-12">
		<template v-for="(link, index) in links">
			<nuxt-link
				:to="link.to"
				:key="link.to"
				custom
				v-slot="{ isActive, isExactActive, navigate, href }"
			>
				<a
					:href="href"
					@click="navigate"
					class="
						font-mono
						text-lg
						block
						px-4
						py-3
						lg:hover:bg-white lg:border-t-4 lg:border-r-4 lg:border-b-4
						border-gray-800
						lg:hover:text-gray-800
						transition-colors
						duration-150
						font-medium
					"
					:class="[
						(link.exactActive ? isExactActive : isActive)
							? 'bg-white dark:bg-gray-800 text-gray-800 dark:text-white'
							: 'bg-gray-800 dark:bg-gray-900  text-white dark:text-gray-400',
						index === 0 ? 'lg:border-l-4' : '',
					]"
				>
					{{ link.title }}
				</a>
			</nuxt-link>
		</template>
	</nav>
</template>

<script>
import { computed, defineComponent, useRoute } from '@nuxtjs/composition-api'

export default defineComponent({
	setup() {
		return {
			links: [
				{
					title: 'Home',
					to: '/',
					exactActive: true,
				},
				{
					title: 'README.md',
					to: '/about',
				},
				{
					title: 'Contact',
					to: '/contact',
				},
				{
					title: 'Legal',
					to: '/legal',
				},
			],
		}
	},
})
</script>