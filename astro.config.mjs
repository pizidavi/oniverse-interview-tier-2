// @ts-check
/* eslint-disable */
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import typedLinks from 'astro-typed-links';
import { loadEnv } from 'vite';

const { SITE_URL, BASE_URL } = loadEnv(process.env.NODE_ENV ?? 'development', process.cwd(), '');

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  base: BASE_URL,
  integrations: [typedLinks()],
  vite: {
    plugins: [tailwindcss()],
  },
});
