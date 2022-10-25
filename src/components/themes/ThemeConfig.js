import { createTheme } from '@mui/material/styles';
import '../styles/style.css';
const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#212121',
    },
    secondary: {
      main: '#4dd0e1',
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
  },
  typography: {
    fontFamily: "'Signika',sans-serif",
  },

});


export default theme;


