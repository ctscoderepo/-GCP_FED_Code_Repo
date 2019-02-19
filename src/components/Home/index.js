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
      padding: "0",
      marginTop: "80px"
    }
  },
  itemContainer: {
    position: "relative"
  },
  FeaturedProducts: {
    boxSizing: "border-box",
    [theme.breakpoints.down("sm")]: {
      padding: "0 20px",
      marginBottom: "20px"
    }
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
      <Grid container className={classes.FeaturedProducts} spacing={8}>
        <Grid
          lg={2}
          md={2}
          sm={3}
          xs={3}
          item
          className={classes.itemContainer}
        >
          <div className="imagewrapper">
            <img src={f1} alt="featured-01" />
            <div className="featuredProductButton">
              <Button variant="outlined" className={classes.button}>
                view
              </Button>
            </div>
            <section className="featuredProductContent">
              <div className="featuredContent">
                <div>Apple iCam</div>
                <div>$1300.00</div>
              </div>
            </section>
          </div>
        </Grid>
        <Grid
          lg={2}
          md={2}
          sm={3}
          xs={3}
          item
          className={classes.itemContainer}
        >
          <div className="imagewrapper">
            <img src={f1} alt="featured-01" />
            <div className="featuredProductButton">
              <Button variant="outlined" className={classes.button}>
                view
              </Button>
            </div>
            <section className="featuredProductContent">
              <div className="featuredContent">
                <div>Apple iCam</div>
                <div>$1300.00</div>
              </div>
            </section>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default withStyles(styles)(HomeComponent);
