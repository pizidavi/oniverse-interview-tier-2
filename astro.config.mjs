// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import typedLinks from 'astro-typed-links';

// https://astro.build/config
export default defineConfig({
  integrations: [typedLinks()],
  vite: {
    plugins: [tailwindcss()],
  },
});
