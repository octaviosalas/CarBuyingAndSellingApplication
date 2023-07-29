import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mongoose from 'mongoose';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    function() {
      mongoose 
    },
  ],
})
