<template>
	<div>
		<div class="text-3xl lg:text-4xl font-black mb-3">
			<div
				class="bg-gray-800 px-4 py-2 text-white font-courier flex items-center"
			>
				<div v-if="document.icon" class="relative flex-strech w-8">
					<img :src="document.icon" class="h-6" />
				</div>
				<div class="mr-4 ml-4">
					{{ document.title }}
				</div>
			</div>
		</div>
		<div class="flex flex-wrap-reverse">
			<div class="lg:mr-32">
				<article class="prose max-w-none">
					<div class="lg:max-w-md">
						<div v-if="document.subtitle" class="-mt-4">
							<p class="text-gray-600">
								{{ document.subtitle }}
							</p>
						</div>

						<NuxtContent :document="document" />
					</div>
				</article>
				<ProjectPrevNext :prev="prev" :next="next" />
			</div>
			<ContentOverview
				v-if="!document.fullscreen"
				:document="document"
				:toc="document.toc"
			/>
		</div>
	</div>
</template>

<script>
import Vue from 'vue'
import ProjectPrevNext from '@/components/navigation/ProjectPrevNext.vue'
import ContentOverview from '~/components/navigation/ContentOverview.vue'

export default {
	components: {
		ProjectPrevNext,
		ContentOverview,
	},
	async asyncData({ $content, store, app, params, error }) {
		const path = `/technologies/${params.pathMatch}`

		console.log(path)
		const [document] = await $content({ deep: true }).where({ path }).fetch()

		if (!document) {
			return error({ statusCode: 404, message: 'Page not found' })
		}

		const [prev, next] = (
			await $content('technologies', { deep: true })
				.only([
					'icon',
					'title',
					'description',
					'path',
					'knowledge',
					'to',
					'dir',
					'slug',
				])
				.sortBy('position', 'asc')
				.surround(document.path, { before: 1, after: 1 })
				.fetch()
		).map((doc) => {
			if (!doc) {
				return doc
			}
			const { dir, slug } = doc
			// const _dir = dir.replace(regexp, '')
			const _slug = slug.replace(/^index/, '')
			doc.to = `${_slug}`
			return doc
		})

		return {
			document,
			prev,
			next,
		}
	},

	head() {
		return {
			title: this.document.title,
			meta: [
				{
					hid: 'description',
					name: 'description',
					content: this.document.description,
				},
				// Open Graph
				{ hid: 'og:title', property: 'og:title', content: this.document.title },
				{
					hid: 'og:description',
					property: 'og:description',
					content: this.document.description,
				},
				// Twitter Card
				{
					hid: 'twitter:title',
					name: 'twitter:title',
					content: this.document.title,
				},
				{
					hid: 'twitter:description',
					name: 'twitter:description',
					content: this.document.description,
				},
			],
		}
	},

	mounted() {
		if (this.document.version) {
			localStorage.setItem(
				`document-${this.document.slug}-version`,
				this.document.version
			)
		}

		setTimeout(() => {
			const blocks = document.getElementsByClassName('nuxt-content-highlight')

			for (const block of blocks) {
				const CopyButton = Vue.extend(AppCopyButton)
				const component = new CopyButton().$mount()
				block.appendChild(component.$el)
			}
		}, 100)
	},
}
</script>
<style>
p {
	text-align: justify !important;
}
</style>