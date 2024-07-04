import {
  defineNuxtModule,
  addPlugin,
  createResolver,
  addComponentsDir,
  installModule,
} from "@nuxt/kit";

// Module options TypeScript interface definition
export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: "@huyooo-hub/design",
    configKey: "design",
  },
  defaults: {},
  async setup(options, _nuxt) {
    const resolver = createResolver(import.meta.url);
    installModule("@nuxt/content", {
      documentDriven: false,
      highlight: {
        preload: ["vue", "ts"],
        theme: {
          dark: "github-dark",
          default: "github-light",
        },
      },
    });
    await installModule("@nuxt/icon");
    // addPlugin(resolver.resolve("./runtime/plugin"));
    addComponentsDir({
      path: resolver.resolve("./runtime/components"),
      prefix: "",
      global: true,
      watch: false,
    });
  },
});
