import React from "react";
import Container from '@mui/material/Container';
import { Grid } from "@mui/material";
import Typography from '@mui/material/Typography';
import { Box } from "@mui/system";
import theme from "../../components/themes/ThemeConfig";
import { ThemeProvider } from '@emotion/react';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import '../../components/styles/style.css'


function About() {
  return (
    <ThemeProvider theme={theme}>
      <Container background='transparent' id='container_principal' sx={{ pt: 15 }}>
        <Box>
          <Grid container columnSpacing={{ xs: 1, sm: 2, md: 1 }} >
            <Grid item lg={12} xs={12}>
              <Typography color='text.primary' display='inline' variant="h3" gutterBottom sx={{ mt: 5, ml: 8, textAlign: 'start', }}>
                Catalina Castillo
              </Typography>
              <Avatar alt="Catalina Castillo" src="https://scontent.fscl11-2.fna.fbcdn.net/v/t1.6435-9/94573906_1523400887834515_2483486137931268096_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=174925&_nc_ohc=bdEi4lHy7MYAX8DUwzv&_nc_ht=scontent.fscl11-2.fna&oh=00_AT9fMC0O4QefxDzZ9iDf0lIlHxosDxJW5CYPzRXdXJaZwQ&oe=6377C0B1" sx={{ width: 95, height: 95, display: 'inline-block', ml: .5 }}
              />
              <Typography color='text.primary' variant="h6" gutterBottom sx={{ textAlign: 'start', ml: 8, pt: 0, mt: 0 }}>
                Full Stack Developer (Games / Mobile / Desktop)
              </Typography>

              <Box>
                <Divider sx={{ p: 2, ml:1, textAlign: 'center' }}  >
                  <Chip label="HABILIDADES" color='secondary' />
                </Divider>
              </Box>
              <img className="logo__size_custom" src="https://raw.githubusercontent.com/Cataa97/portafolio/342c6a5ff6fa626f2d16f40338276490511ce5ca/assets/img/css-3.svg" alt="CSS3" />
              <img
                className="logo__size"
                src="https://raw.githubusercontent.com/Cataa97/portafolio/342c6a5ff6fa626f2d16f40338276490511ce5ca/assets/img/logo-javascript.svg"
                alt="Javascript"
              />
              <img className="logo__size" src="https://raw.githubusercontent.com/Cataa97/portafolio/342c6a5ff6fa626f2d16f40338276490511ce5ca/assets/img/react-2.svg" alt="React" />
              <img
                className="logo__size"
                src="https://raw.githubusercontent.com/Cataa97/portafolio/342c6a5ff6fa626f2d16f40338276490511ce5ca/assets/img/nodejs-icon.svg"
                alt="nodejs"
              />
              <img className="logo__size" src="https://raw.githubusercontent.com/Cataa97/portafolio/342c6a5ff6fa626f2d16f40338276490511ce5ca/assets/img/git-icon.svg" alt="git" />
              <img
                className="logo__size"
                src="https://raw.githubusercontent.com/Cataa97/portafolio/c88c420e9541044fc0fed225c7432a3eed72e3c0/assets/img/postgresql.svg"
                alt="postgresql"
              />
            
            </Grid>
          </Grid>
          <Divider sx={{ p: 2, ml: 1 }}>
            <Chip label="SOBRE MÍ" color='secondary' sx={{ p: 1, letterSpacing: 1.5 }} />
          </Divider>
          <Box sx={{ width: 460, ml: 13 }}>
            <Typography color='text.primary' variant="h6" gutterBottom sx={{ textAlign: 'start', textJustify: 2, ml:-5 }}>
              Actualmente estoy formandome como full-stack developer, interesada en construir aplicaciones moviles, con miras hacia el desarrollo de videojuegos.
            </Typography>
          </Box>
          <Divider sx={{ p: 2, ml: 1}}>
            <Chip label="WORK" color='secondary' sx={{ p: 1, letterSpacing: 1.5 }} />
          </Divider>
          <Box sx={{ width: 460, ml: 7 }}>
            <Typography color='text.primary' variant="h6" gutterBottom sx={{ textAlign: 'start', textJustify: 20, ml: 1 }}>
              1997 - Nacida en Antofagasta, Chile.
            </Typography>
            <Divider></Divider>
            <Typography color='text.primary' variant="h6" gutterBottom sx={{ textAlign: 'start', textJustify: 10, ml: 1 }}>
              2017 - Ing en Telecomunicaciones, Inacap.
            </Typography>
            <Divider></Divider>
            <Typography color='text.primary' variant="h6" gutterBottom sx={{ textAlign: 'start', textJustify: 20, ml: 1 }}>
              2022 - Full Stack Developer, Larn U.
            </Typography>
          </Box>
        </Box>
      </Container >
    </ThemeProvider >

  );
}

export default About;