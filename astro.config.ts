import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';
import { defineConfig } from 'astro/config';
import { visualizer } from 'rollup-plugin-visualizer';


export default defineConfig({
  site: 'https://ex3ploiter.github.io',
  integrations: [
    tailwind(),
    compress()
  ],
  vite: {
    plugins: [visualizer()],
    build: {
      target: 'esnext'
    }
  },
});
