import React from "react";
import { Grid, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Featured from "../HeroContentBlock";
import f1 from "./images/f1.jpeg";
import "./index.css";

const styles = theme => ({
  HomeComponent: {
    padding: "150px 0px 10px 0px",
    boxSizing: "border-box",
    [theme.breakpoints.down("sm")]: {
      padding: "5px 10px 5px 10px"
    }
  },
  itemContainer: {
    position: "relative"
  },
  featuredproducts: {
    marginBottom: "20px"
  }
});

const HomeComponent = props => {
  const { classes } = props;
  return (
    <div className={classes.HomeComponent}>
      <Grid container>
        <Grid item lg={12} xs={12}>
          <Featured />
        </Grid>
      </Grid>
      <h3 className="featuredProductsHeading">Featured products</h3>
      <Grid container spacing={32} className={classes.featuredproducts}>
        <Grid lg={3} sm={3} xs={6} item className={classes.itemContainer}>
          <div className="imagewrapper">
            <img src={f1} alt="featured-01" />
            <div className="featuredProductButton">
              <Button variant="outlined" className={classes.button}>
                view
              </Button>
            </div>
            <section className="featuredProductContent">
              <p>Apple iCam</p>
              <p>$1300.00</p>
            </section>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default withStyles(styles)(HomeComponent);
