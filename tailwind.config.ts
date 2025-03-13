import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        'brand-primary': 'var(--brand-primary)',
        'brand-secondary': 'var(--brand-secondary)',

        /* Text colors */
        primary: 'var(--text-primary)',
        secondary: 'var(--text-secondary)',
        ternary: 'var(--text-ternary)',
        invert: 'var(--text-invert)',
        error: 'var(--text-error)'
      },
      backgroundColor: {
        /* Surface colors */
        primary: 'var(--surface-primary)',
        secondary: 'var(--surface-secondary)',
        component: 'var(--surface-component)',
        'component-secondary': 'var(--surface-component-secondary)',
        'component-secondary-hover': 'var(--surface-component-secondary-hover)',
        'component-hover': 'var(--surface-component-hover)',
        hover: 'var(--surface-hover)',
        accent: 'var(--surface-accent)'
      },
      borderColor: {
        DEFAULT: 'var(--border-primary)',
        primary: 'var(--border-primary)'
      },
      fontFamily: {
        accent: ['var(--font-accent)'],
        base: ['var(--font-base)'],
        brand: ['var(--font-brand)'],
        'accent-secondary': ['var(--font-accent-secondary)']
      },
      fontSize: {
        xs: '0.6rem', // 12px
        sm: '0.75rem', // 14px
        base: '0.875rem', // 16px
        lg: '1rem', // 18px
        xl: '1.1rem', // 20px
        '2xl': '1.25rem', // 24px
        '3xl': '1.5rem', // 30px
        '4xl': '1.875rem', // 36px
        '5xl': '2.25rem', // 48px
        '6xl': '3rem', // 60px
        '7xl': '3.75rem', // 72px
        '8xl': '4.5rem', // 96px
        '9xl': '6rem' // 128px
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' }
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' }
        },
        blink: {
          '0%': { opacity: '0.2' },
          '20%': { opacity: '1' },
          '100%': { opacity: '0.2' }
        }
      },
      animation: {
        fadeIn: 'fadeIn .3s ease-in-out',
        carousel: 'marquee 60s linear infinite',
        blink: 'blink 1.4s both infinite'
      }
    }
  },
  future: {
    hoverOnlyWhenSupported: true
  },
  plugins: [
    require('@tailwindcss/container-queries'),
    require('@tailwindcss/typography'),
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          'animation-delay': (value) => {
            return {
              'animation-delay': value
            };
          }
        },
        {
          values: theme('transitionDelay')
        }
      );
    })
  ]
};

export default config;
