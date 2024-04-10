const DarkStyle = {
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
    }
  },
  palette: {
    background: {
      primary: '#032733',
      secondary: '#07485b',
      third: '#00181e',
      darkgreen: '#011c23',
    },
    fontColor: {
      primary: '#FFFFFF',
      secondary: '#E6F4F1',
      third: '#95B1AF',
      gray: '#747474',
      green: '#47C3C1',
    },
    borderColor: {
      primary: '#2C2C2C',
      secondary: '#D4D4D4',
    },
    oppositeBackground: {
      primary: '#FFFFFF',
      secondary: '#F4F4F4',
    },
    oppositeFontColor: {
      primary: '#0F0F0F',
      secondary: '#3D3D3D',
    }
  },
  typography: {
    fontFamily: "'Brutal Type', sans-serif",
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },
}

export default DarkStyle;