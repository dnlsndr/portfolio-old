<template>
	<div>
		<div
			class="
				text-3xl
				sm:text-4xl
				lg:text-5xl
				font-black
				mb-8
				font-courier
				leading-relaxed
				sm:leading-relaxed
				lg:leading-relaxed
			"
		>
			Hi!&#128075; <br />
			I'm
			<span class="bg-gray-800 px-4 pt-2 text-white">Daniel Schneider</span
			><br />
			from Munich, Germany.<br />
		</div>

		<div class="text-xl mb-16 lg:mb-24 lg:mb-18 text-gray-600">
			Creating software, finding solutions to hard problems <br />
			and designing user interfaces are some of the ways I express myself.
			<br />
		</div>
		<h4
			class="
				bg-gray-800
				px-4
				py-2
				text-xl
				!text-white
				font-courier
				inline-block
				!font-medium
				!mb-4
			"
		>
			Areas of interest
		</h4>
		<div class="text-lg mb-16 text-gray-600">
			Distributed systems · Software engineering · Process automation · UX/UI
		</div>

		<separator class="mb-16" />
		<h4 class="text-2xl lg:text-4xl font-black mb-6">Experience</h4>

		<section
			class="grid grid-cols-[auto,1fr] gap-x-8 gap-y-8 mb-16 lg:max-w-md"
		>
			<div class="text-right">
				<div class="text-lg text-gray-500">May</div>
				<div class="text-lg font-bold">2019</div>
			</div>
			<div class="border-l-2 border-gray-700 pl-4">
				<div class="text-lg font-bold mb-3">
					Hotellistat GmbH · Head of Engineering
				</div>
				<p class="text-gray-500">
					With our development team growing, I got promoted to Head of
					Engineering. Taking care of project mamangement, infrastructure,
					dev-ops and more.
				</p>
			</div>
			<div class="text-right">
				<div class="text-lg text-gray-500">March</div>
				<div class="text-lg font-bold">2018</div>
			</div>
			<div class="border-l-2 border-gray-700 pl-4">
				<div class="text-lg font-bold mb-3">
					Hotellistat GmbH · Working student
				</div>
				<p class="text-gray-500">
					I started at Hotellistat as a working student where I was initially
					responsible for projects such as the internal administration
					interface.
				</p>
			</div>
			<div class="text-right">
				<div class="text-lg text-gray-500">June</div>
				<div class="text-lg font-bold">2016</div>
			</div>
			<div class="border-l-2 border-gray-700 pl-4">
				<div class="text-lg font-bold mb-3">
					Benedikt Pauli IT management & Business development
				</div>
				<p class="text-gray-500">
					Benedikt gave me the chance to professionally enter software
					development. He taught me how to work with version management and
					large repositories.
				</p>
			</div>
			<div class="text-right">
				<div class="text-lg text-gray-500">January</div>
				<div class="text-lg font-bold">2014</div>
			</div>
			<div class="border-l-2 border-gray-700 pl-4">
				<div class="text-lg font-bold mb-3">
					My first programming experieces
				</div>
				<p class="text-gray-500">
					I started programming after having read up on microcontrollers and
					arduinos. I started creating programs e.g. that used inverse
					kinematics for controlling a robotic arm. This is where I also started
					reading up on IOT and espressif microcontrollers such as the esp32.
				</p>
			</div>
		</section>
		<separator class="mb-16" />

		<div class="text-2xl lg:text-4xl font-black mb-6">
			Technologies I work with
		</div>
		<div
			class="
				mb-16
				grid grid-cols-1
				md:grid-cols-2
				lg:grid-cols-3
				max-w-7xl
				gap-8
			"
		>
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

		return {
			technologies,
		}
	},
}
</script>
