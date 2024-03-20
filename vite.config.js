import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// change the build dircory 

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "build", // Change 'new_build_directory_name' to your desired name
  },
});
