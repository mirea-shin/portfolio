import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      // ui-components를 src로 직접 연결
      'ui-components': path.resolve(__dirname, '../ui-components/src'),
    },
  },
  server: {
    fs: {
      // 상위 workspace 접근 허용
      allow: ['..'],
    },
  },
});
