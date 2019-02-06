import React from 'react';
import {Grid} from '@material-ui/core';
import {Link,withRouter} from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import c6 from '../../resources/Products/c6.jpeg';
import c7 from '../../resources/Products/c7.jpeg';
import c8 from '../../resources/Products/c8.jpeg';
import './index.css';

const styles = theme => ({
	Products:{
		marginTop:"140px"
	},
	categories:{
		border:'1px solid #333'
	},
	catItem:{
		textAlign:'center'
	}
});


const CategoryComponent=(props)=>{
	const {classes,location}=props;
	return (
			<div className="componentContainer">
				<div className={classes.Products}>
					<Grid container spacing={16}>
					<Grid item lg={3} sm={3} className={classes.categories}>Categories</Grid>
					<Grid item lg={9} sm={9}>
						<Grid container spacing={16}>
								<Grid lg={4} sm={4} xs={12} item> 
									<Link to={`${location.pathname}/computers`} >
									<p className={classes.catItem}>Computers</p>
										<div className="imageWrapper">
											<img src={c6} alt="computers" />
										</div>
									</Link>
								</Grid>
								<Grid lg={4} sm={4} xs={12} item> 
									<Link to={`${location.pathname}/computers`} >
										<p className={classes.catItem}>Mobiles</p>
										<div className="imageWrapper">
											<img src={c7} alt="mobiles" />
										</div>
									</Link>
								</Grid>
								<Grid lg={4} sm={4} xs={12} item> 
									<Link to={`${location.pathname}/computers`} >
										<p className={classes.catItem}>Cameras</p>
										<div className="imageWrapper">
											<img src={c8} alt="Cameras" />
										</div>
									</Link>
								</Grid>
						</Grid>
					</Grid>
					</Grid>
				</div>	
			</div>
		)
}

export default withStyles(styles)(withRouter(CategoryComponent));