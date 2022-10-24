import { createTheme } from '@mui/material/styles';
const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#212121',
    },
    secondary: {
      main: '#00e5ff',
    },
    background: {
      default: '#303030',
      paper: '#424242',
    },
    info: {
      main: '#9e9e9e',
    },
    text: {
      primary: '#ffebee',
    },
    typography: {
      fontFamily: 'Signika',
    },
  },

});


export default theme;


