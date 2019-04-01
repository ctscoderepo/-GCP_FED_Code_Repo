import React from 'react';
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Spinner from '../helpers/Spinner';

const styles = (theme) => ({
	productsComponent: {
		margin: '180px 0 20px 0',
		[theme.breakpoints.down('sm')]: {
			margin: '95px 20px 20px 20px'
		}
	},
	categories: {
		[theme.breakpoints.down('xs')]: {
			display: 'none'
		}
	},
	item: {
		[theme.breakpoints.down('sm')]: {
			marginBottom: '5px'
		}
	},
	categoriesHeading: {
		borderBottom: '1px solid lightgrey',
		padding: '5px 0',
		fontSize: '20px'
	},
	sideNav: {
		[theme.breakpoints.down('xs')]: {
			display: 'none'
		}
	},
	gridHide: {
		[theme.breakpoints.down('md')]: {
			display: 'none'
		}
	},
	spinnerDiv: {
		textAlign: 'center',
		marginTop: '5%',
		[theme.breakpoints.down('xs')]: {
			paddingLeft: '130px'
		}
	}
});

function SearchOutput({ airesults, classes }) {
	const spinner =
		airesults.length === 0 ? (
			<div className={classes.spinnerDiv}>
				<Spinner />
			</div>
		) : (
			<Grid container spacing={16}>
				{airesults.map((product) => (
					<Grid item lg={3} md={4} sm={4} xs={6} key={product.skuId}>
						<div className="productWrapper">
								<div className="imageWrapper">
									<img src={product.images[0]} alt="mac book prop" />
								</div>
								<div className="productDetail">
									<div className="title">{product.productName}</div>
									{/*<span className="rated">{rating()}</span>*/}
									<div className="price">
										{product.currencyCode === 'USD' && '$'} <span>{product.price}</span>
									</div>
								</div>
						</div>
					</Grid>
				))}
			</Grid>
		);
	return (
		<div className={classes.productsComponent}>
			<Grid container spacing={16}>
				<Grid item lg={2} md={3} sm={3} className={classes.sideNav}>
					{/*<SideNav {...categoryDetails} />*/}
				</Grid>
				<Grid item lg={1} className={classes.gridHide} />
				<Grid item lg={9} md={9} sm={9}>
					{spinner}
				</Grid>
			</Grid>
		</div>
	);
}

export default withStyles(styles)(SearchOutput);
