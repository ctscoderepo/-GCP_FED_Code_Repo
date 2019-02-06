import React from "react";
import Slider from "react-slick";
import { withStyles } from '@material-ui/core/styles';
import slide_one from "../../resources/images/slide_one.jpg";
import slide_two from "../../resources/images/slide_two.jpg";
import slide_three from "../../resources/images/slide_three.jpg";
import "./Carousel.css" 

const styles = theme => ({
CarouselHeight:{
  height:window.innerHeight, 
  overflow: "hidden",
  [theme.breakpoints.down('sm')]: {
     height:'300px',
    }
},
slide_01:{
  backgroundImage: `url(${slide_one})`,
  height: window.innerHeight + "px",
  [theme.breakpoints.down('sm')]: {
     height:'300px',
    }
},
slide_02:{
  backgroundImage: `url(${slide_two})`,
  height: window.innerHeight + "px",
  [theme.breakpoints.down('sm')]: {
     height:'300px',
    }
},
slide_03:{
  backgroundImage: `url(${slide_three})`,
  height: window.innerHeight + "px",
  [theme.breakpoints.down('sm')]: {
     height:'300px',
    }
}
})

class Carousel extends React.Component {
  render() {
    let settings = {
      dots: false,
      infinite: true,
      autoplay: true,
      speed: 200
    };
    const {classes}=this.props;
    return (
      <div
        className={`carrousel_wrapper ${classes.CarouselHeight}`} >
        <Slider {...settings}>
          <div>
            <div className={`carousel_image ${classes.slide_01}`}/>
          </div>
          <div>
            <div className={`carousel_image ${classes.slide_03}`}/>
          </div>
          <div>
            <div className={`carousel_image ${classes.slide_03}`}/>
          </div>
        </Slider>
      </div>
    );
  }
}

export default withStyles(styles)(Carousel);