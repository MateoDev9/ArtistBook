/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBg: '#0f172a', /* slate-900 */
        cardBg: '#1e293b', /* slate-800 */
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
