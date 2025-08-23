// @ts-check
/* eslint-disable */
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import typedLinks from 'astro-typed-links';
import { loadEnv } from 'vite';

const { PUBLIC_SITE_URL, PUBLIC_BASE_URL } = loadEnv(
  process.env.NODE_ENV ?? 'development',
  process.cwd(),
  '',
);

// https://astro.build/config
export default defineConfig({
  site: PUBLIC_SITE_URL,
  base: PUBLIC_BASE_URL,
  integrations: [typedLinks()],
  vite: {
    plugins: [tailwindcss()],
  },
});
