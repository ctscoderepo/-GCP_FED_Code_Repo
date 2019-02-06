import React from 'react';
import {Grid} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Featured from '../Featured';
import featured01 from '../../resources/Products/featured-01.jpg';
import './Homes.css';

const styles = theme => ({
HomeComponent :{
  padding: "50px 20px 10px 20px",
  [theme.breakpoints.down('sm')]: {
      padding: '5px 10px 5px 10px',
    }
},
itemContainer:{
  position:'relative'
}
});

const HomeComponent = (props) => {
  const {classes}=props;
  return (
    <div className={classes.HomeComponent}>
    <Grid container spacing={16}>
    <Grid item lg={12} xs={12}>
    <Featured/>
    </Grid>
    </Grid>
        <h3 className='featuredProductsHeading'>Featured products</h3>
    <Grid container>
    <Grid lg={3} sm={3} xs={6} item className={classes.itemContainer}>
    <div className="imagewrapper">
        <img src={featured01} alt="featured-01" />
    </div>
    </Grid>
    <Grid lg={3} sm={3} xs={6} item className={classes.itemContainer}>
    <div className="imagewrapper">
        <img src={featured01} alt="featured-01" />
    </div>
    </Grid>
    <Grid lg={3} sm={3} xs={6} item className={classes.itemContainer}>
    <div className="imagewrapper">
        <img src={featured01} alt="featured-01" />
    </div>
    </Grid>
    <Grid lg={3} sm={3} xs={6} item className={classes.itemContainer}>
    <div className="imagewrapper">
        <img src={featured01} alt="featured-01" />
    </div>
    </Grid>
     </Grid>
    </div>
  )
}

export default withStyles(styles)(HomeComponent);