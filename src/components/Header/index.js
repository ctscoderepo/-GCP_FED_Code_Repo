import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

export default () => (
	<div className="header-bot">
		<div className="container">
			<div className="row header-bot_inner_wthreeinfo_header_mid">
				<div className="col-md-3 logo_agile">
					<h1 className="text-center">
						<Link to="/" className="font-weight-bold font-italic">
							<img
								src="../../assets/images/logo2.png"
								alt="logo"
								className="img-fluid"
							/>
							Demo Store
						</Link>
					</h1>
				</div>
				<div className="col-md-9 header mt-4 mb-md-0 mb-4">
					<div className="row">
						<div className="col-10 agileits_search">
							<form className="form-inline">
								<input
									className="form-control mr-sm-2"
									type="search"
									placeholder="Search"
									aria-label="Search"
								/>
								<button
									className="btn my-2 my-sm-0"
									type="submit"
								>
									Search
								</button>
							</form>
						</div>
						<div className="col-2 top_nav_right text-center mt-sm-0 mt-2">
							<div className="wthreecartaits wthreecartaits2 cart cart box_1">
								<button
									className="btn w3view-cart"
									type="submit"
									name="submit"
									value=""
								>
									<i className="fas fa-cart-arrow-down" />
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
);
