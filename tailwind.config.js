/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FDFBF7',
          100: '#FAF7F2',
          200: '#F5EFEB',
          300: '#EADBCE',
          400: '#D5BEAC',
        },
        champagne: {
          50: '#FBF8EF',
          100: '#F5EED9',
          200: '#EADBB4',
          300: '#DCC389',
          400: '#CFA862',
          500: '#C5A059',
          600: '#B08842',
          700: '#8E672F',
        },
        blush: {
          50: '#FDF7F7',
          100: '#FAEEEE',
          200: '#F4D8D7',
          300: '#EAB8B6',
          400: '#DD9390',
          500: '#C87370',
        },
        sage: {
          50: '#F5F7F5',
          100: '#EAF1EB',
          200: '#D6E2D8',
          300: '#B5CBBA',
          400: '#94B29A',
          500: '#76987E',
          600: '#5E7B65',
          700: '#4B6251',
          800: '#394A3D',
        },
        charcoal: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
          950: '#0B0F17',
        }
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', 'Cormorant Garamond', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['var(--font-jakarta)', 'Plus Jakarta Sans', 'Inter', '-apple-system', 'sans-serif'],
        script: ['var(--font-great-vibes)', 'Great Vibes', 'cursive'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out forwards',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.85' },
        },
      },
    },
  },
  plugins: [],
};
