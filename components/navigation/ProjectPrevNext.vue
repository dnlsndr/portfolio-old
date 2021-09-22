<template>
	<div
		v-if="prev || next"
		class="grid grid-cols-2 gap-2 pt-4 border-t dark:border-gray-800"
	>
		<NuxtLink
			v-if="prev"
			:to="prev.to"
			class="
				text-primary-500
				dark:text-primary-400
				font-bold
				hover:underline
				flex
				items-center
				justify-start
			"
		>
			<ph-arrow-left size="20" class="mr-2" />
			<span class="truncate">{{ prev.title }}</span>
		</NuxtLink>
		<span v-else></span>

		<NuxtLink
			v-if="next"
			:to="next.to"
			class="
				text-primary-500
				dark:text-primary-400
				font-bold
				hover:underline
				flex
				items-center
				justify-end
			"
		>
			<span class="truncate">{{ next.title }}</span>
			<ph-arrow-right size="20" class="ml-2" />
		</NuxtLink>
		<span v-else></span>
	</div>
</template>

<script>
import { PhArrowLeft, PhArrowRight } from 'phosphor-vue'
export default {
	components: {
		PhArrowLeft,
		PhArrowRight,
	},
	props: {
		prev: {
			type: Object,
			default: () => null,
		},
		next: {
			type: Object,
			default: () => null,
		},
	},
	computed: {},
}
</script>
