import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'


// https://vite.dev/config/
export default defineConfig({
  base: "./",
  plugins: [
    react(),
  ],
  build: {
    outDir: "dist", // O cualquier otro directorio donde se exporten los archivos
  }
})
