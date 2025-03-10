/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif'],
      },
      colors: {
        primary: '#007AFF', // Apple Blue
        secondary: '#5856D6', // Apple Purple
        neutral: {
          850: '#1D1D1F', // Apple Dark Gray
        },
        apple: {
          gray: '#F5F5F7',
          blue: '#007AFF',
          purple: '#5856D6',
          pink: '#FF2D55',
          green: '#34C759',
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
};