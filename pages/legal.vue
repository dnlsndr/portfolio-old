<template>
	<div>
		<div class="text-3xl lg:text-4xl font-black mb-8 lg:mb-16">
			<div class="bg-gray-800 px-4 py-2 text-white font-courier">LEGAL</div>
		</div>
		<section class="max-w-md">
			<p class="text-justify mb-8">
				For legal requests, please use the information below:
			</p>

			<p class="text-justify mb-8 leading-loose">
				<span class="font-bold"> Daniel Schneider </span>
				<br />
				Richard-Strauss-Str. 31
				<br />
				81677 Munich, Germany
				<br />
				Phone: +49 176 62992930
				<br />
				Email: daniel.schneider@eramux.com
			</p>
		</section>
	</div>
</template>

<script>
export default {
	head() {
		return {
			title: 'Legal',
			meta: [
				{
					name: 'description',
					content: 'The boring part',
				},
				{
					property: 'og:title',
					content: 'Legal',
				},

				{
					property: 'og:description',
					content: 'The boring part',
				},
				{
					property: 'twitter:title',
					content: 'Legal',
				},
				{
					property: 'twitter:description',
					content: 'The boring part',
				},
			],
		}
	},
}
</script>