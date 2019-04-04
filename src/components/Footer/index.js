import React, {useState} from "react";
import { withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "./index.css";

const styles = theme => ({
  linkColor: {
    color: "#fff",
    fontSize: "14px",
    "&:hover": {
      cursor: "pointer"
    },
    [theme.breakpoints.down("xs")]: {
      color: "black"
    }
  },
  footerBottomLinks: {
    color: "#fff",
    fontSize: "12px",
    margin: "0px 15px 0px 0px",
    borderRight: "2px solid #fff",
    paddingRight: "12px",
    "&:hover": {
      cursor: "pointer"
    }
  },
  footerLastTab: {
    color: "#fff",
    fontSize: "12px",
    margin: "0px 15px 0px 0px",
    "&:hover": {
      cursor: "pointer"
    }
  },
  footerComponentContainer: {
   width:"92%",
      margin:"0 auto",
    padding: "20px",
    [theme.breakpoints.down("xs")]: {
      padding: "25px 3px 0px 3px"
    }
  },
  footerHeader: {
    marginRight: "8px",
    marginLeft: "8px"
  },
  fhead: {
    height: "25px",
    marginBottom: "10px",
    color: "white",
    fontWeight: "bold",
    [theme.breakpoints.down("sm")]: {
      marginTop: "10px"
    }
  },
  footerLink: {
    height: "26px",
    [theme.breakpoints.down("xs")]: {
      width: "auto",
      float: "left",
      fontSize: "8px",
      marginRight: "15px",
      height: "28px"
    }
  },
  footerLabel: {
    padding: "0px 10px 0px 10px",
    fontSize: "14px",
    textAlign: "center",
    marginTop: "25px",
    color: "#fff",
    [theme.breakpoints.down("xs")]: {
      marginTop: "20px",
      fontSize: "12px"
    }
  },
  footerNav: {
    textAlign: "center"
  },
  mobView: {
    [theme.breakpoints.down("xs")]: {
      marginTop: "1px"
    }
  },

  footerImage: {
    width: "20px",
    height: "20px",
    marginRight: "10px",
    "&:hover": {
      cursor: "pointer"
    }
  },
  socialLinks: {
    color: "#333",
    fontSize: "14px",
    padding: "0px 0px 30px 0px",
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  },
  demoStore: {
    padding: "5px 5px 5px 10px",
    background: "#f2f2f2"
  },
  stayCon: {
    paddingTop: "20px",
    width: "300px",
    [theme.breakpoints.down("xs")]: {
      padding: "10px",
      backgroundColor: "white",
      width: "94.2%"
    }
  },
  demoView: {
    [theme.breakpoints.down("xs")]: {
      display: "none"
    }
  },
  demoMobView: {
    marginTop: "5px",
    [theme.breakpoints.down("lg")]: {
      display: "none"
    },
    [theme.breakpoints.down("sm")]: {
      display: "none"
    },
    [theme.breakpoints.down("xs")]: {
      display: "block"
    }
  },
  heading: {
    color: "gray",
    fontSize: "14px"
  },
  InputText: {
    width: "188px",
    height: "20px",
    marginTop: "0px",
    margin: "0px 0px 10px 0px",
    borderColor:"#fff",
    backgroundColor:"#4d4d4d",
    padding:"5px",  
    color: "#fff",
    fontSize:"14px",
      fontWeight:"bold",
      border:"1px solid white", 
    "&:hover": {
      cursor: "pointer",
      borderRadius: "0px",
      color: "white",
      border:"1px solid white",     
    },
    [theme.breakpoints.down("xs")]: {
      marginLeft: "5px",
      fontSize: "12px",
      width: "164px",    
    }
  },
  subscribeBtn: {
    backgroundColor: "#fff",
    width: "120px",
    marginLeft: "20px",
    borderRadius: "0px",
    fontSize: "12px",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: "#008000",
      color: "#fff"
    },
      [theme.breakpoints.down("xs")]: {
      width: "100px",    
    }
  },
    footerMainDiv:{
         background: "#4d4d4d",
        width:"100%",
    },
     fieldInput:{
    borderColor:"white"
}
});

const FooterComoponent = props => {
  const { classes, history } = props;

  const demostoreList = [
    { name: "Features" },
    { name: "Your Order" },
    { name: "Returns" },
    { name: "Shipping & Delivery" },
    { name: "Help & FAQs" }
  ];

  const stayConnected = [
    { img: "/assets/images/facebook.png" },
    { img: "/assets/images/twitter.png" },
    { img: "/assets/images/pintrest1.png" },
    { img: "/assets/images/instagram1.png" },
    { img: "/assets/images/blog1.png" }
  ];

  const supportServices = [
    { name: "Customer Services" },
    { name: "Documentations" },
    { name: "Help" },
    { name: "Premium Support" },
    { name: "Solution Partners" }
  ];

    const [subscribe, setSubscribe]=useState("");
    const handleSubscribe=(value)=>{
        setSubscribe(subscribe);
    }
    
    const inputStyle = { WebkitBoxShadow: "0 0 0 1000px #4d4d4d inset"};
    
  return (
    <>
      <div className={classes.footerMainDiv}>
      <Grid container className={classes.footerComponentContainer}>
        <Grid item lg={3} sm={3} xs={12}>
          <div className={classes.demoView}>
            <div>
              <Typography className={classes.fhead}>
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
          </div>

          <div className={classes.demoMobView}>
            <ExpansionPanel
              style={{
                borderRadius: "0px",
                backgroundColor: "#4d4d4d",
                color: "white",
                border: "1px solid #fff"
              }}
            >
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
                style={{ paddingLeft: "10px" }}
              >
                <div className={classes.heading}>
                  <strong>Demostore</strong>
                </div>
              </ExpansionPanelSummary>
              {demostoreList.map(y => (
                <div className={classes.demoStore} key={y.name}>
                  <Link className={classes.linkColor}>{y.name}</Link>
                </div>
              ))}
            </ExpansionPanel>
          </div>
        </Grid>
        <Grid item lg={3} sm={3} xs={12} className={classes.mobView}>
          <div className={classes.demoView}>
            <div>
              <Typography className={classes.fhead}>
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
          </div>

          <div>
            <div className={classes.demoMobView}>
              <ExpansionPanel
                style={{
                  borderRadius: "0px",
                  backgroundColor: "#4d4d4d",
                  color: "white",
                  border: "1px solid #fff"
                }}
              >
                <ExpansionPanelSummary
                  expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
                  style={{ paddingLeft: "10px" }}
                >
                  <div className={classes.heading}>
                    <strong>Support & Services</strong>
                  </div>
                </ExpansionPanelSummary>
                {supportServices.map(y => (
                  <div className={classes.demoStore} key={y.name}>
                    <Link className={classes.linkColor}>{y.name}</Link>
                  </div>
                ))}
              </ExpansionPanel>
            </div>
          </div>
        </Grid>

        <Grid item lg={4} sm={4} xs={12} className={classes.mobView}>
          <div className={classes.demoView}>
            <div>
              <Typography className={classes.fhead}>
                <strong>Subscribe to newsletter</strong>
              </Typography>
            </div>
            <div style={{ display: "flex" }}>
              <div>
               <input type="text" 
                className={classes.InputText}
                value={subscribe.subscribe}
                onChange={e =>handleSubscribe(e.target.value)}
                placeholder="ENTER YOUR EMAIL"
                />
              </div>
              <div>
                <Button className={classes.subscribeBtn}>Subscribe</Button>
              </div>
            </div>
            <div className={classes.stayCon}>
              {stayConnected.map(y => (
                <img
                  key={y.img}
                  src={y.img}
                  alt="pintrest"
                  className={classes.footerImage}
                  style={{ paddingRight: "30px" }}
                />
              ))}
            </div>
          </div>
          <div className={classes.demoMobView}>
            <ExpansionPanel
              style={{
                borderRadius: "0px",
                backgroundColor: "#4d4d4d",
                color: "white",
                border: "1px solid #fff"
              }}
            >
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
                style={{ paddingLeft: "10px" }}
              >
                <div className={classes.heading}>
                  <strong>Stay Connected</strong>
                </div>
              </ExpansionPanelSummary>

              <div style={{ display: "flex" }}>
                <div>
                  <input type="text" 
                className={classes.InputText}
                value={subscribe.subscribe}
                onChange={e =>handleSubscribe(e.target.value)}
                placeholder="ENTER YOUR EMAIL"
                />
                </div>
                <div>
                  <Button className={classes.subscribeBtn}>Subscribe</Button>
                </div>
              </div>
              <div className={classes.stayCon}>
                {stayConnected.map(y => (
                  <img
                    key={y.img}
                    src={y.img}
                    alt="pintrest"
                    className={classes.footerImage}
                    style={{ paddingRight: "30px" }}
                  />
                ))}
              </div>
            </ExpansionPanel>
          </div>
        </Grid>

        <Grid item lg={12} sm={12} xs={12} style={{ paddingBottom: "20px" }}>
          <Grid container spacing={24}>
            <Grid item lg={12} sm={12} xs={12}>
              <div className={classes.footerLabel}>
                ©2019 Demo Store.All Rights Reserved. Use of this site is
                subject to certain Terms Of Use.
              </div>
              <div
                className={classes.footerLabel}
                style={{ marginTop: "10px" }}
              >
                <strong>Need Help?</strong>, please call or text{" "}
              </div>
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
              <Link className={classes.footerLastTab}>Site map</Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
</div>
    </>
  );
};

export default withRouter(withStyles(styles)(FooterComoponent));
