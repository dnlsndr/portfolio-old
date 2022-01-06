<template>
	<div>
		<currently-playing class="mb-16" />

		<nuxt-img
			preset="avatar"
			src="/me.jpg"
			sizes="xs:480px lg:240px"
			class="w-20 rounded-full mb-6 lg:mb-0"
		/>
		<div class="mb-1 text-2xl font-semibold font-outfit">Daniel Schneider</div>
		<div class="mb-4 text font-normal text-gray-200">
			VP of engineering at
			<b>Hotellistat</b>
		</div>
		<div class="mb-12 text-gray-400">
			Creating software, finding solutions to hard problems and designing
			user interfaces
		</div>

		<h4 class="text-gray-200 mb-1">Languages</h4>
		<div class="mb-12 text-gray-400">German & English</div>

		<h4 class="text-gray-200 mb-1">Areas of interest</h4>
		<div class="text-gray-400 mb-16">
			Distributed systems · Software engineering · Process automation ·
			UX/UI
		</div>

		<separator class="col-span-full mb-16" />

		<div class="flex flex-col gap-y-8 mb-16">
			<h4 class="text-lg font-outfit text-gray-200">Stats</h4>
			<div class="flex items-baseline">
				<div class="text-2xl font-outfit">{{ totalExperience }}</div>
				<div class="text-gray-400 text-base ml-4">total years of experience</div>
			</div>

			<div v-for="(experience, index) in experiences" :key="index">
				<div class="flex items-baseline mb-2">
					<div class="text-2xl font-outfit">{{ experience.distance }}</div>
					<div class="text-gray-400 text-base ml-4">years</div>
				</div>

				<article
					class="block prose prose-gray prose-h3:text-lg dark:prose-invert prose-headings:text-gray-200 prose-p:text-gray-400 prose-headings:mt-0 prose-headings:mb-4 prose-headings:font-outfit prose-headings:font-medium prose-p:leading-normal prose-p:text-left"
				>
					<NuxtContent :document="experience" />
				</article>
			</div>
		</div>
		<separator class="mb-16" />

		<h4 class="text-lg font-outfit text-gray-200">Stuff I use</h4>
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl gap-8 col-span-full">
			<nuxt-link
				v-for="technology in technologies"
				:to="'/technologies/' + technology.slug"
				:key="technology.position"
				class="w-full p-6 shadow-xl bg-gray-800 flex flex-col group rounded"
			>
				<div class="flex items-center mb-6">
					<div v-if="technology.icon" class>
						<img :src="technology.icon" class="w-10" />
					</div>
					<div :class="[technology.icon ? 'ml-5' : '']">
						<div
							class="tracking-wide text-xl font-medium font-outfit mb-2 text-white"
						>{{ technology.title }}</div>
					</div>
				</div>
				<div class="text-opacity-75 text-gray-300 mb-6 flex-1" v-html="technology.description"></div>
				<div
					class="flex items-center transition-all duration-150 text-white lg:text-gray-500 group-hover:text-white"
				>
					<div class="mr-2">Read More</div>
					<ph-arrow-right
						class="transform transition-all duration-150 group-hover:translate-x-1"
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
import CurrentlyPlaying from '@/components/CurrentlyPlaying.vue'
import KnowledgeIndicator from '@/components/KnowledgeIndicator.vue'
import { formatDistanceStrict } from 'date-fns'
export default {
	components: {
		PhArrowRight,
		Separator,
		CurrentlyPlaying,
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
			.sortBy('position', 'asc')
			.sortBy('knowledge', 'desc')
			.sortBy('title', 'asc')
			.fetch()

		let experiences = await $content('experience', { deep: true })
			.sortBy('start', 'desc')
			.fetch()

		let totalExperience = experiences.map(item => parseInt(formatDistanceStrict(
			new Date(item.start),
			item.end == 'now' ? new Date() : new Date(item.end),
			{
				roundingMethod: "ceil",
				unit: "month",
				addSuffix: false
			}
		)) / 12).reduce((a, b) => a + b).toFixed(1)

		experiences = experiences.map((exp) => ({
			...exp,
			distance: (parseInt(formatDistanceStrict(
				new Date(exp.start),
				exp.end == 'now' ? new Date() : new Date(exp.end),
				{
					roundingMethod: "ceil",
					unit: "month",
					addSuffix: false
				}
			)) / 12).toFixed(1),
		}))

		return {
			totalExperience,
			technologies,
			experiences,
		}
	},
}
</script>
