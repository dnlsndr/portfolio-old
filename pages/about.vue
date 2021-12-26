<template>
	<div>
		<div class="text-3xl lg:text-4xl font-black mb-12 lg:mb-16">
			<div class="bg-gray-800 px-4 py-2 !text-white font-courier">ABOUT ME</div>
		</div>

		<section class="max-w-md prose dark:prose-invert text-justify">
			<p class="">
				Hi! &#128075; My name is Daniel Schneider. <br />
				I've started developing software starting by the age of 14. It has
				always intrigued me to tell computers what I want them to do. Prior to
				that, I've shown interest in 3D graphics desing. <br />
				I study Computer Science and Psychology at the LMU Munich, and work as
				Head of Engineering over at Hotellistat.
			</p>
		</section>
	</div>
</template>

<script>
export default {
	head() {
		return {
			title: 'About me',
			meta: [
				{
					name: 'description',
					content: 'Hi! My name is Daniel Schneider.',
				},
				{
					property: 'og:title',
					content: 'About me',
				},
				{
					property: 'og:description',
					content: 'Hi! My name is Daniel Schneider.',
				},
				{
					property: 'twitter:title',
					content: 'About me',
				},
				{
					property: 'twitter:description',
					content: 'Hi! My name is Daniel Schneider.',
				},
			],
		}
	},
}
</script>