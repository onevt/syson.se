import { defineConfig } from "astro/config";
import compress from "astro-compress";
import prefetch from "@astrojs/prefetch";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";

import solidJs from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  site: "https://www.syson.se",
  integrations: [compress(), prefetch(), sitemap(), solidJs(), robotsTxt()],
});
