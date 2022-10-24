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
      <Container background='transparent' id='container_principal' sx={{ pt: 10 }}>
        <Box>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 1 }} >
            <Grid item lg={11} xs={12}>
              <Typography color='secondary' variant="h3" gutterBottom sx={{ mt: 5, textAlign: 'start' }}>
                Catalina Castillo Reygada
              </Typography>
              <Typography color='text.primary' variant="h6" gutterBottom sx={{ textAlign: 'start' }}>
                Full Stack Developer (Games / Mobile / Desktop)
              </Typography>
              <Box>
              <Divider sx={{ml: 6, p:2, textAlign:'center'}} >
                <Chip label="HABILIDADES" color='secondary' />
              </Divider>
              </Box>
              <img className="logo__size_custom" src="https://raw.githubusercontent.com/Cataa97/portafolio/149d0cf7fede29454481ae1ae5c88550b067e330/assets/img/css-3.svg" alt="CSS3" />
              <img
                className="logo__size"
                src="https://raw.githubusercontent.com/Cataa97/portafolio/149d0cf7fede29454481ae1ae5c88550b067e330/assets/img/logo-javascript.svg"
                alt="Javascript"
              />
              <img className="logo__size" src="https://raw.githubusercontent.com/Cataa97/portafolio/149d0cf7fede29454481ae1ae5c88550b067e330/assets/img/react-2.svg" alt="React" />
              <img
                className="logo__size"
                src="https://raw.githubusercontent.com/Cataa97/portafolio/149d0cf7fede29454481ae1ae5c88550b067e330/assets/img/nodejs-icon.svg"
                alt="nodejs"
              />
              <img className="logo__size" src="https://raw.githubusercontent.com/Cataa97/portafolio/149d0cf7fede29454481ae1ae5c88550b067e330/assets/img/git-icon.svg" alt="git" />
              <img
                className="logo__size"
                src="https://raw.githubusercontent.com/Cataa97/portafolio/149d0cf7fede29454481ae1ae5c88550b067e330/assets/img/postgresql.svg"
                alt="postgresql"
              />
              <img
                className="logo__size"
                src="https://cdn-icons-png.flaticon.com/512/5969/5969294.png"
                alt="postgresql"
              />
            </Grid>
            <Grid item lg={1} xs={12} id='avatar' >
              <Avatar alt="Catalina Castillo" src="https://scontent.fscl11-2.fna.fbcdn.net/v/t1.6435-9/94573906_1523400887834515_2483486137931268096_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=174925&_nc_ohc=bdEi4lHy7MYAX8DUwzv&_nc_ht=scontent.fscl11-2.fna&oh=00_AT9fMC0O4QefxDzZ9iDf0lIlHxosDxJW5CYPzRXdXJaZwQ&oe=6377C0B1" sx={{ width: 120, height: 120 }}
              />
            </Grid>
          </Grid>
          <Divider  sx={{ p:2}}>
              <Chip label="SOBRE MÍ"  color='secondary'  sx={{ p:1}}/>
            </Divider>
        </Box>
      </Container>
    </ThemeProvider>

  );
}

export default About;