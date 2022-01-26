<template>
  <div>
    <!-- <currently-playing
			class="mb-16"
		/>-->

    <nuxt-img
      preset="avatar"
      src="/me.jpg"
      sizes="xs:480px lg:240px"
      class="w-20 h-20 rounded-full mb-6"
    />
    <div
      class="mb-1 text-2xl font-semibold font-outfit text-gray-900 dark:text-white transition-colors duration-200"
    >
      Daniel Schneider
    </div>
    <div
      class="mb-4 text font-normal text-gray-700 dark:text-gray-200 transition-colors duration-200"
    >
      VP of engineering at
      <b>Hotellistat</b>
    </div>
    <div class="mb-12">
      Creating software, finding solutions to hard problems and designing user
      interfaces is what I'm all about.
    </div>

    <h4
      class="text-gray-700 dark:text-gray-200 transition-colors duration-200 mb-1"
    >
      Languages
    </h4>
    <div class="mb-12">German & English</div>

    <h4
      class="text-gray-700 dark:text-gray-200 transition-colors duration-200 mb-1"
    >
      Areas of interest
    </h4>
    <div class="mb-12">
      Distributed systems · Software engineering · Process automation · UX/UI
    </div>

    <h4
      class="text-gray-700 dark:text-gray-200 transition-colors duration-200 mb-1"
    >
      Contact
    </h4>
    <div>Reach me at</div>
    <div class="mb-8">
      <client-only placeholder="Tricking them puny bots...">
        <address class="not-italic font-gray-200">
          daniel.schneider@eramux.com
        </address>
      </client-only>
    </div>
    <div
      class="flex gap-4 mb-16 text-gray-700 dark:text-gray-200 transition-colors duration-200"
    >
      <a href="https://twitter.com/dnl_sndr" target="_blank">
        <ph-twitter-logo size="24" weight="light" />
      </a>
      <a href="https://github.com/dnlsndr" target="_blank">
        <ph-github-logo size="24" weight="light" />
      </a>
    </div>

    <separator class="col-span-full mb-16 font-outfit">Stats</separator>
    <!-- tes -->
    <div class="grid lg:grid-cols-3 gap-y-8 gap-x-16 mb-16">
      <div class="flex gap-x-4 lg:flex-col items-baseline lg:items-center">
        <div
          class="text-2xl font-outfit text-gray-800 dark:text-white transition-colors duration-200"
        >
          {{ age }}
        </div>
        <div class="text-base">years old</div>
      </div>
      <div class="flex gap-x-4 lg:flex-col items-baseline lg:items-center">
        <div
          class="text-2xl font-outfit text-gray-800 dark:text-white transition-colors duration-200"
        >
          {{ totalExperience }}
        </div>
        <div class="text-base">years experience</div>
      </div>
      <div class="flex gap-x-4 lg:flex-col items-baseline lg:items-center">
        <div
          class="text-2xl font-outfit text-gray-800 dark:text-white transition-colors duration-200"
        >
          3
          <span class="text-sm">±2</span>
        </div>
        <div class="text-base">coffees a day</div>
      </div>
    </div>
    <separator class="col-span-full mb-16 font-outfit"
      >Software stack</separator
    >
    <div class="mb-16 grid grid-cols-1 lg:grid-cols-2 gap-8 gap-x-16">
      <div class="flex items-center">
        <div
          class="text-lg font-outfit text-gray-800 dark:text-white transition-colors duration-200"
        >
          Manjaro Linux
        </div>
        <div class="ml-auto">OS</div>
      </div>
      <div class="flex items-center">
        <div
          class="text-lg font-outfit text-gray-800 dark:text-white transition-colors duration-200"
        >
          Kubernetes
        </div>
        <div class="ml-auto">container orchestration</div>
      </div>
      <div class="flex items-center">
        <div
          class="text-lg font-outfit text-gray-800 dark:text-white transition-colors duration-200"
        >
          VSCode
        </div>
        <div class="ml-auto">editor</div>
      </div>
      <div class="flex items-center">
        <div
          class="text-lg font-outfit text-gray-800 dark:text-white transition-colors duration-200"
        >
          Slack
        </div>
        <div class="ml-auto">communication</div>
      </div>
      <div class="flex items-center">
        <div
          class="text-lg font-outfit text-gray-800 dark:text-white transition-colors duration-200"
        >
          Figma
        </div>
        <div class="ml-auto">UX/UI design</div>
      </div>
      <div class="flex items-center">
        <div
          class="text-lg font-outfit text-gray-800 dark:text-white transition-colors duration-200"
        >
          GitHub
        </div>
        <div class="ml-auto">VCS</div>
      </div>
      <div class="flex items-center">
        <div
          class="text-lg font-outfit text-gray-800 dark:text-white transition-colors duration-200"
        >
          Rust
        </div>
        <div class="ml-auto">systems</div>
      </div>
      <div class="flex items-center">
        <div
          class="text-lg font-outfit text-gray-800 dark:text-white transition-colors duration-200"
        >
          Golang
        </div>
        <div class="ml-auto">microservices</div>
      </div>
      <div class="flex items-center">
        <div
          class="text-lg font-outfit text-gray-800 dark:text-white transition-colors duration-200"
        >
          Vue.js
        </div>
        <div class="ml-auto">frontend</div>
      </div>
    </div>
    <separator class="col-span-full mb-16 font-outfit"
      >Hardware stack</separator
    >
    <div class="mb-16 grid grid-cols-1 lg:grid-cols-2 gap-8 gap-x-16">
      <div class="flex items-center">
        <div
          class="text-lg font-outfit text-gray-800 dark:text-white transition-colors duration-200"
        >
          OnePlus 7 Pro
        </div>
        <div class="ml-auto">phone</div>
      </div>
      <div class="flex items-baseline">
        <div
          class="text-lg font-outfit text-gray-800 dark:text-white transition-colors duration-200"
        >
          HermanMiller New Aeron
        </div>
        <div class="ml-auto">chair</div>
      </div>
      <div class="flex items-baseline">
        <div
          class="text-lg font-outfit text-gray-800 dark:text-white transition-colors duration-200"
        >
          2 x Dell U2717D
        </div>
        <div class="ml-auto">monitor</div>
      </div>
      <div class="flex items-baseline">
        <div
          class="text-lg font-outfit text-gray-800 dark:text-white transition-colors duration-200"
        >
          MX Master 3
        </div>
        <div class="ml-auto">mouse</div>
      </div>
      <div class="flex items-baseline">
        <div
          class="text-lg font-outfit text-gray-800 dark:text-white transition-colors duration-200"
        >
          60% DIY with QMK
        </div>
        <div class="ml-auto">keyboard</div>
      </div>
      <div class="flex items-baseline">
        <div
          class="text-lg font-outfit text-gray-800 dark:text-white transition-colors duration-200"
        >
          Bose NC 700
        </div>
        <div class="ml-auto">headphones</div>
      </div>
      <div class="flex items-baseline">
        <div
          class="text-lg font-outfit text-gray-800 dark:text-white transition-colors duration-200"
        >
          RODE NT-USB mini
        </div>
        <div class="ml-auto">microphone</div>
      </div>
      <div class="flex items-baseline">
        <div
          class="text-lg font-outfit text-gray-800 dark:text-white transition-colors duration-200"
        >
          C920 HD Pro
        </div>
        <div class="ml-auto">webcam</div>
      </div>
    </div>

    <separator class="col-span-full mb-16 font-outfit">Experience</separator>
    <div class="mb-16 grid lg:grid-cols-2 grid-flow-row-dense gap-16">
      <div v-for="(experience, index) in experiences" :key="index">
        <div class="flex items-baseline mb-4">
          <div
            class="text-2xl font-outfit text-gray-800 dark:text-white transition-colors duration-200"
          >
            {{ experience.distance }}
          </div>
          <div class="text-base ml-4">years</div>
        </div>

        <article
          class="block prose-p:mb-0 prose prose-gray text-gray-500 dark:text-gray-400 prose-h3:text-lg dark:prose-invert prose-headings:text-gray-700 dark:prose-headings:text-gray-200 transition-colors duration-200 prose-headings:mt-0 prose-headings:mb-2 prose-headings:transition-colors prose-headings:duration-200 prose-headings:font-medium prose-p:leading-normal"
        >
          <NuxtContent :document="experience" />
        </article>
      </div>
    </div>
    <separator class="mb-16">Favorite OSS projects</separator>

    <div class="flex flex-wrap gap-2">
      <div
        v-for="technology of technologies"
        class="bg-gray-200 dark:bg-gray-800 px-3 rounded-full"
      >
        {{ technology }}
      </div>
    </div>
  </div>
</template>

<script>
import {
  PhArrowRight,
  PhTwitterLogo,
  PhGithubLogo,
} from '@dnlsndr/vue-phosphor-icons'
import Separator from '@/components/Separator.vue'
// import CurrentlyPlaying from '@/components/CurrentlyPlaying.vue'
export default {
  components: {
    PhArrowRight,
    Separator,
    PhTwitterLogo,
    PhGithubLogo,
    // CurrentlyPlaying,
  },
  head() {
    return {
      title: 'Daniel Schneider',
      meta: [
        {
          name: 'description',
          content: "Hi! I'm Daniel Schneider",
        },
        {
          property: 'og:title',
          content: 'Daniel Schneider',
        },
        {
          property: 'og:description',
          content: "Hi! I'm Daniel Schneider",
        },
        {
          property: 'twitter:title',
          content: 'Daniel Schneider',
        },
        {
          property: 'twitter:description',
          content: "Hi! I'm Daniel Schneider",
        },
      ],
    }
  },

  async asyncData({ $content, store, app, params, error }) {
    // let technologies = await $content('technologies', { deep: true })
    //   .sortBy('position', 'asc')
    //   .sortBy('knowledge', 'desc')
    //   .sortBy('title', 'asc')
    //   .fetch()

    let technologies = [
      'vue.js',
      'NestJS',
      'Docker',
      'Kubernetes',
      'Node.js/Deno',
      'Rust',
      'Golang',
      'Vite',
      'Phosphor Icons',
    ]

    let experiences = await $content('experience', { deep: true })
      .sortBy('start', 'desc')
      .fetch()

    function monthDiff(d1, d2) {
      var months
      months = (d2.getFullYear() - d1.getFullYear()) * 12
      months -= d1.getMonth()
      months += d2.getMonth()
      return months <= 0 ? 0 : months
    }

    let age = (monthDiff(new Date(1998, 9, 8), new Date()) / 12).toFixed(1)

    let totalExperience = experiences
      .map(
        (item) =>
          monthDiff(
            new Date(item.start),
            item.end == 'now' ? new Date() : new Date(item.end)
          ) / 12
      )
      .reduce((a, b) => a + b)
      .toFixed(1)

    experiences = experiences.map((exp) => ({
      ...exp,
      distance: (
        monthDiff(
          new Date(exp.start),
          exp.end == 'now' ? new Date() : new Date(exp.end)
        ) / 12
      ).toFixed(1),
    }))

    return {
      age,
      totalExperience,
      technologies,
      experiences,
    }
  },
}
</script>
