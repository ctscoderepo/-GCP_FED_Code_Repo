import React from "react";
import { Link, withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Spinner from "../helpers/Spinner";
import Grid from "@material-ui/core/Grid";
import SideNav from "../SideNav";
import c1 from "../Home/images/f1.jpeg";
import "./index.css";

const styles = theme => ({
  Products: {
    padding: "0 15px",
    marginTop: "165px"
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
  }
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

function Products({ products, location, classes }) {
  console.log(products);
  const spinner =
    products.length === 0 ? (
      <div className="spinner">
        <Spinner />
      </div>
    ) : (
      <Grid container spacing={16}>
        {products.map(product => (
          <Grid item lg={4} sm={4} xs={12} key={product.skuId}>
            <Link
              to={`${location.pathname}/${product.skuId}`}
              className={classes.item}
            >
              <div className="imageWrapper">
                <img src={c1} alt="mac book prop" />
              </div>
              <div className="productDetail">
                <div className="title">{product.productName}</div>
                <>
                  <span className="rated">{rating()}</span>
                </>
                <div className="price">
                  {product.currencyCode === "USD" && "$"}{" "}
                  <span>{product.price}</span>
                </div>
              </div>
            </Link>
          </Grid>
        ))}
      </Grid>
    );
  return (
    <div className="productsComponent">
      <Grid container spacing={16}>
        <Grid item lg={2}>
          <SideNav />
        </Grid>
        <Grid item lg={1} />
        <Grid item lg={9}>
          {spinner}
        </Grid>
      </Grid>
    </div>
  );
}

export default withStyles(styles)(withRouter(Products));
