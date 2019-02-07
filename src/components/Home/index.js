import React from 'react';
import {Grid, Button} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Featured from '../Featured';
import f1 from '../../resources/featuredproducts/f1.jpeg';
import f2 from '../../resources/featuredproducts/f2.jpeg';
import f3 from '../../resources/featuredproducts/f3.jpeg';
import f4 from '../../resources/featuredproducts/f4.jpeg';
import './index.css';

const styles = theme => ({
HomeComponent :{
  padding: "60px 20px 10px 20px",
  [theme.breakpoints.down('sm')]: {
      padding: '5px 10px 5px 10px',
    }
},
itemContainer:{
  position:'relative'
},
featuredproducts:{
  marginBottom:"20px",
}
});

const HomeComponent = (props) => {
  const {classes}=props;
  return (
    <div className={`${classes.HomeComponent} componentContainer`}>
      <Grid container spacing={16}>
        <Grid item lg={12} xs={12}>
          <Featured/>
        </Grid>
      </Grid>
      <h3 className='featuredProductsHeading'>Featured products</h3>
      <Grid container spacing={32} className={classes.featuredproducts}>
        <Grid lg={3} sm={3} xs={6} item className={classes.itemContainer}>
            <div className="imagewrapper">
                <img src={f1} alt="featured-01" />
                 <div className='featuredProductButton'>
                   <Button variant="outlined" className={classes.button}>
                    view
                  </Button>
                </div>
                <section className='featuredProductContent'>
                 <p>Apple iCam</p>
                 <p>$1300.00</p>
               </section>
            </div>
        </Grid>
        <Grid lg={3} sm={3} xs={6} item className={classes.itemContainer}>
          <div className="imagewrapper">
              <img src={f2} alt="featured-02" />
               <div className='featuredProductButton'>
                 <Button variant="outlined" className={classes.button}>
                  view
                </Button>
              </div>
              <section className='featuredProductContent'>
                 <p>HTC One M8 Android L 5.0 Lollipop</p>
                 <p>$245.00</p>
               </section>
          </div>
        </Grid>
        <Grid lg={3} sm={3} xs={6} item className={classes.itemContainer}>
          <div className="imagewrapper">
              <img src={f3} alt="featured-03" />
               <div className='featuredProductButton'>
               <Button variant="outlined" className={classes.button}>
                view
              </Button>
              </div>
              <section className='featuredProductContent'>
                 <p>Portable loud speaker</p>
                 <p>$745.00</p>
               </section>
          </div>
        </Grid>
        <Grid lg={3} sm={3} xs={6} item className={classes.itemContainer}>
          <div className="imagewrapper">
              <img src={f4} alt="featured-04" />
               <div className='featuredProductButton'>
                 <Button variant="outlined" className={classes.button}>
                    view
                </Button>
               </div> 
               <section className='featuredProductContent'>
                 <p>Custom T-shirt</p>
                 <p>$245.00</p>
               </section>
          </div>
        </Grid>
       </Grid>
    </div>
  )
}

export default withStyles(styles)(HomeComponent);