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
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
    fontWeight: 900,
    letterSpacing: 5
  },
  show: {
    transform: 'translate(0, 0)',
    transition: 'all .4s',
  },
  hide: {
    transform: 'translate(0, -80px)',
    transition: 'all .5s',
  },
};

class AppNavBar extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      shouldShow: null,
    };

    this.lastScroll = null;

    this.handleScroll = this.handleScroll.bind(this);
    // Alternatively, you can throttle scroll events to avoid
    // updating the state too often. Here using lodash.
    // this.handleScroll = _.throttle(this.handleScroll.bind(this), 100);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, { passive: true });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const lastScroll = window.scrollY;

    if (lastScroll === this.state.lastScroll) {
      return;
    }

    const shouldShow =
      this.lastScroll !== null ? lastScroll < this.lastScroll : null;

    if (shouldShow !== this.state.shouldShow) {
      this.setState(prevState => ({
        ...prevState,
        shouldShow,
      }));
    }

    this.lastScroll = lastScroll;
  }

  getScrollClassName() {
    if (this.state.shouldShow === null) {
      return '';
    }

    return this.state.shouldShow
      ? this.props.classes.show
      : this.props.classes.hide;
  }

  render() {
    const { classes } = this.props;
    return (
      <AppBar
        position="fixed"
        style={{ background: "rgba(0, 0, 0, 0.5)", boxShadow: "none" }}
        className={`${classes.root} ${this.getScrollClassName()}`}
      >
        <Toolbar disableGutters={true} className="container">
          <Typography variant="h5" color="primary" className={classes.grow}>
            NORM RUEBLING BAND
          </Typography>
          <Button
            disableRipple={true}
            style={{ backgroundColor: 'transparent', letterSpacing: 2.5, color: '#d2b48c' }}
            component={Link}
            to="/"
            color="primary">
            HOME
          </Button>
          <Button
            disableRipple={true}
            style={{ backgroundColor: 'transparent', letterSpacing: 2.5, color: '#d2b48c' }}
            component={Link}
            to="/gallery"
            color="primary">
            GALLERY
          </Button>
          <Button
            disableRipple={true}
            style={{ backgroundColor: 'transparent', letterSpacing: 2.5, color: '#d2b48c' }}
            component={Link}
            to="/schedule"
            color="primary">
            SCHEDULE
          </Button>
          <Button
            disableRipple={true}
            style={{ backgroundColor: 'transparent', letterSpacing: 2.5, color: '#d2b48c' }}
            component={Link}
            to="/reviews"
            color="primary">
            REVIEWS
          </Button>
          <Button
            disableRipple={true}
            style={{ backgroundColor: 'transparent', letterSpacing: 2.5, color: '#d2b48c' }}
            component={Link}
            to="/contact"
            color="primary">
            CONTACT
          </Button>
        </Toolbar>
      </AppBar>
    );
  }
}

AppNavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppNavBar);
