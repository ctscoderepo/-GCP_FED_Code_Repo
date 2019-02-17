import React from "react";
import { withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import "./index.css";

const styles = theme => ({
  linkColor: {
    color: "#333",
    fontSize: "14px"
  },
  footerBottomLinks: {
    color: "#0086b3",
    fontSize: "12px",
    margin: "15px"
  },
  margin15: {
    background: "#f2f2f2",
    padding: "20px"
  },
  footerHeader: {
    marginRight: "8px",
    marginLeft: "8px"
  },
  fhead: {
    height: "25px",
    marginBottom: "15px"
  }
});

const FooterComoponent = props => {
  const { classes, history } = props;

  return (
    <>
      <Grid container className={classes.margin15}>
        <Grid item lg={4} sm={4} xs={3}>
          <div className={classes.fhead}>
            <Typography>
              <strong>Demostore</strong>
            </Typography>
          </div>
          <div className="footerLink">
            <Link className={classes.linkColor}>Features</Link>
          </div>
          <div className="footerLink">
            <Link className={classes.linkColor}>Your Order</Link>
          </div>
          <div className="footerLink">
            <Link className={classes.linkColor}>Download DemoStore</Link>
          </div>
          <div className="footerLink">
            <Link className={classes.linkColor}>Returns</Link>
          </div>
          <div className="footerLink">
            <Link className={classes.linkColor}>Shipping & Delivery</Link>
          </div>
          <div className="footerLink">
            <Link className={classes.linkColor}>Help & FAQs</Link>
          </div>
        </Grid>

        <Grid item lg={4} sm={4} xs={3}>
          <div className={classes.fhead}>
            <Typography>
              <strong>Follow Us</strong>
            </Typography>
          </div>
          <div className="footerLink">
            <Link className={classes.linkColor}>Facebook</Link>
          </div>
          <div className="footerLink">
            <Link className={classes.linkColor}>Twitter</Link>
          </div>
          <div className="footerLink">
            <Link className={classes.linkColor}> Pintrest</Link>
          </div>
          <div className="footerLink">
            <Link className={classes.linkColor}>Blog</Link>
          </div>
        </Grid>
        <Grid item lg={4} sm={4} xs={3}>
          <div className={classes.fhead}>
            <Typography>
              <strong>Support & Services</strong>
            </Typography>
          </div>
          <div className="footerLink">
            <Link className={classes.linkColor}>Customer Services</Link>
          </div>
          <div className="footerLink">
            <Link className={classes.linkColor}> Documentations</Link>
          </div>
          <div className="footerLink">
            <Link className={classes.linkColor}>Premium Support</Link>
          </div>
          <div className="footerLink">
            <Link className={classes.linkColor}>Solution Partners</Link>
          </div>
        </Grid>
        <Grid item lg={12} sm={12} xs={12}>
          <Grid container spacing={24} direction="column" align="center">
            <Grid item lg={8} sm={8} xs={8}>
              <Typography>
                ©2019 Demo Store.All Rights Reserved. Use of this site is
                subject to certain Terms Of Use.
              </Typography>
              <strong>Need Help?</strong>, please call ....... or text .......
            </Grid>
            <Grid item lg={8} sm={8} xs={8}>
              <Link className={classes.footerBottomLinks}>
                Privacy and Security
              </Link>
              <Link
                className={classes.footerBottomLinks}
                onClick={() => history.push("/")}
              >
                Mobile Site
              </Link>
              <Link className={classes.footerBottomLinks}>Site map</Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default withRouter(withStyles(styles)(FooterComoponent));
