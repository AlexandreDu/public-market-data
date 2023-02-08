/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './tests/setup.ts',
  },
  plugins: [
    react({
      babel: {
        plugins: [
          [
            'babel-plugin-styled-components',
            {
              displayName: true,
              fileName: false,
            },
          ],
        ],
      },
    }),
  ],
});
