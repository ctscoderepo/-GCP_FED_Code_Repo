import React, {useState} from "react";
import { Grid, Button } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import { withStyles } from "@material-ui/core/styles";
// import ReactImageZoom from "react-image-zoom";
import ExanpsionPanel from "../helpers/ExpansionPanel";
import { connect } from "react-redux";
import { addToCart } from "../../actions/Cart";
import Spinner from "../helpers/Spinner";
import { Markup } from 'interweave';
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import "./index.css";

const styles = theme => ({
    root:{
        marginTop:"200px"
    },
  productid: {
    fontSize: "12px",
    paddingLeft: "5px",
    color: "#333",
    verticalAlign: "middle"
  },
  addToCart: {
    textTransform: "uppercase",
    backgroundColor: "#00b300",
    borderRadius: "5px",
    width: "100%",
    margin: "10px 0",
    fontSize: "12px",
    boxShadow: "none",
    outline: "none",
    color: "    white",
    border: "1px solid #00b300",
    fontWeight: "500",
    fill: "#000",
    "&:hover": {
      color: "#fff",
      backgroundColor: "#00cc00",
      fill: "#fff",
      border: "1px solid #00cc00"
    },
      [theme.breakpoints.down("sm")]: {
      whiteSpace:"nowrap"
    }
  },
  producttitle: {
    fontWeight: "bold",
      marginTop:"50px",
      [theme.breakpoints.down("xs")]: {
      fontSize:"13px"
    } 
  },
  Spinner: {
    textAlign: "center",
    marginTop: "200px",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "30px",

    }
  },
    dividerStyle:{
        backgroundColor:"#e6e6e6",
        height:"2px", 
        marginTop:"20px"
    },
    qtyBtnPlus:{
        background:"#e6e6e6",
        border:"1px solid gray",
        fontSize:"20px",
        padding:"8px 10px 8px 10px",
        borderRadius:"2px",
        "&:hover": {
      cursor: "pointer"
    },
    },
     qtyBtnMinus:{
        background:"#e6e6e6",
        border:"1px solid gray",
        fontSize:"20px",
        padding:"8px 14px 8px 14px",
        borderRadius:"2px",
         "&:hover": {
      cursor: "pointer"
    },
         [theme.breakpoints.down("xs")]: {
         padding:"8px 12px 8px 12px",
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
        fontSize:"12px",
        }
    },
    relevance:{
       textAlign:"right",marginTop:"-20px",
       [theme.breakpoints.down("xs")]: {
          marginTop:"10px",
          fontSize:"13px"   
        } 
    },
    relevanceInput:{
    padding:"10px",
        border:"1px solid #cccccc",
       [theme.breakpoints.down("xs")]: {
          padding:"5px"  ,
           marginLeft:"10px"
        } 
    },
    priceDiv:{
        marginTop:"20px",
        [theme.breakpoints.down("xs")]: {
         fontSize:"13px"
        } 
    },
    productdesc:{
        fontSize:"14px",
         [theme.breakpoints.down("xs")]: {
         fontSize:"13px"
        }
    },
    stockQnty:{
        marginTop:"10px",
        textTransform: "uppercase",
        [theme.breakpoints.down("xs")]: {
         fontSize:"12px"
        }
    } 
});


const ProductDetailComponent = props => {
  const { classes, addtoCart, product, history } = props;
  const images = (a) => [
    {
      original: a,
      thumbnail: a
    },
    {
      original: a,
      thumbnail: a
    },
    {
      original: a,
      thumbnail: a
    }
      
  ];

  let orderInfo = JSON.parse(localStorage.getItem("orderDetails"));
  let userInfo = JSON.parse(localStorage.getItem("userData1"));

  const memberId = userInfo && userInfo.id ? userInfo.id : "";
  const orderId = orderInfo && orderInfo.orderId ? orderInfo.orderId : "";

    const [quantity, setQuantity]=useState(1);
    const addQuantity=()=>{
        const totalCount=quantity +1;
    setQuantity(totalCount);
    }
    
    const removeQuantity=()=>{
        if(quantity>1)
        {
        const totalCount=quantity - 1;
        setQuantity(totalCount);    
        }
    }

  const addToCartClick = (e) => {
    e.preventDefault();

    addtoCart({
      "orderId": orderId,
      "memberId": memberId,
      "productId": product.id,
      "price": product.price,
      "quantity": quantity
    });
    history.push("/Cart")
  }
 console.log(product);

    
    
  return (
    <div className="productDetailComponent">
      {product ? (
        <Grid container style={{marginTop:"130px"}}>
         <Grid item lg={12} sm={12} xs={12}>
           <Typography className={classes.productLine}><strong>{product.categories[0] + " > " + product.categories[1] + " > "+ product.productName}</strong></Typography>
           <div className={classes.relevance} >
                    Sort by <input type="text" value="Relevance"  className={classes.relevanceInput}/></div>
            <div>{product?<Divider className={classes.dividerStyle}/>:""}</div>
          </Grid>
          <Grid lg={7} sm={6} xs={12} item>
           <div style={{marginTop:"30px",height:"300px", marginRight:"20px"}}>
            <ImageGallery 
              items={images(product.images[0])}
              autoPlay={false}
              thumbnailPosition="left"
              showPlayButton={false}
              showNav={false}
              showFullscreenButton={true}
            />
            </div>
            
          </Grid>
          <Grid lg={5} sm={6} xs={12} item>
              <div  className={classes.producttitle}><strong>{product.productName}</strong></div>
                  
              <div className={classes.priceDiv} ><strong>{product.currencyCode === 'USD' && "$"} {product.price}</strong>
            <div style={{textAlign:"right", marginTop:"-40px",}}>
            <p style={{marginRight:"70px"}}>
              <span className="rated">
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z" />
              </svg>
            </p>
            <Typography style={{marginTop:"-38px"}}> 4.0 of 5</Typography>
            </div>
            
            </div>
            <Divider className={classes.dividerStyle}/>
            <div style={{marginTop:"10px"}}>
            <Typography><strong>Description</strong></Typography>
                <div className={classes.productdesc}><Markup content={product.longDescription}/> </div>
            </div>
           <Divider className={classes.dividerStyle}/>
            <div className={classes.stockQnty}><strong>Stock Quantity : <span>{product.stockQuantity}</span></strong></div>
            <Divider className={classes.dividerStyle}/>
            <div className={classes.stockQnty} ><strong>Quantity</strong></div>    
            <Grid container spacing={8}>
                <Grid item lg={4} sm={4} xs={12}>
                    <div style={{marginTop:"10px"}}>
                    <button className={classes.qtyBtnMinus} onClick={removeQuantity}>-</button>
                        <span className="qty">{quantity}</span>
                    <button className={classes.qtyBtnPlus} onClick={addQuantity}>+</button></div>
              </Grid>
              <Grid item lg={4} sm={4} xs={12}>
                <Button
                  variant="contained"
                  color="secondary"
                  className={classes.addToCart}
                  onClick={addToCartClick}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="white"
                  >
                    <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
                  </svg>
                  &nbsp;&nbsp;&nbsp;Add to cart
                </Button>
              </Grid>
              {/* <Grid item lg={4} sm={4} xs={12}>
                <Button
                  variant="outlined"
                  color="primary"
                  className={classes.addToCart}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z" />
                    </svg>
                  </svg>
                  &nbsp;&nbsp;&nbsp; Save for later
                </Button>
              </Grid> */}
                
            </Grid>
            
          </Grid>
        </Grid>
      ) : (<div className={classes.Spinner}>	<Spinner /> </div>)}
    </div>
  );
};

export default connect(
  null,
  dispatch => ({
    addtoCart: (product) => {
      dispatch(addToCart(product));
    }
  })
)(withStyles(styles)(withRouter(ProductDetailComponent)));
