import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";
import Button from '@material-ui/core/Button';
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Spinner from "../helpers/Spinner";


const styles = theme => ({
    root: {
    flexGrow: 1,
    marginLeft:"20%",
    marginRight:"20%",
        [theme.breakpoints.down("sm")]: {
        marginLeft:"10px",
        marginRight:"10px",
    }
  },
 confirmContainer: {
    marginTop: "30px",
    [theme.breakpoints.down("xs")]: {
      marginTop: "20px",
      
    }
  },
  
    logo: {
    width: "200px",
    height: "50px",
    display: "block",
  },
    confirmHeader:{
        fontSize:"30px",
        fontWeight:"bold",
        marginTop:"20px",
        [theme.breakpoints.down("xs")]: {
            fontSize:"20px",
    }
    },
    orderInfo:{
        height:"auto",
        width:"97%",
        backgroundColor:"#f2f2f2",
        marginTop:"20px",
        padding:"10px",
        border:"1px solid #d9d9d9",
         [theme.breakpoints.down("xs")]: {
           width:"94%",
    }
    },
    orderLabel:{
       width:"auto", 
       float:"left", 
       marginRight:"10px",
      
    },
   devider: {
    backgroundColor: "#bfbfbf",
    width:"100%",
       marginTop:"20px"
  },
    returnToHomeBtn: {
    backgroundColor: "#008000",
    borderRadius: "5px",
    width: "80%",
    margin: "0px 0px 0px 0px",
    fontSize: "12px",
    boxShadow: "none",
    outline: "none",
    color: "#fff",
    border: "none",
    fontWeight: "400",
    fill: "#000",
    "&:hover": {
      backgroundColor: "#009900"
    },
          [theme.breakpoints.down("xs")]: {
           width:"100%",
    }
  },
    needHelp:{
         padding:"10px",
         backgroundColor:"#f2f2f2", 
        border:"1px solid #d9d9d9",
    },
    confirmFooter:{
        textAlign:"center",
        marginTop:"15%"
    },
    spinnerDiv: {
    textAlign: "center",
    marginTop: "15%"
  },
});

const ConfirmationComponent  = (props) => { 
    const { classes, history,clearCartItemsOnHeader, checkoutData,isLoading,storeProductInfo} = props;
    
    
    
    const checkOutLength=Object.keys(checkoutData).length == 0?false:true;
    
    const goToHomePage=()=>{
        clearCartItemsOnHeader(); 
        history.push("/")
    }
    
    
  const userData = JSON.parse(localStorage.getItem("loggedInUserData"));
  const lsOrderDetails = JSON.parse(localStorage.getItem("orderDetails"));
  const[orderDetails, setOrderDetails] = useState(lsOrderDetails);
  localStorage.removeItem("orderDetails");
  const userAddress=userData && userData.userDetails?userData.userDetails.address:""; 
  const totalOrderValue=checkoutData?checkoutData.totalPrice + checkoutData.totalShipping + checkoutData.totalTax:0;
    
    
   const shippingStoreDetails=(storeProductInfo ?<div className={classes.root}>
       <div className={classes.confirmContainer}>
        <div><Link to="/"><img src="/assets/images/logo.png"  alt="logo" className={classes.logo} /></Link></div>
        <div className={classes.confirmHeader}>Your product is shipped to store successfully</div>
        <div className={classes.orderInfo}>
        
        <Grid container>        
        <Grid item lg={12} sm={12} xs={12}>
        <div> <Typography className={classes.orderLabel}  ><strong>Product Name :</strong></Typography><span>{storeProductInfo && storeProductInfo.product ?storeProductInfo.product.productName:''}</span></div>
        </Grid>
        <Grid item lg={12} sm={12} xs={12} style={{marginTop:"10px"}}>
        <div><Typography><strong>Store Details :</strong> <strong>{storeProductInfo && storeProductInfo.storeName?storeProductInfo.storeName:""}</strong></Typography></div>
        </Grid>
        </Grid>
        </div>
        <Divider className={classes.devider} />
        
        <Grid container>
         <Grid item lg={6} sm={6} xs={12} style={{marginTop:"20px"}}>
        <div>
        <Button className={classes.returnToHomeBtn} onClick={() =>goToHomePage()}>Return to Home Page</Button>
        </div>
        </Grid>
        <Grid item lg={6} sm={6} xs={12} style={{marginTop:"15px"}}>
        <div className={classes.needHelp}>
         <Typography><strong>Need Help or Questions?</strong> </Typography>
         <Typography><strong>Call :</strong> 1-800-000-0000</Typography>
        </div>
        </Grid>
        </Grid>
            
        <Grid container>
         <Grid item lg={12} sm={12} xs={12} >
        <div className={classes.confirmFooter} ><Typography>©2019 Demo Store.All Rights Reserved. Use of this site is
                subject to certain Terms Of Use.</Typography></div>
        </Grid>
        </Grid>
        </div>
      </div>:"");
    
    
    return (
      <div>{isLoading?(<div className={classes.spinnerDiv}><Spinner /></div>):(storeProductInfo?<div>{shippingStoreDetails}</div>:(checkOutLength?<div className={classes.root}>
       <div className={classes.confirmContainer}>
        <div><Link to="/"><img src="/assets/images/logo.png"  alt="logo" className={classes.logo} /></Link></div>
        <div className={classes.confirmHeader}>Your order is placed Successfully</div>
        <div className={classes.orderInfo}>
        
        <Grid container>        
        <Grid item lg={12} sm={12} xs={12}>
        <div> <Typography className={classes.orderLabel}  ><strong>Order Number :</strong></Typography><span>{checkoutData?checkoutData.orderId:''}</span></div>
        </Grid>
        <Grid item lg={12} sm={12} xs={12} style={{marginTop:"10px"}}>
        <div><Typography>Your order of <strong>${totalOrderValue?totalOrderValue:0}</strong> has been confirmed. You will receive an email cofirmation at <strong>{orderDetails?orderDetails.email:""}</strong></Typography></div>
        </Grid>
        </Grid>
        </div>
        <Divider className={classes.devider} />
        
        <Grid container>
         <Grid item lg={6} sm={6} xs={12} style={{marginTop:"20px"}}>
        <div>
        <Button className={classes.returnToHomeBtn} onClick={() =>goToHomePage()}>Return to Home Page</Button>
        </div>
        </Grid>
        <Grid item lg={6} sm={6} xs={12} style={{marginTop:"15px"}}>
        <div className={classes.needHelp}>
         <Typography><strong>Need Help or Questions?</strong> </Typography>
         <Typography><strong>Call :</strong> 1-800-000-0000</Typography>
        </div>
        </Grid>
        </Grid>
            
        <Grid container>
         <Grid item lg={12} sm={12} xs={12} >
        <div className={classes.confirmFooter} ><Typography>©2019 Demo Store.All Rights Reserved. Use of this site is
                subject to certain Terms Of Use.</Typography></div>
        </Grid>
        </Grid>
        </div>
      </div>:"No Data"))}</div>

    );
  }



export default withRouter(withStyles(styles)(ConfirmationComponent));
