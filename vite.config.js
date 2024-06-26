import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build',
  },
  css: {
    postcss: {
      plugins: [
        tailwindcss('./tailwind.config.js'), // Specify the path to your tailwind.config.js file
        autoprefixer,
      ],
    },
  },
});