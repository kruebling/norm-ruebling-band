import React, { Component } from "react";
import { Route, HashRouter } from "react-router-dom";

import AppNavBar from "./components/AppNavBar";

import Home from "./pages/home";
import Gallery from "./pages/gallery";
import Schedule from "./pages/schedule";
import Reviews from "./pages/reviews";
import Contact from "./pages/contact";

class App extends Component {
  render() {
    return( 
      <HashRouter>
        <div>
          <AppNavBar />
          <div className="content container">
            <Route exact path="/" component={Home} />
            <Route exact path="/gallery" component={Gallery} />
            <Route exact path="/schedule" component={Schedule} />
            <Route exact path="/reviews" component={Reviews} />
            <Route exact path="/contact" component={Contact} />
          </div>
        </div>
      </HashRouter>
    )
  }
}

export default App;