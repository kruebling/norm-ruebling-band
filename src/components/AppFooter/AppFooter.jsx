import React from "react";
import { Link } from "react-router-dom";

import StickyFooter from "react-sticky-footer";

import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import PhoneIcon from "@material-ui/icons/Phone";
import MailIcon from "@material-ui/icons/Mail";

function AppFooter() {
  return <StickyFooter bottomThreshold={9999} stickAtThreshold={0} normalStyles={{ backgroundColor: "#342d34", height: "22rem", padding: "2rem" }}>
      <div className="container pt-12 pb-4">
        <h1 className="text-brown-lt font-sans font-thin italic text-4xl">
          Norm Ruebling Band
        </h1>
        <hr className="h-px my-4 bg-brown-lt w-full" />
        <Grid container className="flex items-center my-2">
          <Grid item>
            <PhoneIcon className="text-gray-text mr-4" />
          </Grid>
          <Grid item className="w-1/2 my-1">
            <h5 className="text-gray-text font-light tracking-wide">573-219-0079</h5>
          </Grid>
          <Grid item className="pl-16">
            <Toolbar disableGutters={true}>
              <Button
                disableRipple={true}
                style={{ backgroundColor: 'transparent', fontWeight: 300, fontSize: 12, color: '#8b888b' }}
                component={Link}
                to="/"
                color="primary">
                HOME
              </Button>
              <Button
                disableRipple={true}
                style={{ backgroundColor: 'transparent', fontWeight: 300, fontSize: 12, color: '#8b888b' }}
                component={Link}
                to="/gallery"
                color="primary">
                GALLERY
              </Button>
              <Button
                disableRipple={true}
                style={{ backgroundColor: 'transparent', fontWeight: 300, fontSize: 12, color: '#8b888b' }}
                component={Link}
                to="/schedule"
                color="primary">
                SCHEDULE
              </Button>
              <Button
                disableRipple={true}
                style={{ backgroundColor: 'transparent', fontWeight: 300, fontSize: 12, color: '#8b888b' }}
                component={Link}
                to="/reviews"
                color="primary">
                REVIEWS
              </Button>
              <Button
                disableRipple={true}
                style={{ backgroundColor: 'transparent', fontWeight: 300, fontSize: 12, color: '#8b888b' }}
                component={Link}
                to="/contact"
                color="primary">
                CONTACT
              </Button>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" width="22px" height="22px" fill="#8b888b" transform="translate(0 -3.5)">
                <path d="M17.525,9H14V7c0-1.032,0.084-1.682,1.563-1.682h1.868v-3.18C16.522,2.044,15.608,1.998,14.693,2 C11.98,2,10,3.657,10,6.699V9H7v4l3-0.001V22h4v-9.003l3.066-0.001L17.525,9z" />
              </svg>
            </Toolbar>
          </Grid>
        </Grid>
        <Grid container className="flex items-center my-1">
          <Grid item>
            <MailIcon className="text-gray-text mr-4" />
          </Grid>
          <Grid item>
            <h5 className="text-gray-text font-light tracking-wide">norm@moexpress.com</h5>
          </Grid>
        </Grid>
      </div>
    </StickyFooter>;
}

export default AppFooter;