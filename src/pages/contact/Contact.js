import React from "react";
import Container from '@mui/material/Container';
import { Typography } from "@mui/material";
import theme from "../../components/themes/ThemeConfig";
import { ThemeProvider } from '@emotion/react';
import '../../components/styles/style.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';
import Form from "../../components/forms/Form";



function Contact() {
  return (
    <ThemeProvider theme={theme}>
      <Container color={'secondary'} id='container_principal' sx={{ pt: 15 }}>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardContent>
              <Typography variant="h3" color='text.primary' gutterBottom sx={{ textAlign: 'center', pt: 1 }}>
                Contacto
              </Typography>
              <Form />
            </CardContent>
          </CardActionArea>
        </Card>

      </Container>
    </ThemeProvider>
  )
}


export default Contact;
