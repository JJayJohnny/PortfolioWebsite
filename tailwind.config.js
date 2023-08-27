/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        bounce: "bounce 0.75s alternate infinite cubic-bezier(0.95, 0.05, 0.795, 0.035)",
      },
      keyframes: {
        bounce: {
          from: {
            transform: "translateY(1px)"
          },
          to: {
            transform: "translateY(0)"
          }
        }
      }
    },
  },
  plugins: [],
  darkMode: 'class'
}
