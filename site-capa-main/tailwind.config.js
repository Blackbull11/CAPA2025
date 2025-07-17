import tailwindTypo from '@tailwindcss/typography';
import daisyUI from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    "before:opacity-0",
    "before:opacity-70",
    "before:w-0",
    "before:transition-all",
    "before:ease-in",
    "before:duration-700",
    "before:-rotate-1",
    "before:delay-500"
  ],
  theme: {
    extend: {
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite'
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' }
        }
      }
    },
    fontFamily: {
      'sans': ['"Playpen Sans"', 'cursive'],
      'body': ['"Playpen Sans"', 'cursive'],
      'title': ['"Chewy"', 'system-ui'],
      'subtitle': ['"Comfortaa"', 'sans-serif']
    }
  },
  plugins: [tailwindTypo, daisyUI],
  
  daisyui: {
    themes: [
      {
        'capa2024-light':{
          "primary": "#8cdfed",
          "secondary": "#cacaca",
          "accent": "#ff8c00",
          "neutral": "#0d1011",
          "base-100": "#f6f8f8",
        }
      },
      {
        'capa2024-dark':{
          "primary": "#126473",
          "secondary": "#363636",
          "accent": "#ff8c00",
          "neutral": "#eef1f2",
          "base-100": "#070909",
        }
      },
    ],
    darkTheme: "capa2024-dark", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  }

}