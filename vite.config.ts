import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import RubyPlugin from 'vite-plugin-ruby'

export default defineConfig({
  plugins: [
  ssr: {
      noExternal: true,
  },
    react(),
    RubyPlugin(),
  ],
})
