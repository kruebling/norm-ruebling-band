import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";

function Navbar() {
  return <Router>
    <Route render={({ location }) =>
        <div>
          <Route exact path="/" render={() => <Redirect to="/home" />} />

          <ul style={styles.nav}>
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/gallery">Gallery</NavLink>
            <NavLink to="/schedule">Schedule</NavLink>
            <NavLink to="/reviews">Reviews</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </ul>
        </div>
      }
    />
  </Router>;
}

function NavLink(props) {
  return (
    <li style={styles.navItem}>
      <Link {...props} style={{ color: "inherit" }} />
    </li>
  );
}

const styles = {};

styles.fill = {
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0
};

styles.content = {
  ...styles.fill,
  top: "40px",
  textAlign: "center"
};

styles.nav = {
  padding: 0,
  margin: 0,
  position: "absolute",
  top: 0,
  height: "40px",
  width: "100%",
  display: "flex"
};

styles.navItem = {
  textAlign: "center",
  flex: 1,
  listStyleType: "none",
  padding: "10px"
};

styles.hsl = {
  ...styles.fill,
  color: "white",
  paddingTop: "20px",
  fontSize: "30px"
};

styles.rgb = {
  ...styles.fill,
  color: "white",
  paddingTop: "20px",
  fontSize: "30px"
};

export default Navbar;
