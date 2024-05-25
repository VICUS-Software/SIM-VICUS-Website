import { defineConfig } from 'astro/config';

import solidJs from "@astrojs/solid-js";
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

const isGithubpages= import.meta.env.GITHUBPAGES;

// https://astro.build/config
export default defineConfig({
  integrations: [solidJs()],
  site:"https://vicus-software.github.io",
  base:isGithubpages ? "SIM-VICUS-Website" : "",
  vite: {
    plugins: [vanillaExtractPlugin()],
  },
});