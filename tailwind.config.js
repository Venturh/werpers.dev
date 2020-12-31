const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');
module.exports = {
  darkMode: 'class',
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ['./**/*.tsx'],
  theme: {
    colors: {
      brand: 'var(--brand)',
      brandContrast: 'var(--brandContrast)',
      error: 'var(--error)',
      success: 'var(--success)',
      gray: colors.coolGray,
      primaryText: 'var(--text-primary)',
      secondaryText: 'var(--text-secondary)',
      primaryBg: 'var(--bg)',
      secondaryBg: 'var(--bg-secondary)',
      accentBg: 'var(--bg-accent)',
      borderBg: 'var(--border-bg)',
    },

    extend: {
      sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      backgroundColor: {
        primary: 'var(--bg)',
        secondary: 'var(--bg-secondary)',
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
        '8/10': '80%',
        '9/10': '90%',
      },
      maxWidth: {
        xsm: '21rem',
      },
    },
  },
  variants: {
    ringColor: ['hover', 'active', 'focus'],
    ringWidth: ['hover', 'active', 'focus'],
    ringOffsetWidth: ['hover', 'active', 'focus'],
  },
  plugins: [require('@tailwindcss/typography')],
};
