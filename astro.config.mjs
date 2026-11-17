import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import netlify from '@astrojs/netlify';
import tailwind from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: netlify(),
  integrations: [
    react()
  ],
  vite: {
    plugins: [tailwind()],
    build: {
      rolldownOptions: {
        output: {
          codeSplitting: {
            groups: [
              { name: 'syntax-highlighting', test: /node_modules\/(?:highlight\.js|lowlight)\// },
              { name: 'document-engine', test: /node_modules\/prosemirror-[^/]+\// },
            ],
          },
        },
      },
    },
    ssr: {
      noExternal: ['react-tweet']
    }
  }
});
