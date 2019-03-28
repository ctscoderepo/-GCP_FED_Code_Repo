import React from "react";
import { Grid, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Featured from "../HeroContentBlock";
import Slider from "react-slick";
import "./index.css";

const styles = theme => ({
  HomeComponent: {
    padding: "150px 0px 10px 0px",
    boxSizing: "border-box",
    [theme.breakpoints.down("sm")]: {
      padding: "0",
      marginTop: "150px"
    },
       [theme.breakpoints.down("xs")]: {
      padding: "0",
      marginTop: "120px"
    }
  },
  itemContainer: {
    position: "relative"
  },
  FeaturedProducts: {
    boxSizing: "border-box",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "20px"
    }
  },
  featurDiv: {
    margin: "0px 3px 0px 3px"
  },
  lghidden: {
    [theme.breakpoints.down("sm")]: {
      display: "none"
    },
    [theme.breakpoints.down("xs")]: {
      display: "none"
    }
  },
  smhidden: {
    [theme.breakpoints.down("lg")]: {
      display: "none"
    },
    [theme.breakpoints.down("sm")]: {
      display: "block"
    },
    [theme.breakpoints.down("xs")]: {
      display: "none"
    }
  },
  xshidden: {
    [theme.breakpoints.down("lg")]: {
      display: "none"
    },
    [theme.breakpoints.down("sm")]: {
      display: "none"
    },
    [theme.breakpoints.down("xs")]: {
      display: "block"
    }
  }
});

const featuredProducts = [
  {
    imageURL:
      "https://storage.googleapis.com/gcpimage/images/electronics/0000046_beats-pill-20-wireless-speaker_550.jpeg",
    price: 39,
    name: "portable-sound-speakers",
    skuId: "PT_SPK_SN"
  },
  {
    imageURL:
      "https://storage.googleapis.com/gcpimage/images/electronics/0000039_leica-t-mirrorless-digital-camera_550.jpeg",
    price: 67,
    name: "Leica T Mirrorless Digital camera",
    skuId: "LT_MIR_DC"
  },
  {
    imageURL:
      "https://storage.googleapis.com/gcpimage/images/electronics/0000042_htc-one-mini-blue_550.jpeg",
    price: 100,
    name: "HTC One Mini Blue",
    skuId: "OM_HTC_BL"
  },
  {
    imageURL:
      "https://storage.googleapis.com/gcpimage/images/appreals/0000051_nike-floral-roshe-customized-running-shoes_550.jpg",
    price: 99,
    name: "Nike Shoes",
    skuId: "NK_FRC_RS"
  },
  {
    imageURL:
      "https://storage.googleapis.com/gcpimage/images/appreals/0000064_ray-ban-aviator-sunglasses_550.jpg",
    price: 16,
    name: "Sun glasses",
    skuId: "RB_AVR_SG"
  },
  {
    imageURL:
      "https://storage.googleapis.com/gcpimage/images/toys/911c0QWW3uL._SL1500_.jpg",
    price: 34,
    name: "Basket Ball",
    skuId: "304274307"
  },
     {
    imageURL:
      "https://storage.googleapis.com/gcpimage/images/toys/71QUMDrYKoL._SL1000_.jpg",
    price: 89,
    name: "Distianert RC Truck",
    skuId: "304274306"
  },
     {
    imageURL:
      "https://storage.googleapis.com/gcpimage/images/appreals/0000059_custom-t-shirt_550.jpeg",
    price: 15,
    name: "Custom T-Shirt",
    skuId: "CS_TSHIRT"
  }
    ,
     {
    imageURL:
      "https://storage.googleapis.com/gcpimage/images/electronics/0000046_beats-pill-20-wireless-speaker_550.jpeg",
    price: 37,
    name: "Portable Sound Speakers",
    skuId: "PT_SPK_SN"
  },
     {
    imageURL:
      "https://storage.googleapis.com/gcpimage/images/appreals/0000062_obey-propaganda-hat_550.jpg",
    price: 37,
    name: "Obey Propaganda Hat",
    skuId: "OB_HAT_PR"
  },
     {
    imageURL:
      "https://storage.googleapis.com/gcpimage/images/homedecor/clear-litton-lane-decorative-bottles-94960-64_1000.jpg",
    price: 40,
    name: "Litton Lane",
    skuId: "302268108"
  },
     {
    imageURL:
      "https://storage.googleapis.com/gcpimage/images/toys/71B-0V7CutL._SX679_.jpg",
    price: 75,
    name: "SNAPTAIN S5C WiFi FPV Drone",
    skuId: "304274303"
  }
];

const featuredProducts2 = featuredProducts.slice(0, 3);
const featuredProducts1 = featuredProducts.slice(3, 6);
const featuredProducts3 = featuredProducts.slice(6, 9);
const featuredProducts4 = featuredProducts.slice(9, 12);

const featuredProductsSM1 = featuredProducts.slice(0, 4);
const featuredProductsSM2 = featuredProducts.slice(4, 8);
const featuredProductsSM3 = featuredProducts.slice(8, 12);

const HomeComponent = props => {
  const { classes } = props;

  const SampleNextArrow = props => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          display: "block",
          background: "#bfbfbf",
          marginRight: "30px",
          height: "30px",
          paddingTop: "10px",
          top: "40%"
        }}
        onClick={onClick}
      />
    );
  };

  const SamplePrevArrow = props => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          display: "block",
          background: "#bfbfbf",
          marginLeft: "30px",
          height: "30px",
          paddingTop: "10px",
          zIndex: "1000",
          top: "40%"
        }}
        onClick={onClick}
      />
    );
  };
  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />
  };
    
  return (
    <div className={classes.HomeComponent}>
      <Grid container>
        <Grid item lg={12} xs={12}>
          <Featured />
        </Grid>
      </Grid>
      <h3 className="featuredProductsHeading">FEATURED PRODUCTS</h3>
      <div className={classes.lghidden}>
        <Slider {...settings}>
          <div>
            <Grid container className={classes.FeaturedProducts} spacing={8}>
              {featuredProducts.map((item, i) => (
                <Grid
                  lg={2}
                  md={2}
                  sm={3}
                  xs={4}
                  item
                  className={classes.itemContainer}
                  key={item.name}
                >
                  <div className="imagewrapper" >
                    <img src={item.imageURL} alt={item.name} style={{height:"250px"}}/>
                    <Link
                      to={`/store/product/${item.skuId}`}
                      className={classes.item}
                    >
                      <div className="featuredProductButton">
                        <Button variant="outlined" className={classes.button}>
                          view
                        </Button>
                      </div>
                      <section className="featuredProductContent">
                        <div className="featuredContent">
                          <div className="featuredContent_name">
                            {item.name}
                          </div>
                          <div className="featuredContent_price">
                            ${item.price}
                          </div>
                        </div>
                      </section>
                    </Link>
                  </div>
                </Grid>
              ))}
            </Grid>
          </div>
        </Slider>
      </div>
      <div className={classes.xshidden}>
        <Slider {...settings}>
          <div className={classes.featurDiv}>
            <Grid container className={classes.FeaturedProducts} spacing={8}>
              {featuredProducts1.map((item, i) => (
                <Grid
                  lg={2}
                  md={2}
                  sm={3}
                  xs={4}
                  item
                  className={classes.itemContainer}
                  key={item.name}
                >
                  <div className="imagewrapper">
                    <img src={item.imageURL} alt={item.name} style={{height:"170px"}} />
                    <Link
                      to={`/store/product/${item.skuId}`}
                      className={classes.item}
                    >
                      <div className="featuredProductButton">
                        <Button variant="outlined" className={classes.button}>
                          view
                        </Button>
                      </div>
                    </Link>
                    <section className="featuredProductContent">
                      <div className="featuredContent">
                        <div className="featuredContent_name">{item.name}</div>
                        <div className="featuredContent_price">
                          ${item.price}
                        </div>
                      </div>
                    </section>
                  </div>
                </Grid>
              ))}
            </Grid>
          </div>
          <div>
            <Grid container className={classes.FeaturedProducts} spacing={8}>
              {featuredProducts2.map((item, i) => (
                <Grid
                  lg={2}
                  md={2}
                  sm={3}
                  xs={4}
                  item
                  className={classes.itemContainer}
                  key={item.name}
                >
                  <div className="imagewrapper">
                    <img src={item.imageURL} alt={item.name} style={{height:"170px"}} />
                    <Link
                      to={`/store/product/${item.skuId}`}
                      className={classes.item}
                    >
                      <div className="featuredProductButton">
                        <Button variant="outlined" className={classes.button}>
                          view
                        </Button>
                      </div>
                    </Link>
                    <section className="featuredProductContent">
                      <div className="featuredContent">
                        <div className="featuredContent_name">{item.name}</div>
                        <div className="featuredContent_price">
                          ${item.price}
                        </div>
                      </div>
                    </section>
                  </div>
                </Grid>
              ))}
            </Grid>
          </div>
        <div>
            <Grid container className={classes.FeaturedProducts} spacing={8}>
              {featuredProducts3.map((item, i) => (
                <Grid
                  lg={2}
                  md={2}
                  sm={3}
                  xs={4}
                  item
                  className={classes.itemContainer}
                  key={item.name}
                >
                  <div className="imagewrapper">
                    <img src={item.imageURL} alt={item.name} style={{height:"170px"}} />
                    <Link
                      to={`/store/product/${item.skuId}`}
                      className={classes.item}
                    >
                      <div className="featuredProductButton">
                        <Button variant="outlined" className={classes.button}>
                          view
                        </Button>
                      </div>
                    </Link>
                    <section className="featuredProductContent">
                      <div className="featuredContent">
                        <div className="featuredContent_name">{item.name}</div>
                        <div className="featuredContent_price">
                          ${item.price}
                        </div>
                      </div>
                    </section>
                  </div>
                </Grid>
              ))}
            </Grid>
          </div>
  <div>
            <Grid container className={classes.FeaturedProducts} spacing={8}>
              {featuredProducts4.map((item, i) => (
                <Grid
                  lg={2}
                  md={2}
                  sm={3}
                  xs={4}
                  item
                  className={classes.itemContainer}
                  key={item.name}
                >
                  <div className="imagewrapper">
                    <img src={item.imageURL} alt={item.name} style={{height:"170px"}} />
                    <Link
                      to={`/store/product/${item.skuId}`}
                      className={classes.item}
                    >
                      <div className="featuredProductButton">
                        <Button variant="outlined" className={classes.button}>
                          view
                        </Button>
                      </div>
                    </Link>
                    <section className="featuredProductContent">
                      <div className="featuredContent">
                        <div className="featuredContent_name">{item.name}</div>
                        <div className="featuredContent_price">
                          ${item.price}
                        </div>
                      </div>
                    </section>
                  </div>
                </Grid>
              ))}
            </Grid>
          </div>
        </Slider>
      </div>
      <div className={classes.smhidden}>
        <Slider {...settings}>
          <div className={classes.featurDiv}>
            <Grid container className={classes.FeaturedProducts} spacing={8}>
              {featuredProductsSM1.map((item, i) => (
                <Grid
                  lg={2}
                  md={2}
                  sm={3}
                  xs={4}
                  item
                  className={classes.itemContainer}
                  key={item.name}
                >
                  <div className="imagewrapper">
                    <img src={item.imageURL} alt={item.name} style={{height:"250px"}} />
                    <Link
                      to={`/store/product/${item.skuId}`}
                      className={classes.item}
                    >
                      <div className="featuredProductButton">
                        <Button variant="outlined" className={classes.button}>
                          view
                        </Button>
                      </div>
                    </Link>
                    <section className="featuredProductContent">
                      <div className="featuredContent">
                        <div className="featuredContent_name">{item.name}</div>
                        <div className="featuredContent_price">
                          ${item.price}
                        </div>
                      </div>
                    </section>
                  </div>
                </Grid>
              ))}
            </Grid>
          </div>
          <div>
            <Grid container className={classes.FeaturedProducts} spacing={8}>
              {featuredProductsSM2.map((item, i) => (
                <Grid
                  lg={2}
                  md={2}
                  sm={3}
                  xs={4}
                  item
                  className={classes.itemContainer}
                  key={item.name}
                >
                  <div className="imagewrapper">
                    <img src={item.imageURL} alt={item.name} style={{height:"250px"}} />
                    <Link
                      to={`/store/product/${item.skuId}`}
                      className={classes.item}
                    >
                      <div className="featuredProductButton">
                        <Button variant="outlined" className={classes.button}>
                          view
                        </Button>
                      </div>
                    </Link>
                    <section className="featuredProductContent">
                      <div className="featuredContent">
                        <div className="featuredContent_name">{item.name}</div>
                        <div className="featuredContent_price">
                          ${item.price}
                        </div>
                      </div>
                    </section>
                  </div>
                </Grid>
              ))}
            </Grid>
          </div>
            <div className={classes.featurDiv}>
            <Grid container className={classes.FeaturedProducts} spacing={8}>
              {featuredProductsSM3.map((item, i) => (
                <Grid
                  lg={2}
                  md={2}
                  sm={3}
                  xs={4}
                  item
                  className={classes.itemContainer}
                  key={item.name}
                >
                  <div className="imagewrapper">
                    <img src={item.imageURL} alt={item.name} style={{height:"250px"}} />
                    <Link
                      to={`/store/product/${item.skuId}`}
                      className={classes.item}
                    >
                      <div className="featuredProductButton">
                        <Button variant="outlined" className={classes.button}>
                          view
                        </Button>
                      </div>
                    </Link>
                    <section className="featuredProductContent">
                      <div className="featuredContent">
                        <div className="featuredContent_name">{item.name}</div>
                        <div className="featuredContent_price">
                          ${item.price}
                        </div>
                      </div>
                    </section>
                  </div>
                </Grid>
              ))}
            </Grid>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default withStyles(styles)(HomeComponent);
