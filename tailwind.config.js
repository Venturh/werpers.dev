const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
	darkMode: 'class',
	content: ['./**/*.{ts,tsx, js,jsx}'],
	theme: {
		colors: {
			'text-primary': cssVarRgbHelper('text-primary'),
			'text-secondary': cssVarRgbHelper('text-secondary'),
			'bg-primary': cssVarRgbHelper('bg-primary'),
			'bg-secondary': cssVarRgbHelper('bg-secondary'),
			'accent-primary': cssVarRgbHelper('accent-primary'),
			'accent-secondary': cssVarRgbHelper('accent-secondary'),
			'brand-primary': cssVarRgbHelper('brand-primary'),
			'brand-secondary': cssVarRgbHelper('brand-secondary'),
			'success-primary': cssVarRgbHelper('success-primary'),
			'success-secondary': cssVarRgbHelper('success-secondary'),
			'error-primary': cssVarRgbHelper('error-primary'),
			'error-secondary': cssVarRgbHelper('error-secondary'),
			white: '#fff',
			black: '#000',
			transparent: 'transparent',
			...colors,
		},
		extend: {
			fontFamily: {
				sans: ['Inter', ...defaultTheme.fontFamily.sans],
			},
			backgroundColor: {
				primary: cssVarRgbHelper('bg-primary'),
				secondary: cssVarRgbHelper('bg-secondary'),
			},
			textColor: {
				primary: cssVarRgbHelper('text-primary'),
				secondary: cssVarRgbHelper('text-secondary'),
			},
			animation: {
				'spin-0.5': 'spin 0.5s linear',
				'spin-1': 'spin 1s linear',
			},
		},
	},
	plugins: [require('@tailwindcss/typography')],
};

function cssVarRgbHelper(cssVariable) {
	return ({ opacityVariable, opacityValue }) => {
		if (opacityValue !== undefined) {
			return `rgba(var(--${cssVariable}), ${opacityValue})`;
		}
		if (opacityVariable !== undefined) {
			return `rgba(var(--${cssVariable}), var(${opacityVariable}, 1))`;
		}
		return `rgb(var(--${cssVariable}))`;
	};
}
