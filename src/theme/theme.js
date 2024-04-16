import { createTheme } from '@mui/material/styles';
import { common } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: '#BFD7ED',
    },
    secondary: {
      main: '#60A3D9', // Your secondary color
    },
    accent: common.white,
    text:  {
        primary: '#003B73',
        secondary: '#0074B7',
    }
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
});

export default theme;
