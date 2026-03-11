/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Blush Romance palette — matching the app
        primary: {
          50: '#fef2f4',
          100: '#fde6ea',
          200: '#fbd0d9',
          300: '#f8a4b8',
          400: '#f27a9b',
          500: '#e74c7e',
          600: '#d42a6b',
          700: '#b21d59',
          800: '#951b4f',
          900: '#7f1b49',
          950: '#460a24',
        },
        accent: {
          50: '#fdf4f8',
          100: '#fce8f3',
          200: '#fbd0e8',
          300: '#f9a8d4',
          400: '#f472b6',
          500: '#ec4899',
          600: '#db2777',
          700: '#be185d',
          800: '#9d174d',
          900: '#831843',
          950: '#500724',
        },
        blush: {
          50: '#fff5f7',
          100: '#ffe8ed',
          200: '#ffd4dd',
          300: '#ffb3c2',
          400: '#ff8da5',
          500: '#ff6b8a',
          600: '#e84872',
          700: '#c4305a',
          800: '#a22a4e',
          900: '#882747',
          950: '#4d1025',
        },
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
