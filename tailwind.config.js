/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#2563eb',
        'brand-purple': '#4f46e5',
      },
      boxShadow: {
        'glow': '0 20px 45px rgba(37, 99, 235, 0.45)',
      },
    },
  },
  plugins: [],
}
