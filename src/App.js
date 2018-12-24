import React, { Component } from "react";
import { Route, HashRouter } from "react-router-dom";

import { MuiThemeProvider } from "@material-ui/core/styles";
import theme from "./assets/theme";

import AppNavBar from "./components/AppNavBar";
import AppHeroImage from "./components/AppHeroImage";
import AppFooter from "./components/AppFooter";
import Grid from "@material-ui/core/Grid";

import Home from "./pages/home";
import Gallery from "./pages/gallery";
import Schedule from "./pages/schedule";
import Reviews from "./pages/reviews";
import Contact from "./pages/contact";

class App extends Component {
  render() {
    return <HashRouter>
        <MuiThemeProvider theme={theme}>
          <AppNavBar />
          <AppHeroImage />
          <Grid className="content container">
            <Route exact path="/" component={Home} />
            <Route exact path="/gallery" component={Gallery} />
            <Route exact path="/schedule" component={Schedule} />
            <Route exact path="/reviews" component={Reviews} />
            <Route exact path="/contact" component={Contact} />
          </Grid>
          <AppFooter />
        </MuiThemeProvider>
      </HashRouter>;
  }
}

export default App;