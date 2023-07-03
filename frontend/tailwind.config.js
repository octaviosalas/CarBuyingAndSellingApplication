/** @type {import('tailwindcss').Config} */
import formsPlugin from '@tailwindcss/forms';
import daisyui from 'daisyui';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    daisyui,
    formsPlugin
  ],
}