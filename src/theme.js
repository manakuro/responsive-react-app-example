const theme = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fontSizes: {
    small: 14,
    medium: 16,
    large: 18,

    h5: {
      sm: 12,
      md: 14,
      lg: 16,
    },
    h4: {
      sm: 16,
      md: 18,
      lg: 22,
    },
    h3: {
      sm: 19,
      md: 22,
      lg: 28,
    },
    h2: {
      sm: 20,
      md: 22,
      lg: 24
    },
    h1: {
      sm: 24,
      md: 26,
      lg: 30
    }
  },
  fontWeights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  width: [16, 32, 64, 128, 256],
  heights: [16, 32, 64, 128, 256],
  colors: {
    black: '#000',
    gray: ' #777',
    'dark-gray': '#333',
    'light-gray': '#eee',
  },

  // https://material-ui.com/customization/breakpoints/
  breakpoints: {
    xs: '0',
    sm: '600px',
    md: '960px',
    lg: '1280px',
    xl: '1920px',
  },
}


export default theme
