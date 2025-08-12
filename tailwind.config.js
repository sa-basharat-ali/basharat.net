/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6C63FF',
          dark: '#5A52D5',
          light: '#8A84FF',
        },
        secondary: {
          DEFAULT: '#00D8FF',
          dark: '#00B3D4',
          light: '#47E3FF',
        },
        dark: {
          DEFAULT: '#121212',
          lighter: '#1E1E1E',
          light: '#282828',
        },
        light: {
          DEFAULT: '#F9FAFB',
          darker: '#E5E7EB',
        },
        accent: '#FF5757',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      backgroundImage: {
        'hero-pattern': "url('/images/hero-bg.jpg')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glow': '0 0 15px rgba(108, 99, 255, 0.5)',
        'neon': '0 0 5px theme(colors.primary.DEFAULT), 0 0 20px theme(colors.primary.dark)',
      },
    },
  },
  plugins: [],
}
