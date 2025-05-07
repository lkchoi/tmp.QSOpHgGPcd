
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import 'dotenv/config';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    __WORKOS_JWT__: JSON.stringify(process.env.WORKOS_JWT),
  },
});
