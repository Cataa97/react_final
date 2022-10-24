import { grey } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: grey[900],
      light: grey[800],
    },
    secondary: {
      main: grey[50],
      contrastText: grey[900],
    },
  }

});


export default theme;


