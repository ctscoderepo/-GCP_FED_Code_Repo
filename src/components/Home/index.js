import React from "react";
import { Grid, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Featured from "../HeroContentBlock";
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

const featuredProducts = [
  {
    imageURL:
      "https://storage.googleapis.com/gcpimage/images/electronics/0000046_beats-pill-20-wireless-speaker_550.jpeg",
    price: 39,
    name: "portable-sound-speakers"
  },
  {
    imageURL:
      "https://storage.googleapis.com/gcpimage/images/electronics/0000039_leica-t-mirrorless-digital-camera_550.jpeg",
    price: 67,
    name: "Leica T Mirrorless Digital camera"
  },
  {
    imageURL:
      "https://storage.googleapis.com/gcpimage/images/toys/71B-0V7CutL._SX679_.jpg",
    price: 90,
    name: "wifi FPV Drone"
  },
  {
    imageURL:
      "https://storage.googleapis.com/gcpimage/images/appreals/0000051_nike-floral-roshe-customized-running-shoes_550.jpg",
    price: 99,
    name: "Nike Shoes"
  },
  {
    imageURL:
      "https://storage.googleapis.com/gcpimage/images/appreals/0000064_ray-ban-aviator-sunglasses_550.jpg",
    price: 16,
    name: "Sun glasses"
  },
  {
    imageURL:
      "https://storage.googleapis.com/gcpimage/images/toys/911c0QWW3uL._SL1500_.jpg",
    price: 34,
    name: "Basket Ball"
  }
];

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
        {featuredProducts.map(item => (
          <Grid
            lg={2}
            md={2}
            sm={3}
            xs={3}
            item
            className={classes.itemContainer}
          >
            <div className="imagewrapper">
              <img src={item.imageURL} alt="featured-01" />
              <div className="featuredProductButton">
                <Button variant="outlined" className={classes.button}>
                  view
                </Button>
              </div>
              <section className="featuredProductContent">
                <div className="featuredContent">
                  <div className="featuredContent_name">{item.name}</div>
                  <div>${item.price}</div>
                </div>
              </section>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default withStyles(styles)(HomeComponent);
