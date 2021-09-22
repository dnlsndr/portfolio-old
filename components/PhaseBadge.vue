<template>
	<div
		class="
			rounded-full
			relative
			inline-block
			bg-white
			overflow-hidden
			text-base
			font-courier font-medium
			flex-shrink-0
			px-3
		"
		:class="[getPhaseInfo(phase).class]"
	>
		<div
			:class="[getPhaseInfo(phase).badgeClass]"
			class="absolute top-0 left-0 right-0 bottom-0 z-0"
		></div>
		<div class="z-10 relative">
			{{ getPhaseInfo(phase).title }}
		</div>
	</div>
</template>


<script>
export default {
	props: {
		phase: {
			type: Number,
			required: true,
		},
	},
	methods: {
		getPhaseInfo(phase) {
			switch (phase) {
				case 0:
					return {
						title: 'Conceptualization',
						class: 'border border-yellow-500 text-yellow-500',
					}
				case 1:
					return {
						title: 'Researching',
						class: ' text-gray-800 bg-yellow-300',
						badgeClass: 'bg-yellow-500 animate-pulse',
					}
				case 2:
					return { title: 'Resource allocation', class: '' }
				case 3:
					return { title: 'Active development', class: '' }
				case 4:
					return {
						title: 'Live',
						class: 'bg-green-500 text-gray-800',
					}
				case 5:
					return { title: 'Dormant', class: '' }
				default:
					return { title: 'Active', class: '' }
			}
		},
	},
}
</script>