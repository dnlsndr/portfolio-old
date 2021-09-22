<template>
	<div>
		<div class="text-3xl lg:text-4xl font-black mb-8 lg:mb-16">
			<div class="bg-gray-800 px-4 py-2 text-white font-courier">CONTACT</div>
		</div>
		<section class="max-w-md">
			<p class="max-w-md text-justify mb-8">
				You can reach me under the following email:
			</p>
			<address class="not-italic font-bold text-2xl">
				daniel.schneider@eramux.com
			</address>
		</section>
	</div>
</template>

<script>
export default {
	head() {
		return {
			title: 'Contact',
			meta: [
				{
					name: 'description',
					content: 'Contact me',
				},
				{
					property: 'og:title',
					content: 'Contact',
				},
				{
					property: 'og:description',
					content: 'Contact me',
				},
				{
					property: 'twitter:title',
					content: 'Contact',
				},
				{
					property: 'twitter:description',
					content: 'Contact me',
				},
			],
		}
	},
}
</script>