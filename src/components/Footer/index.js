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
    margin: "0px 15px 0px 0px"
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
    marginBottom: "10px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "10px"
    }
  },
  footerLink: {
    height: "26px",
    [theme.breakpoints.down("sm")]: {
      width: "auto",
      float: "left",
      fontSize: "8px",
      marginRight: "15px",
      height:"28px",
    }
  },
  footerLabel: {
    textAlign: "center",
    marginTop: "25px",
    [theme.breakpoints.down("sm")]: {
      textAlign: "left",
      marginTop: "25px"
    }
  },
  footerNav: {
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      textAlign: "left",
    }
  },    
    mobView: {
    [theme.breakpoints.down("sm")]: {
      marginTop:"15px"
    }
  },
    footerImage:{
        width:"20px",
        height:"20px",
        marginRight:"10px"
    },
    socialLinks:{
        color: "#333",
    fontSize: "14px",
        padding:"0px 0px 30px 0px"
    }
});

const FooterComoponent = props => {
  const { classes, history } = props;

  return (
    <>
      <Grid container className={classes.margin15}>
        <Grid item lg={4} sm={4} xs={12}>
          <div className={classes.fhead}>
            <Typography>
              <strong>Demostore</strong>
            </Typography>
          </div>
          <div className={classes.footerLink}>
            <Link className={classes.linkColor}>Features</Link>
          </div>
          <div className={classes.footerLink}>
            <Link className={classes.linkColor}>Your Order</Link>
          </div>
          <div className={classes.footerLink}>
            <Link className={classes.linkColor}>Returns</Link>
          </div>
          <div className={classes.footerLink}>
            <Link className={classes.linkColor}>Shipping & Delivery</Link>
          </div>
          <div className={classes.footerLink}>
            <Link className={classes.linkColor}>Help & FAQs</Link>
          </div>
        </Grid>

        <Grid item lg={4} sm={4} xs={12} className={classes.mobView}>
          <div className={classes.fhead}>
            <Typography>
              <strong>Follow Us</strong>
            </Typography>
          </div>
          <div className={classes.footerLink}>
            <img src="/assets/images/facebook.png" alt="facebook" className={classes.footerImage}/>
            <Link className={classes.socialLinks}>Facebook</Link>
          </div>
          <div className={classes.footerLink}>
           <img src="/assets/images/twitter.png" alt="twitter" className={classes.footerImage}/>
            <Link className={classes.linkColor}>Twitter</Link>
          </div>
          <div className={classes.footerLink}>
           <img src="/assets/images/pintrest1.png" alt="pintrest" className={classes.footerImage}/>
            <Link className={classes.linkColor}> Pintrest</Link>
          </div>
          
          <div className={classes.footerLink}>
             <img src="/assets/images/instagram1.png" alt="instagram" className={classes.footerImage}/>
            <Link className={classes.linkColor}>Instagram</Link>
          </div>
      <div className={classes.footerLink}>
            <img src="/assets/images/blog1.png" alt="pintrest" className={classes.footerImage}/>
            <Link className={classes.linkColor}>Blog</Link>
          </div>
        </Grid>
        <Grid item lg={4} sm={4} xs={12} className={classes.mobView}>
          <div className={classes.fhead}>
            <Typography>
              <strong>Support & Services</strong>
            </Typography>
          </div>
          <div className={classes.footerLink}>
            <Link className={classes.linkColor}>Customer Services</Link>
          </div>
          <div className={classes.footerLink}>
            <Link className={classes.linkColor}> Documentations</Link>
          </div>
          <div className={classes.footerLink}>
            <Link className={classes.linkColor}> Help</Link>
          </div>
          <div className={classes.footerLink}>
            <Link className={classes.linkColor}>Premium Support</Link>
          </div>
          <div className={classes.footerLink}>
            <Link className={classes.linkColor}>Solution Partners</Link>
          </div>
        </Grid>
        <Grid item lg={12} sm={12} xs={12}>
          <Grid container spacing={24}>
            <Grid item lg={12} sm={12} xs={12} className={classes.footerLabel}>
              <Typography>
                ©2019 Demo Store.All Rights Reserved. Use of this site is
                subject to certain Terms Of Use.
              </Typography>
              <strong>Need Help?</strong>, please call ....... or text .......
            </Grid>

            <Grid item lg={12} sm={12} xs={12} className={classes.footerNav}>
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
