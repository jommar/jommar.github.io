import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.{vue,js,ts}',
    './pages/**/*.{vue,js,ts}',
    './plugins/**/*.{js,ts}',
    './app/**/*.{vue,js,ts}',
    './error.vue'
  ],
  theme: {
    extend: {
      colors: {
        midnight: '#050812',
        neon: '#24e1c1',
        lavender: '#7c54ff',
        coral: '#fb7285'
      },
      fontFamily: {
        sans: ['"IBM Plex Sans"', '"Space Grotesk"', ...defaultTheme.fontFamily.sans],
        display: ['"Space Grotesk"', ...defaultTheme.fontFamily.sans]
      },
      boxShadow: {
        glow: '0 25px 65px rgba(3, 6, 20, 0.55)'
      }
    }
  },
  plugins: []
} satisfies Partial<Config>
