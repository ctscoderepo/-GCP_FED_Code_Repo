import React from 'react';
import {Grid} from '@material-ui/core';
import {Link,withRouter} from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import c1 from '../../resources/Products/c1.jpeg';
import c4 from '../../resources/Products/c4.jpeg';
import c5 from '../../resources/Products/c5.jpeg';
import './index.css';

const styles = theme => ({
	Products:{
        padding:'0 15px',
		marginTop:"140px",
	},
	categories:{
		border:'1px solid #333',
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
        <div className="componentContainer">
    		<div className={classes.Products}>
    			<Grid container spacing={32}>
    			<Grid item lg={3} sm={3} className={classes.categories}>Categories</Grid>
    			<Grid item lg={9} sm={9} xs={12}>
    				<Link to={`${location.pathname}/12345`} className={classes.item}>
    					<Grid container spacing={8}>
    					   <Grid item lg={4}>
                                <div className="imageWrapper">
                                    <img src={c1} alt="mac book prop" />
                                </div>
                                <div className="productDetail">
                                    <p className='title'>Apple MacBook Pro 13-inch</p>
                                    <>
                                        <span className='rated'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                                        </span>
                                        <span className="unrated">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"/></svg>
                                        </span>    
                                    </>
                                    <p className="price">
                                        $ <span>1729</span>
                                    </p>
                                </div>
                           </Grid>
                            <Grid item lg={4}>
                                <div className="imageWrapper">
                                    <img src={c4} alt="mac book prop" />
                                </div>
                                <div className="productDetail">
                                    <p className='title'>Apple MacBook Pro 13-inch</p>
                                    <>
                                        <span className='rated'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                                        </span>
                                        <span className="unrated">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"/></svg>
                                        </span>    
                                    </>
                                    <p className="price">
                                        $ <span>2521</span>
                                    </p>
                                </div>
                           </Grid>
                            <Grid item lg={4}>
                                <div className="imageWrapper">
                                    <img src={c5} alt="mac book prop" />
                                </div>
                                <div className="productDetail">
                                    <p className='title'>Apple MacBook Pro 13-inch</p>
                                    <>
                                        <span className='rated'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                                        </span>
                                        <span className="unrated">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"/></svg>
                                        </span>    
                                    </>
                                    <p className="price">
                                        $ <span>3780</span>
                                    </p>
                                </div>
                           </Grid>
    					</Grid>	
    				</Link>
    			</Grid>
    			</Grid>
    		</div>
        </div>    	
		)
}

export default withStyles(styles)(withRouter(ProductsComponent));