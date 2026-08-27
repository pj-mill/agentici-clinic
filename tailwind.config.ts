import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        clinic: {
          ink: '#17212b',
          teal: '#0f766e',
          mist: '#e6fffb',
          coral: '#f97316',
        },
      },
    },
  },
  plugins: [],
}

export default config
