/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        nexora: {
          navy: '#0B192C',
          dark: '#0F172A',
          blue: {
            DEFAULT: '#2563EB',
            dark: '#1D4ED8',
            hover: '#1E40AF',
            light: '#3B82F6',
            50: '#EFF6FF',
            100: '#DBEAFE',
            200: '#BFDBFE',
          },
          cyan: {
            DEFAULT: '#00BFA5',
            dark: '#0D9488',
            hover: '#0F766E',
            light: '#14B8A6',
            50: '#F0FDFA',
            100: '#CCFBF1',
            200: '#99F6E4',
          },
          slate: {
            DEFAULT: '#475569',
            dark: '#1E293B',
            light: '#64748B',
            50: '#F8FAFC',
            100: '#F1F5F9',
            200: '#E2E8F0',
            300: '#CBD5E1',
          }
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(15, 23, 42, 0.05)',
        'soft-hover': '0 12px 30px -4px rgba(37, 99, 235, 0.12)',
        'soft-cyan': '0 12px 30px -4px rgba(0, 191, 165, 0.12)',
        'card': '0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px -1px rgba(0, 0, 0, 0.05)',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      },
      animation: {
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        'float-slow': 'floatSlow 5s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
