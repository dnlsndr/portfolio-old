<template>
	<NuxtContent :document="document" />
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
	props: {
		document: {
			required: true,
		},
	},
})
</script>