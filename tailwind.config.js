const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    screens: {
      xs: '410px',
      ...defaultTheme.screens,
    },
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.5rem' }],
      base: ['1rem', { lineHeight: '1.5rem' }],
      lg: ['1.125rem', { lineHeight: '2rem' }],
      xl: ['1.25rem', { lineHeight: '1.75rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['2rem', { lineHeight: '3rem' }],
      '4xl': ['2.5rem', { lineHeight: '3rem' }],
      '5xl': ['3rem', { lineHeight: '1' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
    },
    extend: {
      transformOrigin: {
        bottom: 'center bottom',
      },
      animation: {
        'fade-in': 'fade-in 0.5s linear forwards',
        marquee: 'marquee var(--marquee-duration) linear infinite',
        'spin-slow': 'spin 4s linear infinite',
        'spin-slower': 'spin 6s linear infinite',
        'spin-reverse': 'spin-reverse 1s linear infinite',
        'spin-reverse-slow': 'spin-reverse 4s linear infinite',
        'spin-reverse-slower': 'spin-reverse 6s linear infinite',
        glow: 'glow 3s ease-in-out infinite',
        glowItem: 'glowItem 5s ease-in-out infinite',
        glowBullet: 'glowBullet 2s ease-in-out infinite',
        rotate: 'rotate 5s ease-in-out infinite',
      },
      // backgroundImage : {
      //   'stars':'url()'
      // },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      height: {
        xl: '120px',
        l: '96px',
        m: '72px',
        s: '48px',
      },
      colors: ({ colors }) => ({
        gray: colors.neutral,
      }),
      fontFamily: {
        // sans: ['Inter', ...defaultTheme.fontFamily.sans],
        montserrat: ['Montserrat', 'sans-serif'],
        sarmady: ['Sarmady', 'sans-serif'],
        adam: ['Adam', 'sans-serif'],
      },
      // @keyframes glow{0%,60%{filter:brightness(100%)}30%{filter:brightness(150%)}}
      keyframes: {
        'fade-in': {
          from: {
            opacity: 0,
          },
          to: {
            opacity: 1,
          },
        },
        marquee: {
          '100%': {
            transform: 'translateY(-50%)',
          },
        },
        'spin-reverse': {
          to: {
            transform: 'rotate(-360deg)',
          },
        },
        glow: {
          '0%, 100%': { filter: 'brightness(100%)', opacity: 0.3 },
          '30%': { filter: 'brightness(150%)', opacity: 1 },
        },
        glowItem: {
          '0%, 100%': { filter: 'brightness(100%)' },
          '30%': { filter: 'brightness(115%)' },
        },
        glowBullet: {
          '0%, 100%': { opacity: 0.5 },
          '30%': { opacity: 1 },
        },
        rotate: {
          // '0%, 24.75%': { transform: 'rotate(0deg)' },
          // '25%, 49.75%': { transform: 'rotate(90deg)' },
          // '50%, 74.75%': { transform: 'rotate(180deg)' },
          // '75%, 99.75%': { transform: 'rotate(270deg)' },
          // '100%': { transform: 'rotate(360deg)' },
          // '0%': { transform: 'rotate(0deg)' },
          // '100%': { transform: 'rotate(360deg)' },
          '0%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(90deg)' },

          '50%': { transform: 'rotate(180deg)' },
          '75%': { transform: 'rotate(270deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      maxWidth: {
        '2xl': '40rem',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
