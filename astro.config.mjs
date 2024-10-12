// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import solidJs from "@astrojs/solid-js";
import vercelStatic from "@astrojs/vercel/static";

// https://astro.build/config
export default defineConfig({
  site: "https://yutohosaka.com",
  integrations: [mdx(), sitemap(), icon(), solidJs()],
  trailingSlash: "never",
  build: {
    assets: "assets",
    format: "directory",
  },
  output: "static",
  adapter: vercelStatic({
    webAnalytics: {
      enabled: true,
    },
  }),
  redirects: {
    "/": "/en",
  },
});
