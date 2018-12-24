import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1,
    fontWeight: 900,
    letterSpacing: 5
  }
};

function AppNavBar(props) {
  const { classes } = props;
  return <div className={classes.root}>
      <AppBar style={{ background: "rgba(255, 255, 255, 0)", boxShadow: "none" }}>
        <Toolbar disableGutters={true} className="container h-20">
          <Typography variant="h5" color="primary" className={classes.grow}>
            NORM RUEBLING BAND
          </Typography>
          <Button
            disableRipple={true}
            style={{ backgroundColor: 'transparent', letterSpacing: 2.5, color: '#c1b182' }}
            component={Link}
            to="/"
            color="primary">
            HOME
          </Button>
          <Button
            disableRipple={true}
            style={{ backgroundColor: 'transparent', letterSpacing: 2.5, color: '#c1b182' }}
            component={Link}
            to="/gallery"
            color="primary">
            GALLERY
          </Button>
          <Button
            disableRipple={true}
            style={{ backgroundColor: 'transparent', letterSpacing: 2.5, color: '#c1b182' }}
            component={Link}
            to="/schedule"
            color="primary">
            SCHEDULE
          </Button>
          <Button
            disableRipple={true}
            style={{ backgroundColor: 'transparent', letterSpacing: 2.5, color: '#c1b182' }}
            component={Link}
            to="/reviews"
            color="primary">
            REVIEWS
          </Button>
          <Button
            disableRipple={true}
            style={{ backgroundColor: 'transparent', letterSpacing: 2.5, color: '#c1b182' }}
            component={Link}
            to="/contact"
            color="primary">
            CONTACT
          </Button>
        </Toolbar>
      </AppBar>
    </div>;
}

AppNavBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AppNavBar);
