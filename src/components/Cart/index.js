import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Divider from "@material-ui/core/Divider";
import c1 from "../Home/images/f1.jpeg";
import c3 from "../HeroContentBlock/images/slide_two.jpg";
import c2 from "../HeroContentBlock/images/slide_three.jpg";
import Spinner from "../helpers/Spinner";
import ExpressCheckout from "../StripeCheckout";
import DeleteIcon from '@material-ui/icons/Delete';
import Tooltip from "@material-ui/core/Tooltip";
import "./index.css";

const styles = theme => ({
  root: {
      width:"100%",
    flexGrow: 1,
    marginTop: "150px",
      [theme.breakpoints.down("xs")]: {
     marginTop: "110px",
    }
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  cartBar: {
    backgroundColor: "#e6e6e6",
    height: "auto",
    padding: "10px",
    fontsize: "20px"
  },
  cartBarHead: {
    fontsize: "20px"
  },

  prilst: {
    padding: "15px",
      [theme.breakpoints.down("xs")]: {
      marginTop:"-30px"
    }
      
  },
    prilst1:{
        padding: "15px",
    },
    
  txtaln: {
    textAlign: "right"
  },
  lineHeight: {
    height: "35px"
  },
  yourOrdTxt: {
    fontSize: "11px",
    padding: "0px 15px 0px 15px"
  },
  btnStyle: {
    textTransform: "uppercase",
    backgroundColor: "#008000",
    borderRadius: "5px",
    width: "100%",
    margin: "10px 0",
    fontSize: "12px",
    boxShadow: "none",
    outline: "none",
    color: "#fff",
    border: "none",
    fontWeight: "bold",
    fill: "#000",
    "&:hover": {
      color: "#fff",
      backgroundColor: "#009900",
    }
  },
  removeItemsBtn: {
    textTransform: "uppercase",
    backgroundColor: "#008000",
    borderRadius: "5px",
    width: "100px",
    margin: "10px 0",
    fontSize: "12px",
    boxShadow: "none",
    outline: "none",
    color: "#fff",
    border: "none",
    fontWeight: "bold",
    fill: "#000",
    "&:hover": {
      color: "#fff",
      backgroundColor: "#009900",
    }
  },    
  btnGuestCheckout: {
    textTransform: "uppercase",
    backgroundColor: "#008000",
    borderRadius: "5px",
    width: "100%",
    margin: "10px 0",
    fontSize: "12px",
    boxShadow: "none",
    outline: "none",
    color: "#0084CD",
    border: "2px solid #0084CD",
    fontWeight: "400",
    fill: "#000",
    "&:hover": {
      backgroundColor: "#009900",
      color: "white"
    }
  },
  promoButton: {
    borderRadius: "5px",
    border: "1px solid #333",
    width: "70%",
    height: "39%",
    margin: "15px 0",
    fontSize: "12px",
    boxShadow: "none",
    outline: "none",
    color: "#202121",
    fontWeight: "500",
    fill: "#000",
    "&:hover": {
      backgroundColor: "transparent"
    }
  },
  promoInput: {
    width: "100%",
    height: "40%"
  },
  rowHeight30: {
    height: "30px"
  },

  marTopDest: {
    marginTop: "15px",
    [theme.breakpoints.down("xs")]: {
      display: "none"
    }
  },
  bgcolor: {
    backgroundColor: "#bfbfbf"
  },
  marLeft: {
    margin: "10px 0 10px 15px"
  },
  subHide: {
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  },
  needHelps: {
    [theme.breakpoints.down("lg")]: {
      display: "none"
    }
  },

  yourOrd: {
    fontSize: "20px",
    padding: "10px"
  },
  orderLblHide: {
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  },
  seletBox: {
    width: "70%",
    heigth: "70%"
  },
  btnTextColor: {
    color: "#33adff"
  },
  padding: {
    padding: "15px"
  },
  paddingRight: {
    paddingRight: "15px"
  },
  txtAlnCenter: {
    textAlign: "center"
  },
  marButtom: {
    marginButton: "20px"
  },
  cartDiv1: {
    backgroundColor: "#f2f2f2",
    height: "auto",
    padding: "10px",
    fontsize: "20px",
    marginBottom: "30px"
  },
  dsCartHead: {
    fontSize: "30px",
    fontStyle: "italic",
    padding: "10px 0px 20px 0px",
      fontWeight:"bold",
    [theme.breakpoints.down("sm")]: {
     fontSize: "22px",
        fontWeight:"bold"
    },
      [theme.breakpoints.down("xs")]: {
     fontSize: "18px",
          fontWeight:"bold"
    }
  },
  shopMoreBtn: {
    width: "100%",
    Height: "auto",
    marginTop: "20px",
    border: "1px solid gray",
      fontWeight:"bold",
    "&:hover": {
      backgroundColor: "transparent"
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px",
      marginTop: "10px",
      marginBottom: "10px",
      padding: "5px",
      whiteSpace: "nowrap"
    },
      [theme.breakpoints.down("xs")]: {
     marginTop:"0px"
    }
  },
  cartLabel: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "14px"
    }
  },
  helpSection: {
    border: "1px solid black",
    padding: "5px",
    margin: "15px"
  },
  orderContainer: {
    padding: "25px",
    backgroundColor: "#f2f2f2",
    height: "auto",
    [theme.breakpoints.down("sm")]: {
      padding: "0px"
    }
  },

  bgColorWhite: {
    backgroundColor: "#fff"
  },
  helpGrid: {
    marginTop: "20px",
    padding: "15px",
    backgroundColor: "#fff",
    width: "100%"
  },
  menuList: {
    width: "50%",
    heigth: "50px",
    minWidth: "auto"
  },

  helpHide: {
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  },
  recentItemHead: {
    fontSize: "24px",
    marginLeft: "15px"
  },
  devider: {
    backgroundColor: "#bfbfbf",
    marginLeft: "15px"
  },
  padding15: {
    padding: "15px"
  },
  margin5: {
    marginRight: "10px"
  },
  recentlyViewCont: {
    [theme.breakpoints.down("sm")]: {
      display: "block"
    },
      [theme.breakpoints.down("xs")]: {
      display: "none"
    }
  },
  qtyCol: {
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      textAlign: "right"
    }
  },
  shipping: {
    fontSize: "14px",
    padding: "10px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "13px"
    }
  },
  removeItem: {
    padding: "0 10px",
    color: "#005580",
    "&:hover": {
      cursor: "pointer"
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "14px"
    }
  },
  spinnerDiv: {
    textAlign: "center",
    marginTop: "5%"
  },
  imageWrapperMob: {
    height: "110px",
    width: "100%",
    display: "block"
  },
  mobileView: {
    [theme.breakpoints.down("lg")]: {
      display: "none"
    },
    [theme.breakpoints.down("sm")]: {
      display: "none"
    },
    [theme.breakpoints.down("xs")]: {
      display: "block",
      marginTop: "-50px"
    }
  },

  deskTabView: {
    [theme.breakpoints.down("xs")]: {
      display: "none"
    }
  },
  dividerDisplay: {
    [theme.breakpoints.down("xs")]: {
      display: "none"
    }
  },
    qtyBtnPlus: {
    background: "#e6e6e6",
    border: "1px solid gray",
    fontSize: "20px",
        height:"30px",
    padding: "0px 10px 0px 10px",
    borderRadius: "2px",
    "&:hover": {
      cursor: "pointer"
    },
    [theme.breakpoints.down("xs")]: {
      height:"25px",
    }
  },
  qtyBtnMinus: {
    background: "#e6e6e6",
    border: "1px solid gray",
    fontSize: "20px",
    padding: "0px 13px 0px 13px",
        height:"30px",
    borderRadius: "2px",
    "&:hover": {
      cursor: "pointer"
    },
    [theme.breakpoints.down("lg")]: {
      marginLeft:"35px"
    },
      [theme.breakpoints.down("sm")]: {
      marginLeft:"0px"
    },
    [theme.breakpoints.down("xs")]: {
      padding: "0px 12px 8px 12px",
         height:"25px",
    }
  },
    cartImages:{
        width:"90%",
        height:"200px",
        [theme.breakpoints.down("lg")]: {
          height:"200px",
    },
        [theme.breakpoints.down("sm")]: {
         height:"150px",
             width:"100%",
    },
        [theme.breakpoints.down("xs")]: {
         height:"100px",
             width:"100%",
    },
    },
     removeBtnDiv:{
         textAlign:"right",
         marginTop:"10px",
         [theme.breakpoints.down("sm")]: {
      marginTop:"10px",
    },
     },
    lightTooltip: {
    backgroundColor:"#4d4d4d",
    color: '#FFF',
    boxShadow: theme.shadows[0],
    fontSize:13,
    border:"1px solid black",
   maxWidth: 400,
  },
    
    
});

function CartComponent(props) {
  const {
    classes,
    history,
    cartItems,
    updateCart,
    removeItemsFromCart,
    getCart,
    isLoading,
    checkout
  } = props;

  console.log(cartItems);

  let userInfo1 = JSON.parse(localStorage.getItem("loggedInUserData"));
  const userData = userInfo1 ? userInfo1.userDetails : "";

  const memberId = userData ? userData.id : "";
  const addressId = userData ? userData.address.id : "";
  const email = userData ? userData.logonId : "";
  const orderId = cartItems && cartItems.orderId ? cartItems.orderId : "";

  let orderDetails = {
    orderId: orderId,
    memberId: memberId,
    addressId: addressId,
    email: email
  };

  // if(!cartItems && memberId){
  //   getCart(orderDetails);
  // }

  let objectSerialized = JSON.stringify(orderDetails);
  localStorage.setItem("orderDetails", objectSerialized);

  const cartList = isLoading ? (<div className={classes.spinnerDiv}><Spinner /></div>):
    (cartItems.orderItems ?cartItems.orderItems.map(item => (
      <Grid container className="cartContainer" key={item.id}>
        <Grid item lg={3} sm={3} xs={5}>
          <Grid container spacing={8}>
            <Grid item lg={12} sm={12} xs={12}>
              <div>
                <img src={item.imageUrl} alt="mac book prop" className={classes.cartImages}  />
              </div>
             
            </Grid>
          </Grid>
        </Grid>
        <Grid lg={9} sm={9} xs={5} >    
        <Grid container>
        <Grid item lg={12} sm={12}> 
        <Grid container>                        
        <Grid item lg={6} sm={6}>
          <div className={classes.shipping}>
            Ship to Home FREE Estimated Arrival: <br />
            {item.fullfillmentType}
          </div>
        </Grid>
        <Grid   item lg={4} sm={3}  xs={2}
          display="flex"
          className={classes.qtyCol}
        >
                                
         <div style={{ marginTop: "10px", display:"flex" }}>
                  <button
                    className={classes.qtyBtnMinus}
                   onClick={() => removeQuantity([item.id, item.quantity])}
                  >
                    -
                  </button>
                  <span style={{padding:"10px"}}>{item.quantity}</span>
                  <button className={classes.qtyBtnPlus}  onClick={() => addQuantity([item.id, item.quantity])}>
                    +
                  </button>
                </div>                        
                                
         
        </Grid>
        <Grid item lg={2} sm={3}  style={{ textAlign: "right" }}>
           <div style={{marginTop:"10px"}}> ${item.price}.00</div>
        </Grid>
         </Grid>
          <Grid item lg={12} sm={12}>              
               <div style={{marginLeft:"10px", fontSize:"14px", marginTop:"10px"}}>
                   <strong>Description :</strong>
                   <div style={{marginTop:"5px"}}>                       
                    <Tooltip title={item.productDesciption} classes={{ tooltip: classes.lightTooltip }}>
                       <div>{item.productDesciption ? (item.productDesciption.length>150?(item.productDesciption.substr(0,150)+"... see more"):item.productDesciption) : ""}</div>
                    </Tooltip>

            </div>
                </div>
              </Grid> 
            <Grid item lg={12} sm={12}> 
            <div className={classes.removeBtnDiv}>
            <Button className={classes.removeItemsBtn}
             onClick={() => removeItems(item.id)}
            ><DeleteIcon style={{fill:"white", height:"20px"}} />Remove</Button>
            </div>
            </Grid>
            </Grid>
        </Grid>
     </Grid>
        <Grid  item lg={12} sm={12} xs={12}style={{ textAlign: "right",marginBottom:"5px"}} >
        <Divider   variant="left"
            style={{
              backgroundColor: "#bfbfbf", height:"2px",
              width: "100%",
              marginTop: "0px"
            }}
          />
        </Grid>
         
      </Grid>)):(<div className={classes.spinnerDiv}>Your cart is empty</div>)
       );

  const cartListMobile =  isLoading ? (<div className={classes.spinnerDiv}><Spinner /></div>)
   : (cartItems.orderItems ?cartItems.orderItems.map(item => (
      <Grid container className="cartContainer" key={item.id}>
        <Grid item lg={12} sm={12} xs={12}>
          <Grid container>
            <Grid item xs={4}>
              <div>
                <img src={item.imageUrl} alt="mac book prop" className={classes.cartImages} />
              </div>
            </Grid>
            <Grid item xs={8}>
              <div style={{ paddingLeft: "10px", fontSize: "13px" }}>
                {item.productDesciption}
              </div>
            </Grid>
          </Grid>
        </Grid>
        <Grid item lg={12} sm={12} xs={12}>
          <Grid container>
            <Grid item xs={5}>
              <Typography style={{ marginTop: "10px" }}>
                <strong>Shipping</strong>
              </Typography>
              <div style={{ fontSize: "13px" }}>{item.fullfillmentType}</div>
            </Grid>
            <Grid item xs={4}>
              <Typography style={{ marginTop: "10px", marginLeft:"20px" }}>
                <strong>Quantity</strong>
              </Typography>
             <div style={{ marginTop: "10px", display:"flex" }}>
                  <button
                    className={classes.qtyBtnMinus}
                   onClick={() => removeQuantity([item.id, item.quantity])}
                  >
                    -
                  </button>
                  <span style={{padding:"5px 10px 5px 10px"}}>{item.quantity}</span>
                  <button className={classes.qtyBtnPlus}  onClick={() => addQuantity([item.id, item.quantity])}>
                    +
                  </button>
                </div>
            </Grid>
            <Grid item xs={3}>
              <Typography
                style={{
                  marginTop: "10px",
                  textAlign: "right",
                  paddingRight: "10px"
                }}
              >
                <strong>Item Total</strong>
              </Typography>
              <div
                style={{
                  textAlign: "right",
                  paddingTop: "10px",
                  paddingRight: "10px"
                }}
              >
                ${item.price}.00
              </div>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          lg={12}
          sm={12}
          xs={12}
          style={{
            textAlign: "right",
            marginTop: "5px",
            marginBottom: "3px"
          }}
        >
          <Button className={classes.removeItemsBtn}
             onClick={() => removeItems(item.id)}
            ><DeleteIcon style={{fill:"white", height:"20px"}} />Remove</Button>
          <Divider   variant="left"
            style={{
              backgroundColor: "#bfbfbf",
              width: "100%",
            }}
          />
        </Grid>
      </Grid>
    )):(<div className={classes.spinnerDiv}>Your cart is empty</div>)
  );

  const [totalShippingCharge, setTotalShippingCharge] = useState();
  const [salesTax, setSalesTax] = useState();
  const [totalQuantity, setTotalQuantity] = useState();

  useEffect(() => {
    if (cartItems.orderItems) {
      let count = 0;
      let shippingCharge = 0;
      let tax = 0;
      cartItems.orderItems.forEach(item => {
        shippingCharge = shippingCharge + item.shippingCharge;
        tax = tax + item.tax;
        count = count + item.quantity;
      });
      setTotalShippingCharge(shippingCharge);
      setSalesTax(tax);
      setTotalQuantity(count);
    }
  });

  const totalPrice = () => {
    return cartItems && cartItems.totalPrice
      ? cartItems.totalPrice + salesTax + totalShippingCharge
      : 0;
  };

  const removeItems = value => {
    removeItemsFromCart(value);
  };

  const addQuantity = value => {
    const val = parseInt(value[1]);
    const updateQty = val + 1;
    updateCart({
      orderItemsId: value[0],
      quantity: updateQty
    });
  };

  const removeQuantity = value => {
    const val = parseInt(value[1]);
    const updateQty = val - 1;
    if (updateQty === 0) {
      removeItems(value[0]);
    } else {
      updateCart({
        orderItemsId: value[0],
        quantity: updateQty
      });
    }
  };

  const multiClass = [classes.lineHeight, classes.setMargin].join(" ");

  return (
    <div className="cartComponent">
      <div className={classes.root}>
        <Grid container spacing={8}>
          <Grid item lg={8} sm={8} xs={12} className={classes.padding}>
            <Grid container className={classes.cartDiv1}>
              <Grid item lg={8} sm={8} xs={7}>
                <div className={classes.dsCartHead}>Your Shopping Cart</div>
              </Grid>
              <Grid item lg={4} sm={4} xs={5}>
                <Typography>Shop More</Typography>
                <Button
                  className={classes.shopMoreBtn}
                  onClick={() => history.push("/")}
                >
                  Continue Shopping
                </Button>
              </Grid>
              <Grid item lg={12} sm={12} xs={12}>
                <div className={classes.cartLabel}>
                  <strong>
                    FREE Shipping on eligible items.<Link> See Details</Link>
                  </strong>
                </div>
              </Grid>
            </Grid>

            <Grid container spacing={24}>
              <Grid item lg={12} sm={12} xs={12} className={classes.marLeft}>
                <Grid container className={classes.marTopDest}>
                  <Grid item lg={3} sm={3} xs={5}>
                    <strong>Item</strong>
                  </Grid>
                  <Grid item lg={4} sm={4} xs={3}>
                    <strong>Shipping</strong>
                  </Grid>
                  <Grid
                    item
                    lg={3}
                    sm={3}
                    xs={2}
                    className={classes.txtAlnCenter}
                  >
                    <strong>Qty</strong>
                  </Grid>
                  <Grid
                    item
                    lg={2}
                    sm={2}
                    xs={2}
                    style={{ textAlign: "right" }}
                  >
                    <strong>Item Total</strong>
                  </Grid>
                </Grid>
                <Divider
                  className={classes.dividerDisplay}
                  style={{ backgroundColor: "#bfbfbf", marginTop: "10px", height:"2px" }}
                />
              </Grid>
              <Grid
                item
                lg={12}
                sm={12}
                xs={12}
                className={classes.deskTabView}
              >
                {cartList}
              </Grid>
              <Grid item lg={12} sm={12} xs={12} className={classes.mobileView}>
                {cartListMobile}
              </Grid>
              <Grid item lg={12} sm={12} xs={12}>
                <Grid container className={classes.subHide}>
                  <Grid item lg={2} sm={2} xs={2} />
                  <Grid item lg={5} sm={5} xs={5}>
                    <Grid container className={classes.needHelps}>
                      <Typography>
                        <strong>Need Help?</strong>
                      </Typography>
                      <Typography> See ouronline FAQs or phone us:</Typography>
                      <Typography>
                        {" "}
                        Online Customer Support:1-800-000-0000
                      </Typography>
                      <Typography>
                        Call 7 days a week - 6 a.m. to 2 a.m. EST
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item lg={5} sm={5} xs={5}>
                    <Grid container className={classes.marTop}>
                      <Grid item lg={6} sm={6} xs={6}>
                        <Typography className={classes.txtaln}>
                          Items :{" "}
                          <strong>{totalQuantity ? totalQuantity : 0}</strong>
                        </Typography>
                      </Grid>
                      <Grid item lg={6} sm={6} xs={6}>
                        <Typography className={classes.txtaln}>
                          Subtotal:
                          <strong>
                            $
                            {cartItems && cartItems.totalPrice
                              ? cartItems.totalPrice
                              : 0.00}.00
                          </strong>
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid container className={classes.recentlyViewCont}>
              <Grid item lg={12} sm={12} xs={12}>
                <div>
                  <Typography className={classes.recentItemHead}>
                    <strong>Your recently viewed items </strong>
                  </Typography>
                  <Divider className={classes.devider} />
                </div>
                <Grid item lg={12} sm={12} xs={12}>
                  <Grid container className={classes.padding15}>
                    <Grid item lg={3} sm={3} xs={3} >
                      <div className="imageWrapper1" style={{width:"90%"}}>
                        <img src={c1} alt="mac book prop" />
                      </div>
                    </Grid>
                    <Grid item lg={3} sm={3} xs={3} >
                      <div className="imageWrapper1"  style={{width:"90%"}}>
                        <img src="https://storage.googleapis.com/gcpimage/images/appreals/0000059_custom-t-shirt_550.jpeg" alt="mac book prop" />
                      </div>
                    </Grid>

                    <Grid item lg={3} sm={3} xs={3} >
                      <div className="imageWrapper1"  style={{width:"90%"}}>
                        <img src={c3} alt="mac book prop" />
                      </div>
                    </Grid>
                    <Grid item lg={3} sm={3} xs={3} >
                      <div className="imageWrapper1"  style={{width:"90%"}}>
                        <img src="https://storage.googleapis.com/gcpimage/images/electronics/0000042_htc-one-mini-blue_550.jpeg" alt="mac book prop" />
                      </div>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid item lg={4} sm={4} xs={12}>
            <Grid container className={classes.orderContainer}>
              <Grid
                item
                lg={12}
                sm={12}
                xs={12}
                className={classes.bgColorWhite}
              >
                <div className={classes.orderLblHide}>
                  <Typography className={classes.yourOrd}>
                    <strong>Your Order</strong>
                  </Typography>
                  <Divider variant="middle" className={classes.bgcolor} />
                </div>
                <Grid container className={classes.prilst}>
                  <Grid
                    item
                    lg={12}
                    sm={12}
                    xs={12}
                    className={classes.lineHeight}
                  >
                    <Grid container>
                      <Grid item lg={6} sm={6} xs={6}>
                        <Typography>
                          <strong>Subtotal</strong>
                        </Typography>
                      </Grid>
                      <Grid
                        item
                        lg={6}
                        sm={6}
                        xs={6}
                        className={classes.txtaln}
                      >
                        $
                        {cartItems && cartItems.totalPrice
                          ? cartItems.totalPrice
                          : 0.00}.00
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid
                    item
                    lg={12}
                    sm={12}
                    xs={12}
                    className={classes.lineHeight}
                  >
                    <Grid container>
                      <Grid item lg={6} sm={6} xs={6}>
                        <Typography>
                          <strong>Discount</strong>
                        </Typography>
                      </Grid>
                      <Grid
                        item
                        lg={6}
                        sm={6}
                        xs={6}
                        className={classes.txtaln}
                      >
                        ---
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid item lg={12} sm={12} xs={12} className={multiClass}>
                    <Grid container>
                      <Grid item lg={6} sm={6} xs={6}>
                        <Typography>Estimated Shipping*</Typography>
                      </Grid>
                      <Grid
                        item
                        lg={6}
                        sm={6}
                        xs={6}
                        className={classes.txtaln}
                      >
                        ${totalShippingCharge ? totalShippingCharge : 0.00}.00
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid
                    item
                    lg={12}
                    sm={12}
                    xs={12}
                    className={classes.lineHeight}
                  >
                    <Grid container>
                      <Grid item lg={6} sm={6} xs={6}>
                        <Typography>Sales Tax</Typography>
                      </Grid>
                      <Grid
                        item
                        lg={6}
                        sm={6}
                        xs={6}
                        className={classes.txtaln}
                      >
                        ${salesTax ? salesTax : 0.00}.00
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Divider variant="middle" className={classes.bgcolor} />
                <Grid
                  item
                  lg={12}
                  sm={12}
                  xs={12}
                  className={classes.setMargin}
                >
                  <Grid container className={classes.prilst1}>
                    <Grid item lg={6} sm={6} xs={6}>
                      <Typography>
                        <strong>Total</strong>
                      </Typography>
                    </Grid>
                    <Grid item lg={6} sm={6} xs={6} className={classes.txtaln}>
                      ${totalPrice()}.00
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item lg={12} sm={12} xs={12}>
                  <div className={classes.yourOrdTxt}>
                    Shipping and delivery charges are calculated at the lowest
                    rate available. Other methods will be viewable on the next
                    page.
                    <Button
                      className={classes.btnStyle}
                      onClick={() => history.push("/Checkout")}
                      disabled={!cartItems.orderItems ? true : false}
                    >
                      CHECKOUT
                    </Button>
                  </div>

                  <div className={classes.yourOrdTxt}>
                    <ExpressCheckout
                      name={"Demo store checkout"}
                      description={`DEMO store order - ${orderId}`}
                      cartItems={cartItems}
                      amount={totalPrice()}
                      orderDetails={orderDetails}
                      checkout={checkout}
                    />
                  </div>

                  <div className={classes.txtAlnCenter}>--or--</div>
                  <div className={classes.txtAlnCenter}>
                    <Link>Check out with</Link>
                    <Button className={classes.marLeft} variant="contained">
                      PayPal / Visa{" "}
                    </Button>
                  </div>
                </Grid>
              </Grid>
              <Grid container className={classes.helpHide}>
                <div className={classes.helpGrid}>
                  <div>
                    {" "}
                    <Typography>
                      <strong>Need Help?</strong>
                    </Typography>
                  </div>
                  <div>
                    <Typography> See ouronline FAQs or phone us:</Typography>
                    <Typography>
                      Online Customer Support:1-800-000-0000
                    </Typography>
                    <Typography>Major Appliances:1-000-000-0000 </Typography>
                    <Typography>Custom Blinds:1-800-000-0000 </Typography>
                    <Typography>
                      Call 7 days a week - 6 a.m. to 2 a.m. EST
                    </Typography>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

CartComponent.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRouter(withStyles(styles)(CartComponent));
