module.exports = {
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '-xl': {'max': '1279px'},
      'xxl': '1600px',
      'xxxl': '2499px'
    },
    fontFamily: {
      header: ['Roboto'],
      body: ['Source Sans Pro']
    },
    colors: {
      transparent: 'transparent',
      veryLightGrey: '#e1e1e1',
      veryLightGrey2: '#f1f1f1',
      lightGrey: '#fafafa',
      grey: '#cccccc',
      grey2: '#999999',
      brownGrey: '#9c9c9c',
      slateGrey: '#646569',
      battleshipGrey: '#777779',
      black: '#000000',
      offBlack: '#333333',
      white: '#ffffff',
      red: '#ba0c2f',
      outline: '#4D90FE',
      cerulean: '#008fbe',
      blue: '#0073B5',
      darkpurple: '#5b129b',
      graphite: '#454343',
      rosegold:'#9C6D74',
      silver:'#c0c0c0'
    },
    letterSpacing: {
      'normal': 'normal',
      '1': '1px',
      '.75': '.75px',
      '.5' :'.5px'
    },
    lineHeight: {
      inherit: 'inherit',
      none: 1,
      tight: 1.25,
      snug: 1.375,
      normal: 1.5,
      relaxed: 1.75,
      loose: 2,
      open: 2.3
    },
    fontSize: {
      '10': '10px',
      '11': '11px',
      '12': '12px',
      '13': '13px',
      '14': '14px',
      '15': '15px',
      'base': '16px',
      '17': '17px',
      '18': '18px',
      '19': '19px',
      '20': '20px',
      '22': '22px',
      '25': '25px',
      '30': '30px',
      '35': '35px',
      '40': '40px',
      '45': '45px',
      '50': '50px',
      '60': '60px'
    },
    extend: {
      zIndex: {
        '2': 2
      },
      maxWidth: {
        '2xs': '16rem',
        '3xs': '12rem',
        '4xs': '10rem',
        '5xs': '8rem',
        '6xs': '6rem'
      },
      minWidth: {
        '3xs': '8rem',
        '2xs': '12rem',
        'xs': '16rem',
        'sm': '20rem',
        'md': '28rem',
        'lg': '32rem',
        'xl': '36rem',
        '2xl': '42rem'
      },
      maxHeight: {
        '30': '30px',
        '300': '300px',
        '500': '500px'
      },
      inset: {
        '25p': '25px',
        '50p': '50px',
        '100p': '100px',
        '150p': '150px',
        '250p':'250px',
        '5': '5%',
        '10': '10%',
        '20': '20%',
        '30': '30%',
        '40': '40%',
        '50': '50%',
        '100': '100%'
      }
    }
  },
  variants: {
    
  },
  plugins: [],
  corePlugins: {
    container: false
  }
}