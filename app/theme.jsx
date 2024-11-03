'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'var(--font-roboto)',
    title: {
      fontSize: '24px',
      opacity: 1,
      textAlign: 'left',
    },
    subtitle: {
      fontSize: '18px',
    },
    text: {
      fontSize: '14px',
      opacity: 1,
      textAlign: 'left',
      color: '#0000008A'
    },
  },
  palette: {
    primary: {
      main: '#0A6BB6', // Color principal
    },
    secondary: {
      main: '#086BB5', // Color secundario
    },
    terciary: {
      main: '#0000000D', // Color tercero
    },
    quarter: {
      main: '#EE5A31', // Color cuarto
    },
    background: {
      //   default: '#FFFFFF', // Fondo por defecto
      default: '#FFFFFF', // Fondo por defecto
      color: '#000000'
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: '#0A6BB6',
          border: '2px solid #0A6BB6',
          color: '#F2F2F2',
          font: 'normal normal medium 14px/20px Roboto',
          textAlign: 'left',
          opacity: 1,
          borderRadius: '50px',
          // top: '386px',
          // left: '531px',
          // width: '102px',
          // height: '32px',
          '&:hover': {
            backgroundColor: '#0A6BB6',
            color: '#fff',
          },
        },
      },
    },
  },
});

export default theme;