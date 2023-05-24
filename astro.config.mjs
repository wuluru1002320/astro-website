import { defineConfig } from 'astro/config';
import vue from "@astrojs/vue";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  integrations: [vue(), preact()]
});