import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Spinner from "../helpers/Spinner";
import Grid from "@material-ui/core/Grid";
import SideNav from "../SideNav";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import "./index.css";

const styles = theme => ({
  productsComponent: {
    margin: "150px 0 20px 0",
    [theme.breakpoints.down("sm")]: {
      margin: "140px 20px 20px 20px"
    },
      [theme.breakpoints.down("xs")]: {
      margin: "130px 20px 20px 20px"
    }
  },
  categories: {
    [theme.breakpoints.down("xs")]: {
      display: "none"
    }
  },
  item: {
    [theme.breakpoints.down("sm")]: {
      marginBottom: "5px"
    }
  },
  categoriesHeading: {
    borderBottom: "1px solid lightgrey",
    padding: "5px 0",
    fontSize: "20px"
  },
  sideNav: {
    [theme.breakpoints.down("xs")]: {
      display: "none"
    }
  },
  gridHide: {
    [theme.breakpoints.down("md")]: {
      display: "none"
    }
  },
  Spin: {
    textAlign: "center",
    marginTop: "200px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "100px",
      marginLeft: "130px"
    }
  },
  spinnerDiv: {
    textAlign: "center",
    marginTop: "5%",
    [theme.breakpoints.down("xs")]: {
      marginLeft:"120px"
    }  
  },
  imageWrapper: {
    marginLeft: "auto",
    marginRight: "auto",
    display: "block",
    height: "350px",
    width: "95%",
      border:"1px solid #d9d9d9",
      borderRadius:"2px",
    [theme.breakpoints.down("sm")]: {
      height: "250px",
      width: "95%"
    },
    [theme.breakpoints.down("xs")]: {
      height: "200px",
      width: "95%"
    }
  },
    dividerStyle:{
        backgroundColor:"#e6e6e6",
        height:"2px", 
        marginTop:"20px"
    },
    relevanceInput:{
    padding:"10px",
        border:"1px solid #cccccc",
       [theme.breakpoints.down("xs")]: {
          padding:"5px"  ,
           marginLeft:"10px",
           width:"30%"
        } 
    },
    relevance:{
       textAlign:"right",marginTop:"-20px",
       [theme.breakpoints.down("xs")]: {
          marginTop:"-25px",
          fontSize:"13px",
        } 
    },
    productLine:{
        [theme.breakpoints.down("lg")]: {
        fontSize:"20px"
        },
        [theme.breakpoints.down("sm")]: {
        fontSize:"16px"
        },
        [theme.breakpoints.down("xs")]: {
        fontSize:"14px",
        }
    },
});

const rating = () => (
  <>
    <span>
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
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </svg>
    </span>
    <span className="unrated">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z" />
      </svg>
    </span>
  </>
);

function Products({ products, catType, classes, isLoading }) {
  console.log("ffffffff", products);

  const [mainCategory, setmainCategory] = useState();

  useEffect(() => {
    if (products) {
      let mainCat = "";
      products.forEach(item => {
        mainCat = item.categories[0];
      });
      setmainCategory(mainCat);
    }
  });

  console.log(mainCategory);
  const spinner =
    products.length === 0 ? (
      isLoading ? (
        <div className={classes.spinnerDiv}>
          <Spinner />
        </div>
      ) : (
        <div className={classes.Spin}>
          No Products to display at this moment.
        </div>
      )
    ) : (
      <Grid container spacing={16}>
        {products.map(product => (
          <Grid item lg={4} md={4} sm={4} xs={6} key={product.skuId}>
            <div >
              <Link
                to={`/store/product/${product.skuId}`}
                className={classes.item}
              >
                <div className="">
                  <img
                    className={classes.imageWrapper}
                    src={product.images[0]}
                    alt="mac book prop"
                  />
                </div>
                <div className="productDetail">
                  <div className="title">{product.productName}</div>
                  <span className="rated" >{rating()}</span>
                  <div className="price"><strong>
                    {product.currencyCode === "USD" && "$"}{" "}
                    <span>{product.price}</span>
                  </strong></div>
                </div>
              </Link>
            </div>
          </Grid>
        ))}
      </Grid>
    );
  return (
    <div className={classes.productsComponent}>
      <div style={{ marginBottom: "30px"}}>
        <Typography className={classes.productLine}>
          <strong>{mainCategory}</strong>
        </Typography>
{mainCategory?<div className={classes.relevance}>
            Sort by <input type="text" value="Relevance" className={classes.relevanceInput}/></div>:""}
        <div>{mainCategory?<Divider className={classes.dividerStyle}/>:""}</div>
      </div>
     
      <Grid container spacing={16}>
        <Grid item lg={3} md={3} sm={3} className={classes.sideNav}>
          <div style={{height:"40px", paddingTop:"10px"}}>
            <Typography>FILTERS</Typography>
     </div>
          <SideNav />
        </Grid>
       
        <Grid item lg={9} md={9} sm={9}>
          {spinner}
        </Grid>
      </Grid>
    </div>
  );
}

export default withStyles(styles)(withRouter(Products));
