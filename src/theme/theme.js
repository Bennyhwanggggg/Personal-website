import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#BFD7ED',
    },
    secondary: {
      main: '#60A3D9', // Your secondary color
    },
    teritary: {
      main: '#0074B7', // Your teritary color
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
});

export default theme;
