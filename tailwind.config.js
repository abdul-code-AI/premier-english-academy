/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brandRed: '#FF3D00',
        brandRedDark: '#E02E00',
        brandRedLight: '#FF6A3D',
        deepBlack: '#0A0A0A',
        charcoal: '#1A1A1A',
        cleanWhite: '#FFFFFF',
        softGray: '#F5F5F5',
        mediumGray: '#737373',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        redGlow: '0 0 0 1px rgba(255, 61, 0, 0.4), 0 10px 40px -10px rgba(255, 61, 0, 0.35)',
        redGlowSoft: '0 0 30px -5px rgba(255, 61, 0, 0.25)',
        card: '0 4px 24px -8px rgba(10, 10, 10, 0.12)',
      },
      keyframes: {
        voiceWave: {
          '0%, 100%': { transform: 'scaleY(0.35)', opacity: '0.5' },
          '50%': { transform: 'scaleY(1)', opacity: '1' },
        },
        pulseRed: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(255, 61, 0, 0.55)' },
          '50%': { boxShadow: '0 0 0 14px rgba(255, 61, 0, 0)' },
        },
        ringExpand: {
          '0%': { transform: 'scale(0.8)', opacity: '0.7' },
          '100%': { transform: 'scale(2.2)', opacity: '0' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(40px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        fadeUp: {
          '0%': { transform: 'translateY(24px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        voiceWave: 'voiceWave 1.2s ease-in-out infinite',
        pulseRed: 'pulseRed 2.4s ease-out infinite',
        ringExpand: 'ringExpand 3s ease-out infinite',
        slideInRight: 'slideInRight 0.6s ease-out forwards',
        fadeUp: 'fadeUp 0.7s ease-out forwards',
        marquee: 'marquee 30s linear infinite',
      },
    },
  },
  plugins: [],
};
