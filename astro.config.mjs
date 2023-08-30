import { defineConfig } from 'astro/config';

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  // site: 'https://tn7git.github.io',
  // base: '/portfolio',
  experimental: {
   viewTransitions: true 
  },
  output: "server",
  adapter: vercel(),

  outDir: './my-portfolio'
  
});