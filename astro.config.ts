import image from '@astrojs/image';
import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';
import { defineConfig } from 'astro/config';
import { visualizer } from 'rollup-plugin-visualizer';
// import wasm from 'vite-plugin-wasm';


// https://astro.build/config
export default defineConfig({
  // output: 'server',
  site:'https://ex3ploiter.github.io',
  integrations: [tailwind(),
    image({
      serviceEntryPoint: '@astrojs/image/sharp',
    }),
    compress(),
  ],
  vite: {
    plugins: [visualizer()],
    resolve: {
      alias: {
        // 'date-fns/locale': 'date-fns/locale/index.js',
      },
    },
  },
});
