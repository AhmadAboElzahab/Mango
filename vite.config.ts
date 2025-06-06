import { TanStackRouterVite } from '@tanstack/router-plugin/vite';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [
    react(),
    TanStackRouterVite({ target: 'react', autoCodeSplitting: true }),
    tsconfigPaths(),
  ],
  server: {
    proxy: {
      '/static': 'http://localhost:8080',
    },
  },
});
