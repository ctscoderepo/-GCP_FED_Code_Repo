import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

export default () => (
	<div className="agile-main-top">
		<div className="container-fluid">
			<div className="row promotionalBackground py-2">
				<div className="col-lg-4 promotionalHeader">
					<p className="text-white text-lg-left text-center">
						Offer Zone Top Deals & Discounts
						<i className="fas fa-shopping-cart ml-1" />
					</p>
				</div>
				<div className="col-lg-8 promotionalHeaderRight mt-lg-0 mt-2 mr-0">
					<ul>
						<li className="text-center border-right text-white">
							<Link className=" text-white" to="#">
								<i className="fas fa-map-marker mr-2" />
								Select Location
							</Link>
						</li>
						<li className="text-center border-right text-white">
							<Link to="#" className="text-white">
								<i className="fas fa-truck mr-2" />
								Track Order
							</Link>
						</li>
						<li className="text-center border-right text-white">
							<i className="fas fa-history" /> Shopping History
						</li>
						<li className="text-center text-white border-right">
							<Link
								to="#"
								data-toggle="modal"
								data-target="#exampleModal2"
								className="text-white"
							>
								<i className="fas fa-user-plus mr-2" />
								Account
							</Link>
						</li>
						<li className="text-center  text-white">
							<i className="fas fa-phone mr-2" /> 6303990729
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
);
