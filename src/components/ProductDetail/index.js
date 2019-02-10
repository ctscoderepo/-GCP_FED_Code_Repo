import React from "react";
import { Grid, Button } from "@material-ui/core";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import { withStyles } from "@material-ui/core/styles";
// import ReactImageZoom from "react-image-zoom";
import computers from "../../resources/Products/computers.jpg";
import c2 from "../../resources/Products/c2.jpg";
import c1 from "../../resources/Products/c1.jpg";
import ExanpsionPanel from '../helpers/ExpansionPanel';
import "./index.css";

const styles = theme => ({
  productid: {
    fontSize: "12px",
    paddingLeft: "5px",
    color: "#333",
    verticalAlign: "middle"
  },
  addToCart: {
    textTransform: "uppercase",
    backgroundColor: "#fff",
    borderRadius: "10px",
    width: "100%",
    margin: "10px 0",
    fontSize: "12px",
    boxShadow: "none",
    outline: "none",
    color: "#202121",
    border: "1px solid #202121",
    fontWeight: "500",
    fill: "#000",
    "&:hover": {
      color: "#0084CD",
      backgroundColor: "#fff",
      fill: "#0084CD",
      border: "1px solid #0084CD"
    }
  },
  producttitle:{
    padding:'0 10% 0 0',
    fontWeight:"400",
    color:"cornflowerblue"
  }
});

const images = [
  {
    original: computers,
    thumbnail: computers
  },
  {
    original: c2,
    thumbnail: c2
  },
  {
    original: c1,
    thumbnail: c1
  }
];

const ProductDetailComponent = props => {
  const { classes } = props;
  return (
    <div className="productDetailComponent">
      <Grid container>
        <Grid lg={7} sm={6} xs={12} item>
          <h3 className={classes.producttitle}>
            Apple - MacBook Air - 13.3" Retina Display - Intel Core i5 - 8GB
            Memory - 128GB Flash Storage (Latest Model) - Gold
          </h3>
          <p className={classes.productIdName}>
            <strong>Model :</strong>
            <span className={classes.productid}>SMJ737VZKV</span>
            &nbsp;&nbsp;&nbsp;<strong>SKU :</strong>
            <span className={classes.productid}>6251810</span>
          </p>
          <p>
            <span className="rated">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z" />
            </svg>
          </p>
          <ImageGallery
            items={images}
            autoPlay={false}
            thumbnailPosition="left"
            showPlayButton={false}
            showNav={false}
            showFullscreenButton={false}
          />
        </Grid>
        <Grid lg={5} sm={6} xs={12} item>
          <p>Shipping: Unavailable for 96939</p>
          <p>Store Pickup: Available for pickup today at Aiea.</p>
          <p>Act Quick – Only 2 left at your store!</p>
          
          <p>
            Unfortunately, this item is only available for shipping in certain
            markets.
          </p>
          <Grid container spacing={8}>
            <Grid item lg={6} sm={6} xs={12}>
              <Button
                variant="contained"
                color="secondary"
                className={classes.addToCart}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
                </svg>
                &nbsp;&nbsp;&nbsp;Add to cart
              </Button>
            </Grid>
            <Grid item lg={6} sm={6} xs={12}>
              <Button
                variant="outlined"
                color="primary"
                className={classes.addToCart}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z" />
                  </svg>
                </svg>
                &nbsp;&nbsp;&nbsp; Save for later
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container>
        <Grid lg={6} sm={12} xs={12} item>
      <ExanpsionPanel heading="Specifications" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque excepturi enim, odio, cumque cum totam ex omnis quod neque est adipisci nobis necessitatibus animi iure magnam tempore minus. Deleniti, et."/>
        </Grid>
        <Grid item lg={6}></Grid>
      </Grid>
    </div>
  );
};

export default withStyles(styles)(ProductDetailComponent);
