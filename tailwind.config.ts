import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontSize: {
        sm: '0.800rem',
        base: '1rem',
        xl: '1.250rem',
        '2xl': '1.563rem',
        '3xl': '1.954rem',
        '4xl': '2.442rem',
        '5xl': '3.053rem',
      },
      fontFamily: {
        heading: 'Exo',
        body: 'Geologica',
      },
      fontWeight: {
        normal: '400',
        bold: '700',
      },
      colors: {
        text: {
          50: '#fee7e7',
          100: '#fccfcf',
          200: '#fa9e9e',
          300: '#f76e6e',
          400: '#f53d3d',
          500: '#f20d0d',
          600: '#c20a0a',
          700: '#910808',
          800: '#610505',
          900: '#300303',
          950: '#180101',
        },
        background: {
          50: '#f2f0f4',
          100: '#e4e2e9',
          200: '#cac5d3',
          300: '#afa8bd',
          400: '#948ba7',
          500: '#7a6e91',
          600: '#615874',
          700: '#494257',
          800: '#312c3a',
          900: '#18161d',
          950: '#0A090C',
        },
        primary: {
          50: '#f9ebee',
          100: '#f3d8dc',
          200: '#e7b1b9',
          300: '#db8a96',
          400: '#cf6373',
          500: '#c33c50',
          600: '#9c3040',
          700: '#752430',
          800: '#4e1820',
          900: '#270c10',
          950: '#140608',
        },
        secondary: {
          50: '#fce8eb',
          100: '#fad1d7',
          200: '#f5a3af',
          300: '#f07588',
          400: '#eb4760',
          500: '#e61938',
          600: '#b8142d',
          700: '#8a0f22',
          800: '#5c0a16',
          900: '#2e050b',
          950: '#170306',
        },
        accent: {
          50: '#fde8eb',
          100: '#fad1d7',
          200: '#f5a3af',
          300: '#f07587',
          400: '#ec465f',
          500: '#e71837',
          600: '#b9132c',
          700: '#8a0f21',
          800: '#5c0a16',
          900: '#2e050b',
          950: '#170206',
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
export default config
