const plugin = require('tailwindcss');

// 1 = 0.2rem, 0.5 = 0.1rem (global 1rem = 10px)
const spacing = [...Array(200).keys()]
  .map(i => i / 2)
  .reduce((i, j) => ({ ...i, [j]: `${(j * 0.2).toFixed(1)}rem` }), {
    DEFAULT: '0rem',
  });

// include classes which should be added at the time of compiling css
const safelist = [];

const fonts = {
  fontSize: {
    10: ['1rem', '1.4rem'],
    12: ['1.2rem', '1.6rem'],
    14: ['1.4rem', '1.8rem'],
    16: ['1.6rem', '2rem'],
    18: ['1.8rem', '2.4rem'],
    22: ['2.2rem', '2.8rem'],
  },
  fontWeight: {
    thin: 100,
    regular: 400,
    semibold: 600,
    bold: 900,
  },
  letterSpacing: {
    tight: '-0.05em',
    normal: '0',
    wide: '0.05em',
  },
  fontFamily: {
    sans: ['Inter', 'sans-serif'],
    serif: ['Merriweather', 'serif'],
  },
};

// define the color theme for the project use css variable for the customized theme
const colors = {
  transparent: 'transparent',
  current: 'currentColor',
  black: '#000',
  white: '#fff',
  gray: {
    1: '#f7fafc',
    2: '#edf2f7',
    3: '#e2e8f0',
    4: '#cbd5e0',
    5: '#a0aec0',
    6: '#718096',
    7: '#4a5568',
    8: '#2d3748',
  },
  primary: '',
  secondary: '',
};

// use css variable for the themes drawer: '0.4rem'
const borderRadius = {
  none: '0',
  sm: '0.25rem',
  md: '0.5rem',
  lg: '0.75rem',
  xl: '1rem',
  full: '9999px',
  DEFAULT: '0.5rem',
};

const animation = {
  none: 'none',
  spin: 'spin 1s linear infinite',
  ping: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
  bounce: 'bounce 1s infinite',
  pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
};

const customPlugins = ({
  addBase,
  addComponents,
  addUtilities,
  addVariants,
  matchUtilities,
}) => {
  addBase({
    // add base styles here
    // h1: { fontSize: '2rem' },
    // 'h1, h2, h3, h4, h5, h6': {
    //   fontFamily: 'Merriweather, serif',
    // },
  });

  addComponents({
    // add components styles here
    // '.btn': {
    //   padding: '.5rem 1rem',
    //   borderRadius: '.25rem',
    //   fontWeight: '600',
    // },
  });

  addUtilities({
    // add utilities classes here with their styles
    // '.flex-RCC': {
    //   display: 'flex',
    //   flexDirection: 'row',
    //   justifyContent: 'center',
    //   alignItems: 'center',
    // },
  });

  const variants = [['hocus', ['&:hover', '&:focus']]];
  variants.forEach(([name, list]) => {
    addVariants(name, list);
  });

  matchUtilities(
    {
      // match utilities classes here with their styles
      // '.text-shadow': { 'text-shadow': '0 2px 5px rgba(0, 0, 0, 0.5)' },
    },
    { variants: ['responsive'] },
  );
};

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    ...fonts,
    screens: { sm: '640px', md: '768px', lg: '1024px', xl: '1280px' },
    spacing,
    borderRadius,
    colors,
    animation,
    // maxWidth,
    // extend: {},
    // columns,
    // aria,
    // aspectRatio,
  },
  safelist,
  variants: {
    extend: {},
  },
  plugins: [plugin(customPlugins)],
  prefix: 't-',
};
