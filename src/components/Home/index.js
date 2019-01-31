import React from "react";
import Promotions from "../Promotions";
import Header from '../Header';
import Navigation from '../Navigation';
import HeroContentBlock from "../HeroContentBlock";

const HomeComponent = props => {
	return (
		<div>
			<Promotions />
			<Header/>
			<Navigation/>
			<div className="row">
			<div className="col-lg-8">
					<HeroContentBlock />
			</div>
			</div>
		</div>
	);
};

export default HomeComponent;
