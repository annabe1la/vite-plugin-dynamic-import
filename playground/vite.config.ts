import { defineConfig } from 'vite'
import dynamicImport from '../dist'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dynamicImport()],
})
