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
    fontWeight: 900
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

function AppNavBar(props) {
  const { classes } = props;
  return <div className={classes.root}>
      <AppBar position="static" style={{ background: "transparent", boxShadow: "none" }}>
      <Toolbar disableGutters={true} className="container">
          <Typography variant="h6" color="primary" className={classes.grow}>
            NORM RUEBLING BAND
          </Typography>
          <Button disableRipple={true} component={Link} to="/" color="primary">
            HOME
          </Button>
          <Button disableRipple={true} component={Link} to="/gallery" color="primary">
            GALLERY
          </Button>
          <Button disableRipple={true} component={Link} to="/schedule" color="primary">
            SCHEDULE
          </Button>
          <Button disableRipple={true} component={Link} to="/reviews" color="primary">
            REVIEWS
          </Button>
          <Button disableRipple={true} component={Link} to="/contact" color="primary">
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
