export default {
  target: 'static',
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'DNLSNDR',
    meta: [
      { charset: 'utf-8' },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0, user-scalable=no"
      },
      { name: "msapplication-TileColor", content: "#2f2f2f" },
      { name: "theme-color", content: "#ffffff" },
      {
        name: 'twitter:site',
        content: '@dnl_sndr',
      },
      {
        name: 'twitter:creator',
        content: '@dnl_sndr',
      },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png?v=jwEPYAL5lv"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png?v=jwEPYAL5lv"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.png?v=jwEPYAL5lv"
      },
      { rel: "manifest", href: "/site.webmanifest?v=jwEPYAL5lv" },
      {
        rel: "mask-icon",
        href: "/safari-pinned-tab.svg?v=jwEPYAL5lv",
        color: "#292929"
      },
      {
        rel: "shortcut icon",
        href: "/favicon.ico?v=jwEPYAL5lv",
        color: "#292929"
      },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossorigin: true
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Courier+Prime:wght@400;700&display=swap",
      }
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    "@/assets/css/main.css",
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/gtag'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    '@nuxt/image',
    '@nuxt/postcss8',
    '@nuxtjs/composition-api/module',
    '@nuxtjs/google-fonts',
  ],

  googleFonts: {
    families: {
      Outfit: {
        wght: [400, 500, 600, 700, 800, 900]
      }
    }
  },

  image: {
    // The screen sizes predefined by `@nuxt/image`:
    screens: {
      xs: 360,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      '2xl': 1536
    },
    presets: {
      avatar: {
        modifiers: {
          format: 'jpg',
          width: 480,
        }
      }
    }
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    // '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    // '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],

  server: {
    host: "0.0.0.0" // default: localhost
  },
  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    analyze: true,
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  }
}
