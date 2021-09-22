<template>
	<div v-if="document.toc.length" class="w-full lg:max-w-sm block relative">
		<div
			class="
				lg:sticky
				lg:top-16
				overflow-y-auto
				h-full
				lg:h-auto
				lg:max-h-(screen-16)
				mb-6
				lg:mb-0
			"
		>
			<nav class="lg:pt-12 pt-8 mb-4">
				<scrollactive
					highlight-first-item
					active-class="active"
					:offset="0"
					tag="ul"
				>
					<li
						v-for="link of document.toc"
						:key="link.id"
						class="text-gray-500"
						:class="{
							'border-t border-dashed first:border-t-0': link.depth === 2,
						}"
					>
						<a
							:href="`#${link.id}`"
							class="
								block
								text-sm
								scrollactive-item
								transition-padding
								ease-in-out
								duration-300
								hover:pl-1
							"
							:class="{
								'py-2': link.depth === 2,
								'ml-2 pb-2': link.depth === 3,
								'ml-3 pb-2': link.depth === 4,
								'ml-4 pb-2': link.depth === 5,
								'ml-5 pb-2': link.depth === 6,
							}"
							>{{ link.text }}</a
						>
					</li>
				</scrollactive>
			</nav>

			<div class="grid grid-cols-[1fr,auto] gap-4 border-t pt-6">
				<div class="text-gray-500">Project lead:</div>
				<div>
					{{ document.stakeholders }}
				</div>

				<div class="text-gray-500">Created:</div>
				<div>
					{{ document.time }}
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		document: {
			type: Object,
			default: () => {},
		},
	},
}
</script>

<style lang="postcss" scoped>
.active {
	@apply text-gray-800;
}
</style>


