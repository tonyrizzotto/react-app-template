import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import react from '@vitejs/plugin-react';

export default {
  root: join(dirname(fileURLToPath(new URL(import.meta.url))), 'src'),
  plugins: [react({ jsxRuntime: 'classic' })],
  mode: 'production',
  build: {
    manifest: true,
    outDir: 'dist',
  },
};
