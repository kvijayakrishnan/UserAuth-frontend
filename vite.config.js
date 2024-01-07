import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  define:{"process.env.REACT_APP_API_URL": JSON.stringify("https://userauth-tsuw.onrender.com")},
  plugins: [react()],
})
