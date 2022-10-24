import { ThemeProvider } from "@mui/system";
import React, { Fragment } from "react";
import About from "../about/About";
import theme from "../../components/themes/ThemeConfig";



function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <About />
      </Fragment>
    </ThemeProvider>
  );
}


export default Home;