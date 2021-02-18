import colors from './colors'
const { dark, white } = colors;

export default {
  palette: {
    type: "dark",
    primary: {
      main: dark,
    },
    secondary: {
      main: white,
    },
  },
  typography: {
    h6: {
      fontFamily: "PT Sans",
      fontSize: '18px',
      fontWeight: 'bold',
      letterSpacing: '0.01px',
      lineHeight: '23px'
    },
    body2: {
      fontFamily: "PT Sans",
      fontSize: '14px',
      letterSpacing: '0.01px',
      lineHeight: '19px'
    },
    subtitle2: {
      fontFamily: 'PT Sans',
      fontSize: '13px',
      fontWeight: 'bold',
      letterSpacing: '0.01px',
      lineHeight: '18px'
    },
    button: {
      fontFamily: "FS Emeric",
      fontSize: '10px',
      letterSpacing: 0,
      lineHeight: '7.47px',
    }

  },
  overrides: {
    MuiInput: {
      root: {
        color: '#000000',
      },
      underline: {
        "&:before": {
          borderBottom: `1px solid ${dark}`,
        },
        "&:hover": {
          borderBottom: `1px solid ${dark}`,
        }
      },
    }
  }
}

