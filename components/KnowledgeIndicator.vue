<template>
	<div
		class="rounded-full inline-block relative bg-gray-700 p-2"
		:title="'Knowledge: ' + knowledge + '/5'"
	>
		<div class="flex space-x-3">
			<div
				v-for="item in knowledge"
				:key="item"
				class="h-3 w-3 rounded-full bg-green-500"
			></div>
			<div
				v-for="item in 5 - knowledge"
				:key="item + knowledge"
				class="h-3 w-3 rounded-full bg-gray-600"
			></div>
		</div>
	</div>
</template>


<script>
export default {
	props: {
		knowledge: {
			type: Number,
			required: true,
		},
	},
	methods: {},
}
</script>