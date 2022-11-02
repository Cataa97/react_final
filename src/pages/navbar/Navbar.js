import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import theme from '../../components/themes/ThemeConfig';
import { ThemeProvider } from '@emotion/react';
import SmartToyTwoToneIcon from '@mui/icons-material/SmartToyTwoTone';



const pages = ['Contacto', 'Proyectos', 'Login'];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (

    <ThemeProvider theme={theme}>
      <AppBar position="fixed" id='navbar' color="transparent" sx={{
        "& > .MuiBackdrop-root": {
          backdropFilter: "blur(2px)"
        }
      }}>
        <Container maxWidth="xl"  >
          <Toolbar disableGutters >
            <SmartToyTwoToneIcon color='primary' sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} className='rocketghost' />
            <SmartToyTwoToneIcon color='secondary' sx={{ display: { xs: 'none', md: 'flex' }, mr: 2 }} />
            <Typography

              variant="h6"
              noWrap
              component={Link} to="/"
              href="/"


              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                textDecoration: 'none'
              }}
              color='text.primary'
            >
              CATALINA
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}   >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color='secondary'
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} component={Link} to={page} onClick={handleCloseNavMenu}  >
                    <Typography textAlign="center">{page} </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <SmartToyTwoToneIcon color='secondary' sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component={Link} to="/"
              href=""
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                textDecoration: 'none',
                color: 'text.primary'
              }}
            >
              CATALINA
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  component={Link} to={page}
                  sx={{ my: 2, display: 'block' }}
                  color='secondary'
                >
                  {page}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider >



  );
};
export default ResponsiveAppBar;
