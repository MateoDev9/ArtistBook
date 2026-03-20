/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBg: '#030303', /* Pure almost black */
        cardBg: '#0a0a0a', /* Very dark gray */
        accent: {
          neonPink: '#ec4899', /* pink-500 */
          neonPurple: '#a855f7', /* purple-500 */
          neonGreen: '#22c55e', /* green-500 */
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
