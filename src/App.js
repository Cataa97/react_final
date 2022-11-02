import { ThemeProvider } from '@emotion/react';
import theme from './components/themes/ThemeConfig';
import Home from './pages/home/Home';
import { Container } from '@mui/material';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container sx={{ height: '100vh', bgcolor: 'primary.main', color: 'error.contrastText', p: 1 }} maxWidth="sm lg xl" >
        <Home />
      </Container>
    </ThemeProvider>
  
  );
}

export default App;

