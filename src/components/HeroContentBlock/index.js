import React from "react";
import Slider from "react-slick";
import './index.css'

export default class HeroContentBlock extends React.Component {
	render() {
		var settings = {
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1
		};
		return (
			<Slider {...settings}>
				<div className="container-fluid items">
					<img src="/assets/images/b1.jpg" alt='b1' width='100%'/>
				</div>
				<div className="container-fluid items">
					<img src="/assets/images/b2.jpg" alt='b2' width='100%'/>
				</div>
				<div className="container-fluid items">
					<img src="/assets/images/b3.jpg" alt='b3' width='100%'/>
				</div>
				<div className="container-fluid items">
					<img src="/assets/images/b4.jpg" alt='b4' width='100%'/>
				</div>
			</Slider>
		);
	}
}
