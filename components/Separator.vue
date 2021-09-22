<template>
	<div
		v-if="!$slots.default"
		class="flex-shrink-0"
		:class="[colorClass, vert ? 'w-px self-stretch' : 'h-px w-full']"
	></div>
	<div v-else class="flex items-center">
		<div
			:class="[
				'bg-gray-100 dark:bg-gray-700 flex-1',
				vert ? 'w-px self-stretch' : 'h-px w-full',
			]"
		></div>
		<div class="flex-shrink-0 px-2 text-gray-300 dark:text-gray-500">
			<slot />
		</div>
		<div
			:class="[
				'bg-gray-100 dark:bg-gray-700 flex-1',
				vert ? 'w-px self-stretch' : 'h-px w-full',
			]"
		></div>
	</div>
</template>

<script>
export default {
	props: {
		vert: {
			type: Boolean,
			default: false,
		},
		colorClass: {
			type: String,
			default: 'bg-gray-200 dark:bg-gray-700 ',
		},
	},
}
</script>
