import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// For custom domain GitHub Pages (e.g., https://ahmetrasimbeyhan.online),
// base must be '/'
export default defineConfig({
  plugins: [react()],
  base: '/'
});


