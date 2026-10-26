/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary': '#094cb2',
        'tertiary-container': '#bfab49',
        'on-surface': '#1b1c1d',
        'on-surface-variant': '#434653',
        'surface': '#faf9fa',
        'surface-container-lowest': '#ffffff',
        'outline-variant': '#c3c6d5',
        'on-primary': '#ffffff',
        'on-tertiary-container': '#4a3f00',
      },
      fontFamily: {
        'headline': ['Noto Serif'],
        'display': ['Noto Serif'],
        'body': ['Inter'],
        'label': ['Public Sans'],
      },
    },
  },
  plugins: [],
}
