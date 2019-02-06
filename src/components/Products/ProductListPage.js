import React from 'react';
import {Grid} from '@material-ui/core';
import {Link,withRouter} from "react-router-dom";
import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/core/styles';
import {Button} from '@material-ui/core';
import computers from '../../resources/Products/computers.jpg';

const styles = theme => ({
	Products:{
		padding: "0 20px",
		marginTop:"130px",
	},
	categories:{
		border:'1px solid #333',
		[theme.breakpoints.down('sm')]: {
     		 display: 'none',
    	}
	},
	producttitle:{
		fontSize:'13px',
		color:'blue',
		[theme.breakpoints.down('sm')]: {
     		marginTop:'0'
    	}
	},
	productIdName:{
		fontSize:'12px',
		color:'#000'
	},
    productid:{
    	fontSize:'11px',
    	color:'#333',
    	paddingLeft:'3px'
    },
    addToCart:{
    	textTransform:'capitalize',
    	backgroundColor:'yellow',
    	border:'none',
    	color:'#000',
    	width:'90%',
    	margin:'10px 0',
    	fontSize:'12px',
    	boxShadow:'none',
    	outline:'none'
    },
    checkout:{
    	textTransform:'capitalize',
    	backgroundColor:'orange',
    	border:'none',
    	color:'#000',
    	width:'90%',
    	margin:'10px 0',
    	fontSize:'12px'
    },
    buttonGroup:{
    	[theme.breakpoints.down('sm')]: {
      		display: 'none',
     }
    },
    showInMobile:{
    	display:'none',
    	[theme.breakpoints.down('sm')]: {
      		display: 'block',
     }
    },
    hideInMobile:{
    	display:'block',
    	[theme.breakpoints.down('sm')]: {
      		display: 'none',
     }
    },
    item:{
    	[theme.breakpoints.down('sm')]: {
      		marginBottom: '5px',
     }
    }
});


const ProductsComponent=(props)=>{
	const {classes,location}=props;
	return (
		<div className={classes.Products}>
			<Grid container spacing={16}>
			<Grid item lg={3} sm={3} className={classes.categories}>Filter</Grid>
			<Grid item lg={9} sm={9} xs={12}>
				<Link to={`${location.pathname}/12345`} className={classes.item}>
					<Grid container spacing={16}>
						<Grid item lg={3} sm={3} xs={3}><img src={computers} alt="computers" width='100%'/></Grid>
						<Grid item lg={6} sm={6} xs={9}>
							<p className={classes.producttitle}>Apple - MacBook Air - 13.3" Retina Display - Intel Core i5 - 8GB Memory - 
							128GB Flash Storage (Latest Model) - Gold</p>
							<p className={classes.productIdName}><strong>Model :</strong><span className={classes.productid}>SMJ737VZKV</span>
							 &nbsp;&nbsp;&nbsp;<strong>SKU :</strong><span className={classes.productid}>6251810</span></p>
							<div className={classes.hideInMobile}>
							<p>Shipping: Unavailable for 96939</p>
							<p>Store Pickup: Available for pickup today at Aiea.</p>
							<p>Act Quick – Only 2 left at your store!</p>
							<p>
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"/></svg>									
							</p>
							<p>Unfortunately, this item is only available for shipping in certain markets.</p>
							</div>
							<div className={classes.showInMobile}>
							<p>price :- $1,199.99</p>
							<Grid container spacing={8}>
							<Grid item xs={6}>
							<Button variant='contained' color='secondary' className={classes.addToCart}>
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/></svg>
							</Button>
							</Grid>
							<Grid item xs={6}>
							<Button variant='contained' color='secondary' className={classes.checkout}>
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/></svg>								
							</Button>
							</Grid>
							</Grid>
							</div>
						</Grid>
						<Grid item lg={3} sm={3} xs={3} className={classes.buttonGroup}>
							<p>price :- $1,199.99</p>
							<Button variant='contained' color='secondary' className={classes.addToCart}>
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/></svg>
							&nbsp;&nbsp;&nbsp;Add to cart</Button>
							<Button variant='contained' color='secondary' className={classes.checkout}>
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/></svg>								
							&nbsp;&nbsp;&nbsp;Proceed to Checkout</Button>
						</Grid>
					</Grid>
<Divider/>
				</Link>
				<Link to={`${location.pathname}/12345`} className={classes.item}>
					<Grid container spacing={16}>
						<Grid item lg={3} sm={3} xs={3}><img src={computers} alt="computers" width='100%'/></Grid>
						<Grid item lg={6} sm={6} xs={9}>
							<p className={classes.producttitle}>Apple - MacBook Air - 13.3" Retina Display - Intel Core i5 - 8GB Memory - 
							128GB Flash Storage (Latest Model) - Gold</p>
							<p className={classes.productIdName}><strong>Model :</strong><span className={classes.productid}>SMJ737VZKV</span>
							 &nbsp;&nbsp;&nbsp;<strong>SKU :</strong><span className={classes.productid}>6251810</span></p>
							<div className={classes.hideInMobile}>
							<p>Shipping: Unavailable for 96939</p>
							<p>Store Pickup: Available for pickup today at Aiea.</p>
							<p>Act Quick – Only 2 left at your store!</p>
							<p>
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"/></svg>									
							</p>
							<p>Unfortunately, this item is only available for shipping in certain markets.</p>
							</div>
							<div className={classes.showInMobile}>
							<p>price :- $1,199.99</p>
							<Grid container spacing={8}>
							<Grid item xs={6}>
							<Button variant='contained' color='secondary' className={classes.addToCart}>
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/></svg>
							</Button>
							</Grid>
							<Grid item xs={6}>
							<Button variant='contained' color='secondary' className={classes.checkout}>
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/></svg>								
							</Button>
							</Grid>
							</Grid>
							</div>
						</Grid>
						<Grid item lg={3} sm={3} xs={3} className={classes.buttonGroup}>
							<p>price :- $1,199.99</p>
							<Button variant='contained' color='secondary' className={classes.addToCart}>
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/></svg>
							&nbsp;&nbsp;&nbsp;Add to cart</Button>
							<Button variant='contained' color='secondary' className={classes.checkout}>
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/></svg>								
							&nbsp;&nbsp;&nbsp;Proceed to Checkout</Button>
						</Grid>
					</Grid>
				<Divider/>
				</Link>
				<Link to={`${location.pathname}/12345`} className={classes.item}>
					<Grid container spacing={16}>
						<Grid item lg={3} sm={3} xs={3}><img src={computers} alt="computers" width='100%'/></Grid>
						<Grid item lg={6} sm={6} xs={9}>
							<p className={classes.producttitle}>Apple - MacBook Air - 13.3" Retina Display - Intel Core i5 - 8GB Memory - 
							128GB Flash Storage (Latest Model) - Gold</p>
							<p className={classes.productIdName}><strong>Model :</strong><span className={classes.productid}>SMJ737VZKV</span>
							 &nbsp;&nbsp;&nbsp;<strong>SKU :</strong><span className={classes.productid}>6251810</span></p>
							<div className={classes.hideInMobile}>
							<p>Shipping: Unavailable for 96939</p>
							<p>Store Pickup: Available for pickup today at Aiea.</p>
							<p>Act Quick – Only 2 left at your store!</p>
							<p>
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"/></svg>									
							</p>
							<p>Unfortunately, this item is only available for shipping in certain markets.</p>
							</div>
							<div className={classes.showInMobile}>
							<p>price :- $1,199.99</p>
							<Grid container spacing={8}>
							<Grid item xs={6}>
							<Button variant='contained' color='secondary' className={classes.addToCart}>
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/></svg>
							</Button>
							</Grid>
							<Grid item xs={6}>
							<Button variant='contained' color='secondary' className={classes.checkout}>
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/></svg>								
							</Button>
							</Grid>
							</Grid>
							</div>
						</Grid>
						<Grid item lg={3} sm={3} xs={3} className={classes.buttonGroup}>
							<p>price :- $1,199.99</p>
							<Button variant='contained' color='secondary' className={classes.addToCart}>
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/></svg>
							&nbsp;&nbsp;&nbsp;Add to cart</Button>
							<Button variant='contained' color='secondary' className={classes.checkout}>
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/></svg>								
							&nbsp;&nbsp;&nbsp;Proceed to Checkout</Button>
						</Grid>
					</Grid>
				</Link>
			</Grid>
			</Grid>
		</div>	
		)
}

export default withStyles(styles)(withRouter(ProductsComponent));