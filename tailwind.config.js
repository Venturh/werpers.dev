const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: 'class',
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ['./**/*.{ts,tsx, js,jsx}'],
  theme: {
    colors: {
      'bg-primary': 'var(--bg-primary)',
      'bg-secondary': 'var(--bg-secondary)',
      accent: 'var(--accent)',
      'text-primary': 'var(--text-primary)',
      'text-secondary': 'var(--text-secondary)',
      'brand-contrast': 'var(--brand-contrast)',
      'brand-darker': 'var(--brand-darker)',
      brand: 'var(--brand)',
      brand15: 'var(--brand15)',
    },

    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      backgroundColor: {
        primary: 'var(--bg-primary)',
      },
      textColor: {
        primary: 'var(--text-primary)',
        secondary: 'var(--text-secondary)',
      },
      width: {
        '1/10': '10%',
        '2/10': '20%',
        '3/10': '30%',
        '4/10': '40%',
        '5/10': '50%',
        '6/10': '60%',
        '1/10': '70%',
      },
      height: { 4.5: '1.125rem' },
      minHeight: { 50: '50vh' },
      maxWidth: {
        xsm: '21rem',
      },
      animation: {
        'spin-0.5': 'spin 0.5s linear',
        'spin-1': 'spin 1s linear',
      },
    },
  },
  variants: {
    extend: {
      ringColor: ['hover', 'active', 'focus'],
      ringWidth: ['hover', 'active', 'focus'],
      ringOffsetWidth: ['hover', 'active', 'focus'],
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
