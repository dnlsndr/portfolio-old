<template>
  <a
    v-if="playing && playing.is_playing == true"
    :href="playing.item.uri"
    class="block"
  >
    <div
      class="flex items-center gap-x-4 rounded-full p-1 w-full border-2 border-green-400 min-w-0"
    >
      <div
        class="flex-shrink-0 w-10 h-10 relative rounded-full overflow-hidden"
      >
        <img
          class="w-full"
          :src="image.url"
          alt
        />
      </div>
      <div
        class="flex-shrink flex-grow-0 min-w-0"
      >
        <div
          class="font-medium text-sm truncate"
        >{{ playing.item.name }}</div>
        <div
          class="text-xs truncate"
        >{{ artists }}</div>
      </div>
      <div
        class="flex-shrink-0 ml-auto flex items-center justify-center w-10 h-10"
      >
        <ph-spotify-logo
          size="24"
          weight="fill"
        />
      </div>
    </div>
  </a>
</template>

<script>

import { computed, defineComponent, onMounted, ref } from "@nuxtjs/composition-api";
import axios from "axios"
import { PhPlay, PhSpotifyLogo } from "phosphor-vue"

export default defineComponent({
  components: {
    PhPlay,
    PhSpotifyLogo
  },

  setup(props) {

    let playing = ref(undefined)

    onMounted(() => {
      axios.get("https://api.spotify.com/v1/me/player/currently-playing", {
        headers: {
          "Authorization": "Bearer BQB5YTwhQTjopCu4J42knmR0Hjq0RDnBShYNwIELe-pS0dMSIQ-yRrfZ29iff1UVNv5m7MvrXotIzKs0lR1MGrnaVNN2wuxx6ftPq-jdxGLVroejWzHPS_emvUzJYxg1ti3IqrDs4_-oIatC_A"
        }
      }).then(res => {
        let data = res.data
        playing.value = data
      })
    })

    let image = computed(() => {
      return playing.value.item?.album?.images?.find(image => image.height === 64)
    })

    let artists = computed(() => {
      return playing.value.item?.album?.artists?.map(artist => artist.name).join(", ")
    })

    let url = computed(() => {
      return playing.value.item?.album?.artists?.map(artist => artist.name).join(", ")
    })


    return {
      playing,
      image,
      artists
    }
  }

})
</script>