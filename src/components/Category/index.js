import React from "react";
import { Grid } from "@material-ui/core";
import { Link, withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import c6 from "../../resources/Products/c6.jpeg";
import c7 from "../../resources/Products/c7.jpeg";
import c8 from "../../resources/Products/c8.jpeg";
import Select from '../helpers/Select';
import "./index.css";

const styles = theme => ({
  Products: {
    marginTop: "150px"
  },
  catItem: {
    textAlign: "center"
  },
  categoriesHeading: {
    borderBottom: "1px solid lightgrey",
    paddingBottom: "10px",
    fontSize: "20px"
  },
  categories:{
    [theme.breakpoints.down("sm")]: {
        display:'none'
    }
  }
});

const CategoryComponent = props => {
  const { classes, location } = props;
  return (
    <div className="componentContainer">
      <div className={classes.Products}>
       {/** <Grid container spacing={32} className={classes.productHeadings}>
          <Grid item lg={3} sm={3}>
            <div className={classes.categoriesHeading}>Categories</div>
          </Grid>
          <Grid item lg={9} sm={9}>
            <Grid item lg={12} sm={12}>
              <div className={classes.categoriesHeading}>Others</div>
            </Grid>
          </Grid>
        </Grid>
      **/}
        <Grid container spacing={32}>
          <Grid item lg={3} sm={3} className={classes.categories}>
            <p>
              <Link
                to={`${location.pathname}/electronics`}
                className="catergoryLink"
              >
                Electronics
              </Link>
            </p>
            <p>
              <Link
                to={`${location.pathname}/computers`}
                className="catergoryLink"
              >
                Toys
              </Link>
            </p>
            <p>
              <Link
                to={`${location.pathname}/computers`}
                className="catergoryLink"
              >
                Apparel
              </Link>
            </p>
            <p>
              <Link
                to={`${location.pathname}/computers`}
                className="catergoryLink"
              >
                Home Decor
              </Link>
            </p>
            <p>
              <Link
                to={`${location.pathname}/computers`}
                className="catergoryLink"
              >
                Gift Cards
              </Link>
            </p>
          </Grid>
          <Grid item lg={9} sm={9}>
            <Grid container>
              <Grid lg={12} item>
                <Grid container>
                    <Grid item lg={3} sm={3} xs={6}><div className='sortByPrice'>Sort by <Select/></div></Grid>
                    <Grid item lg={5} sm={3} xs={6}><div className='displayPerPage'> Display per page <Select/></div></Grid>
                    <Grid lg={4} item/>
                </Grid>    
              </Grid>
            </Grid>
            <Grid container spacing={16}>
              <Grid lg={4} sm={4} xs={12} item>
                <Link to={`${location.pathname}/computers`}>
                  <p className={classes.catItem}>Computers</p>
                  <div className="imageWrapper">
                    <img src={c6} alt="computers" />
                  </div>
                </Link>
              </Grid>
              <Grid lg={4} sm={4} xs={12} item>
                <Link to={`${location.pathname}/computers`}>
                  <p className={classes.catItem}>Mobiles</p>
                  <div className="imageWrapper">
                    <img src={c7} alt="mobiles" />
                  </div>
                </Link>
              </Grid>
              <Grid lg={4} sm={4} xs={12} item>
                <Link to={`${location.pathname}/computers`}>
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
  );
};

export default withStyles(styles)(withRouter(CategoryComponent));
