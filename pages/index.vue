<template>
	<div>
		<!-- <currently-playing class="mb-16" /> -->

		<nuxt-img
			preset="avatar"
			src="/me.jpg"
			sizes="xs:480px lg:240px"
			class="w-20 rounded-full mb-6"
		/>
		<div
			class="mb-1 text-2xl font-semibold font-outfit text-gray-900 dark:text-white transition-colors duration-200"
		>Daniel Schneider</div>
		<div
			class="mb-4 text font-normal text-gray-700 dark:text-gray-200 transition-colors duration-200"
		>
			VP of engineering at
			<b>Hotellistat</b>
		</div>
		<div
			class="mb-12"
		>
			Creating software, finding solutions to hard problems and designing
			user interfaces is what I'm all about.
		</div>

		<h4
			class="text-gray-700 dark:text-gray-200 transition-colors duration-200 mb-1"
		>Languages</h4>
		<div
			class="mb-12"
		>German & English</div>

		<h4
			class="text-gray-700 dark:text-gray-200 transition-colors duration-200 mb-1"
		>Areas of interest</h4>
		<div
			class="mb-12"
		>
			Distributed systems · Software engineering · Process automation ·
			UX/UI
		</div>

		<h4
			class="text-gray-700 dark:text-gray-200 transition-colors duration-200 mb-1"
		>Contact</h4>
		<div>Wanna reach out to me?</div>
		<div
			class="mb-16"
		>
			<client-only
				placeholder="Tricking them puny bots..."
			>
				<address
					class="not-italic font-gray-200"
				>daniel.schneider@eramux.com</address>
			</client-only>
		</div>

		<separator
			class="col-span-full mb-16"
		/>
		<!-- tes -->
		<div
			class="flex flex-col gap-y-8 mb-16"
		>
			<h4
				class="text-lg font-outfit text-gray-700 dark:text-gray-200 transition-colors duration-200"
			>Stats</h4>
			<div
				class="flex items-baseline"
			>
				<div
					class="text-2xl font-outfit text-gray-800 dark:text-white transition-colors duration-200"
				>{{ totalExperience }}</div>
				<div
					class="text-base ml-4"
				>total years of experience</div>
			</div>

			<div
				v-for="(experience, index) in experiences"
				:key="index"
			>
				<div
					class="flex items-baseline mb-4"
				>
					<div
						class="text-2xl font-outfit text-gray-800 dark:text-white transition-colors duration-200"
					>{{ experience.distance }}</div>
					<div
						class="text-base ml-4"
					>years</div>
				</div>

				<article
					class="block prose prose-gray text-gray-500 dark:text-gray-400 prose-h3:text-lg dark:prose-invert prose-headings:text-gray-700 dark:prose-headings:text-gray-200 transition-colors duration-200 prose-p: prose-headings:mt-0 prose-headings:mb-2 prose-headings:transition-colors prose-headings:duration-200 prose-headings:font-medium prose-p:leading-normal"
				>
					<NuxtContent
						:document="experience"
					/>
				</article>
			</div>
		</div>
		<separator
			class="mb-16"
		/>

		<h4
			class="text-lg font-outfit text-gray-700 dark:text-gray-200 transition-colors duration-200 mb-8"
		>Favorite OSS projects</h4>

		<div
			class="flex flex-wrap gap-2"
		>
			<div
				v-for="technology of technologies"
				class="bg-gray-800 px-3 rounded-full"
			>{{ technology.title }}</div>
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
