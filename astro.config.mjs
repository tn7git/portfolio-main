import { defineConfig } from 'astro/config';

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: 'https://tn7git.github.io',
  base: '/portfolio-main',
  experimental: {
   viewTransitions: true 
  },
  output: "server",
  adapter: vercel(),
  
  
});