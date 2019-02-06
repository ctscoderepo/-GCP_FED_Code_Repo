import React from "react";
import { Grid, Button } from "@material-ui/core";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';
import { withStyles } from "@material-ui/core/styles";
// import ReactImageZoom from "react-image-zoom";
import computers from "../../resources/Products/computers.jpg";
import c2 from "../../resources/Products/c2.jpg";
import c1 from "../../resources/Products/c1.jpg";
import "./index.css";

const styles = theme => ({
	productid:{
		fontSize:'12px',
		paddingLeft:'5px',
		color:'#333',
		verticalAlign:'middle'
	},
	addToCart: {
		textTransform: "capitalize",
		backgroundColor: "#0084CD",
		border: "none",
		color: "#fff",
		width: "100%",
		margin: "10px 0",
		fontSize: "12px",
		boxShadow: "none",
		outline: "none",
		fill:'#fff',
		'&:hover':{
			backgroundColor:"0084CD"
		}
	},
	checkout: {
		textTransform: "capitalize",
		color: "#000",
		margin: "10px 0",
		width: "100%",
		fill:'#000'
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
    ]

const ProductDetailComponent = props => {
	const { classes } = props;
	return (
		<div className="productDetailComponent">
			<Grid container>
				<Grid lg={6} sm={6} xs={12} item>
					<ImageGallery items={images} autoPlay={false} thumbnailPosition="left" showPlayButton={false} showNav={false}/>
				</Grid>
				<Grid lg={6} sm={6} xs={12} item>
					<p className={classes.producttitle}>
						Apple - MacBook Air - 13.3" Retina Display - Intel Core
						i5 - 8GB Memory - 128GB Flash Storage (Latest Model) -
						Gold
					</p>
					<p className={classes.productIdName}>
						<strong>Model :</strong>
						<span className={classes.productid}>SMJ737VZKV</span>
						&nbsp;&nbsp;&nbsp;<strong>SKU :</strong>
						<span className={classes.productid}>6251810</span>
					</p>
					<p>Shipping: Unavailable for 96939</p>
					<p>Store Pickup: Available for pickup today at Aiea.</p>
					<p>Act Quick – Only 2 left at your store!</p>
					<p>
						<span className='rated'>
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
					<p>
						Unfortunately, this item is only available for shipping
						in certain markets.
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
								className={classes.checkout}
							>
								Save for later
							</Button>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</div>
	);
};

export default withStyles(styles)(ProductDetailComponent);
