<template>
	<div>
		<div
			class="
				flex
				items-center
				lg:items-start
				flex-col
				lg:flex-row
				gap-x-16
				mb-16
			"
		>
			<nuxt-img
				src="/me.jpg"
				class="w-60 rounded-full lg:sticky top-8 mb-16 lg:mb-0"
			/>
			<section class="relative z-10 text-center lg:text-left">
				<div
					class="
						mb-8
						text-3xl
						sm:text-4xl
						lg:text-5xl
						font-black font-courier
						leading-relaxed
						sm:leading-relaxed
						lg:leading-relaxed
					"
				>
					Hi!&#128075; I'm
					<span
						class="
							bg-gray-800
							dark:bg-white
							px-4
							pt-2
							text-white
							dark:text-gray-800
						"
						>Daniel</span
					>
					from Munich
				</div>
				<div class="mb-12">
					Creating software, finding solutions to hard problems and designing
					user interfaces are some of the ways I express myself.
				</div>

				<h4 class="text-gray-500">Languages I speak</h4>
				<div class="mb-12 lg:mb-18 font-medium">German & English</div>

				<h4 class="text-gray-500">Areas of interest</h4>
				<div class="font-medium">
					Distributed systems · Software engineering · Process automation ·
					UX/UI
				</div>
			</section>
		</div>

		<separator class="mb-16" />
		<h4 class="text-2xl lg:text-4xl font-black mb-16">Experience</h4>

		<section
			class="
				grid
				lg:grid-cols-[auto,1fr]
				gap-x-8
				md:gap-x-24
				gap-y-4
				lg:gap-y-14
				mb-16
			"
		>
			<div class="text-lg font-light hidden lg:block">Duration</div>
			<div class="text-lg font-light hidden lg:block">Description</div>

			<template v-for="experience in experiences">
				<div
					class="font-bold text-lg text-gray-500 dark:text-gray-500"
					:key="experience.start"
				>
					{{ experience.distance }}
				</div>
				<div class="lg:max-w-xl mb-16 lg:mb-0" :key="experience.start">
					<article class="prose dark:prose-invert max-w-none -mt-8 -mb-6">
						<NuxtContent :document="experience" />
					</article>
				</div>
			</template>
		</section>
		<separator class="mb-16" />

		<div class="text-2xl lg:text-4xl font-black mb-16">
			Technologies I work with
		</div>
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl gap-8">
			<nuxt-link
				v-for="technology in technologies"
				:to="'/technologies/' + technology.slug"
				:key="technology.position"
				class="w-full p-6 shadow-xl bg-gray-800 flex flex-col group"
			>
				<div class="flex items-center mb-6">
					<div v-if="technology.icon">
						<img :src="technology.icon" class="w-12" />
					</div>
					<div :class="[technology.icon ? 'ml-5' : '']">
						<div class="tracking-wide text-xl font-bold mb-2 text-white">
							{{ technology.title }}
						</div>
						<knowledge-indicator
							class="self-baseline"
							:knowledge="technology.knowledge"
						/>
					</div>
				</div>
				<div
					class="text-opacity-75 text-gray-300 mb-6 flex-1 text-justify"
					v-html="technology.description"
				></div>
				<div
					class="
						flex
						items-center
						transition-all
						duration-150
						text-white
						lg:text-gray-500
						group-hover:text-white
					"
				>
					<div class="mr-2">Read More</div>
					<ph-arrow-right
						class="
							transform
							transition-all
							duration-150
							group-hover:translate-x-1
						"
						size="20"
					/>
				</div>
			</nuxt-link>
		</div>
	</div>
</template>

<script>
import { PhArrowRight } from 'phosphor-vue'
import Separator from '@/components/Separator.vue'
import KnowledgeIndicator from '@/components/KnowledgeIndicator.vue'
import { formatDistance } from 'date-fns'
export default {
	components: {
		PhArrowRight,
		Separator,
		KnowledgeIndicator,
	},
	head() {
		return {
			title: 'Daniel Schneider',
			meta: [
				{
					name: 'description',
					content: "Hi! I'm Daniel Schneider",
				},
				{
					property: 'og:title',
					content: 'Daniel Schneider',
				},
				{
					property: 'og:description',
					content: "Hi! I'm Daniel Schneider",
				},
				{
					property: 'twitter:title',
					content: 'Daniel Schneider',
				},
				{
					property: 'twitter:description',
					content: "Hi! I'm Daniel Schneider",
				},
			],
		}
	},

	async asyncData({ $content, store, app, params, error }) {
		let technologies = await $content('technologies', { deep: true })
			.only(['icon', 'title', 'description', 'position', 'knowledge', 'slug'])
			.sortBy('position', 'asc')
			.sortBy('knowledge', 'desc')
			.sortBy('title', 'asc')
			.fetch()

		let experiences = await $content('experience', { deep: true })
			.sortBy('start', 'desc')
			.fetch()

		experiences = experiences.map((exp) => ({
			...exp,
			distance: formatDistance(
				new Date(exp.start),
				exp.end == 'now' ? new Date() : new Date(exp.end)
			),
		}))

		return {
			technologies,
			experiences,
		}
	},
}
</script>
