import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

function AppNavBar(props) {
  const { classes } = props;
  return <div className={classes.root}>
    <AppBar position="static" style={{ background: 'transparent', boxShadow: 'none' }}>
      <Toolbar>
        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" />
        <Typography variant="h6" className={classes.grow}>
          NORM RUEBLING BAND
        </Typography>
        <Button color="inherit">
          <NavLink exact to="/">
            HOME
          </NavLink>
        </Button>
        <Button color="inherit">
          <NavLink exact to="/gallery">
            GALLERY
          </NavLink>
        </Button>
        <Button color="inherit">
          <NavLink exact to="/schedule">
            SCHEDULE
          </NavLink>
        </Button>
        <Button color="inherit">
          <NavLink exact to="/reviews">
            reviews
          </NavLink>
        </Button>
        <Button color="inherit">
          <NavLink exact to="/contact">
            CONTACT
          </NavLink>
        </Button>
      </Toolbar>
    </AppBar>
  </div>;
}

AppNavBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AppNavBar);
