import React from "react";
import Slider from "react-slick";
import { withStyles } from "@material-ui/core/styles";
import slide_one from "./images/slide_one.jpg";
import slide_two from "./images/slide_two.jpg";
import slide_three from "./images/slide_three.jpg";
import "./Carousel.css";

const styles = theme => ({
  CarouselHeight: {
    height: "400px",
    overflow: "hidden",
    [theme.breakpoints.down("sm")]: {
      height: "350px"
    },
    [theme.breakpoints.down("xs")]: {
      height: "200px"
    }
  },
  slide_01: {
    backgroundImage: `url(${slide_one})`,
    borderRadius: "3px",
    height: "400px",
    [theme.breakpoints.down("sm")]: {
      height: "350px"
    },
    [theme.breakpoints.down("xs")]: {
      height: "200px"
    }
  },
  slide_02: {
    backgroundImage: `url(${slide_two})`,
    height: "400px",
    borderRadius: "3px",
    [theme.breakpoints.down("sm")]: {
      height: "350px"
    },
    [theme.breakpoints.down("xs")]: {
      height: "200px"
    }
  },
  slide_03: {
    backgroundImage: `url(${slide_three})`,
    height: "400px",
    borderRadius: "3px",
    [theme.breakpoints.down("sm")]: {
      height: "350px"
    },
    [theme.breakpoints.down("xs")]: {
      height: "200px"
    }
  }
});
const SampleNextArrow = props => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        display: "block",
        background: "#bfbfbf",
        marginRight: "30px",
        padding: "7px",
        borderRadius: "17px",
        top: "50%"
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
        padding: "7px",
        borderRadius: "17px",
        zIndex: "1000",
        top: "50%"
      }}
      onClick={onClick}
    />
  );
};
class Carousel extends React.Component {
  render() {
    let settings = {
      dots: false,
      infinite: true,
      autoplay: true,
      speed: 200,
      prevArrow: <SamplePrevArrow />,
      nextArrow: <SampleNextArrow />
    };
    const { classes } = this.props;
    return (
      <div className={`carrousel_wrapper ${classes.CarouselHeight}`}>
        <Slider {...settings}>
          <div>
            <div className={`carousel_image ${classes.slide_01}`} />
          </div>
          <div>
            <div className={`carousel_image ${classes.slide_03}`} />
          </div>
          <div>
            <div className={`carousel_image ${classes.slide_03}`} />
          </div>
        </Slider>
      </div>
    );
  }
}

export default withStyles(styles)(Carousel);
