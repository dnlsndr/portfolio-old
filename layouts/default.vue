<template>
	<div
		class="
			min-h-screen
			p-8
			lg:p-12
			bg-white
			text-gray-800
			dark:bg-gray-900 dark:text-white
		"
	>
		<div
			class="
				lg:flex
				items-start
				mb-16
				lg:mb-24
				bg-current
				lg:bg-transparent
				border-4
				lg:border-none
				border-current
				dark:border-gray-800
			"
		>
			<NavigationLinks />
		</div>
		<section class="mb-16">
			<Nuxt />
		</section>
		<separator class="mb-16" />

		<div class="text-2xl lg:text-4xl font-black mb-4">Important notes</div>
		<div class="text-lg mb-8">Don't do drugs & drink water</div>
		<div class="flex items-center space-x-2">
			<div>Made with</div>
			<ph-heart size="20" weight="fill" />
			<div>in Munich</div>
		</div>
	</div>
</template>


<script>
import NavigationLinks from '@/components/navigation/NavigationLinks.vue'
import { PhHeart } from 'phosphor-vue'
import Separator from '@/components/Separator.vue'
export default {
	components: {
		Separator,
		PhHeart,
		NavigationLinks,
	},
}
</script>