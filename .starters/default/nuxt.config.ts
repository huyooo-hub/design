export default defineNuxtConfig({
  // https://github.com/nuxt-themes/docus
  extends: ["@huyooo-hub/design"],
  devtools: { enabled: true },

  modules: [// Remove it if you don't use Plausible analytics
  // https://github.com/nuxt-modules/plausible
  "@nuxtjs/plausible", "@nuxt/image"],
});