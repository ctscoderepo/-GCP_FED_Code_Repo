import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import FourKIcon from "@material-ui/icons/FourK";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  login: {
    margin: "0 70px",
    textAlign: ""
  },
  footerAppbar: {
    background: "#e6e6e6",
    width: "100%",
    margin: "10px 0px",
    height: "100%",
    padding: "10px"
  },
  footerTypo: {
    margin: "0px 0px",
    textAlign: "right"
  },
  footDem: {
    fontSize: "16px",
    fontWeight: "500"
  },
  rowHeight30: {
    height: "30px"
  }
});
const informations = [
  { info: "Features" },
  { info: "Your Order" },
  { info: "Download DemoStore" },
  { info: "Marketplace" }
].map(infolist => (
  <ListItem button>
    <Link key={infolist.info}>{infolist.info}</Link>
  </ListItem>
));
const socialMeadia = [
  { info: "Facebook" },
  { info: "Twitter" },
  { info: "Pintrest" },
  { info: "Blog" }
].map(media => (
  <ListItem button>
    <Link key={media.info}>{media.info}</Link>
  </ListItem>
));
const Supports = [
  { sup: "Customer Services" },
  { sup: "Documentations" },
  { sup: "Premium Support" },
  { sup: "Solution Partners" }
].map(support => (
  <ListItem button>
    <Link key={support.sup}>{support.sup}</Link>
  </ListItem>
));

function Footercomponent(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={16}>
        <Grid container>
          <Grid item lg={12} sm={12} xs={12} className={classes.footerAppbar}>
            <Grid container spacing={8}>
              <Grid item lg={6} sm={6} xs={12}>
                <Typography className={classes.footDem}>
                  More Savings @Demo Store{" "}
                </Typography>
              </Grid>
              <Grid item lg={6} sm={6} xs={12}>
                <Typography className={classes.footerTypo}>
                  Need Help? Please call us at:
                  <Link>1-800-DEMO-STORE (1-800-000-000000)</Link>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container item className={classes.mar}>
          <Grid item lg={4} sm={4} xs={12}>
            <ListItemText>
              <strong>Demostore</strong>
            </ListItemText>
            <List component="nav" className={classes.root}>
              {informations}
            </List>
          </Grid>
          <Grid item lg={4} sm={4} xs={12}>
            <ListItemText className={classes.login}>
              <strong>Follow US</strong>
            </ListItemText>
            <List component="nav" className={classes.root}>
              {socialMeadia}
            </List>
          </Grid>
          <Grid item lg={4} sm={4} xs={12}>
            <ListItemText>
              <strong>Support & Services</strong>
            </ListItemText>
            <List component="nav" className={classes.root}>
              {Supports}
            </List>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

Footercomponent.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Footercomponent);
