import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import rehypeExternalLinks from "rehype-external-links";
import remarkParseContent from "./src/lib/utils/remarkParseContent.ts";
import {
  parseTomlToJson,
  reloadOnTomlChange,
} from "./src/lib/utils/tomlUtils.ts";

import icon from "astro-icon";

const config = parseTomlToJson();

let {
  seo: { sitemap: sitemapConfig },
  settings: {
    multilingual: { defaultLanguage },
  },
} = config;

const defaultLocale = defaultLanguage || "de";

// https://astro.build/config
export default defineConfig({
  site: config.site.baseUrl ? config.site.baseUrl : "http://examplesite.com",
  trailingSlash: config.site.trailingSlash ? "always" : "never",
  i18n: {
    locales: [defaultLocale],
    defaultLocale,
    routing: {
      redirectToDefaultLocale: false,
      prefixDefaultLocale: false,
    },
  },
  integrations: [react(), sitemapConfig.enable ? sitemap() : null, mdx(), icon()],
  markdown: {
    rehypePlugins: [
      [
        rehypeExternalLinks,
        {
          rel: "noopener noreferrer nofollow",
          target: "_blank",
        },
      ],
    ],
    remarkPlugins: [remarkParseContent],

    // Code Highlighter https://github.com/shikijs/shiki
    shikiConfig: {
      theme: "light-plus", // https://shiki.style/themes
      wrap: false,
    },
    extendDefaultPlugins: true,
  },
  vite: {
    plugins: [tailwindcss(), reloadOnTomlChange()],
  },
});