<template>
	<div class="min-h-screen p-10 lg:p-12 bg-white text-gray-800 dark:bg-gray-1000 dark:text-white">
		<div class="mb-16 flex justify-between">
			<ph-hamburger size="24" weight="light" />
			<div @click="toggleTheme()">
				<ph-sun v-if="theme === 'dark'" size="24" weight="light" />
				<ph-moon v-else size="24" weight="light" />
			</div>
		</div>

		<section class="mb-16">
			<Nuxt />
		</section>
		<separator class="mb-16" />

		<div class="text-2xl lg:text-4xl font-black mb-4">Important notes</div>
		<div class="text-lg mb-8">Don't do drugs & drink enough water</div>
		<div class="flex items-center space-x-2">
			<div>Made with</div>
			<ph-heart size="20" weight="fill" />
			<div>in Munich</div>
		</div>
	</div>
</template>


<script>
import NavigationLinks from '@/components/navigation/NavigationLinks.vue'
import { PhHeart, PhHamburger, PhSun, PhMoon } from 'phosphor-vue'
import Separator from '@/components/Separator.vue'
import { onMounted, ref } from '@nuxtjs/composition-api'
export default {
	components: {
		Separator,
		PhHeart,
		PhSun,
		PhMoon,
		NavigationLinks,
		PhHamburger
	},

	setup(props) {

		let theme = ref('dark')

		onMounted(() => {
			theme.value = window.localStorage.theme
		})

		const toggleTheme = () => {
			if (localStorage.theme === 'dark') {
				localStorage.theme = 'light'
				document.documentElement.classList.remove('dark')
				theme.value = 'light'
			} else {
				localStorage.theme = 'dark'
				document.documentElement.classList.add('dark')
				theme.value = 'dark'
			}
		}

		return {
			theme,
			toggleTheme
		}
	}
}
</script>