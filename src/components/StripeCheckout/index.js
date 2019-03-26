import React, { useState, useEffect } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import {GoogleKeys} from "../../config/GoogleKeys";
import PAYMENT_SERVER_URL from "../../config/server";

const styles = theme => ({
  btnStyle: {
    textTransform: "uppercase",
    backgroundColor: "#0084CD",
    borderRadius: "5px",
    width: "100%",
    margin: "10px 0",
    fontSize: "12px",
    boxShadow: "none",
    outline: "none",
    color: "#fff",
    border: "none",
    fontWeight: "400",
    fill: "#000",
    "&:hover": {
      backgroundColor: "#0084CD"
    }
  },
  yourOrdTxt: {
    fontSize: "11px",
    padding: "0px 15px 0px 15px"
  }
});

const CURRENCY = "USD";

const fromDollarToCent = amount => amount * 100;

axios.interceptors.request.use(request => {
  console.log("Starting Request", request);
  return request;
});

axios.interceptors.response.use(response => {
  console.log("Received Response:", response);
  return response;
});

const Checkout = props => {

  const { classes, name, description, amount, cartItems, orderDetails, history } = props;
  const [order, setOrder] = useState(orderDetails);
  useEffect(() =>{
    setOrder(orderDetails);
  }, [orderDetails])

  const successPayment = resp => {
    console.info("Payment Successful", resp.data);

    let email = resp.data.receipt_email;
    let lSOrder = JSON.parse(localStorage.getItem("orderDetails"));
    lSOrder.email = email;
    localStorage.setItem("orderDetails", JSON.stringify(orderDetails));
    submitOrder(order, email);
    alert("Continue from here to order complete flow");
  }
  
  const errorPayment = data => {
    console.error("Payment Error", data);
  };

  const submitOrder = (order, email) =>  {
    console.log("inside submitOrder ");
    if (!order.memberId) {
      props.checkout({
        orderId: order.orderId,
        email: email
      }).then(history.push("/Confirmation"));
    } else {
      props.checkout({
        orderId: order.orderId,
        memberId: order.memberId,
        addressId: order.addressId
      }).then(history.push("/Confirmation"));
    }
    //history.push("/Confirmation");
  };
  

  const onToken = (amount, description) => token =>
  axios
    .post(
      PAYMENT_SERVER_URL,
      {
        description,
        source: token.id,
        currency: CURRENCY,
        amount: fromDollarToCent(amount),
        receipt_email:token.email
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
        }
      }
    )
    .then(successPayment)
    .catch(errorPayment);
 
  return (
    <div>
      <StripeCheckout
        name={name}
        description={description}
        amount={fromDollarToCent(amount)}
        token={onToken(amount, description)}
        currency={CURRENCY}
        stripeKey={GoogleKeys.STRIPE_KEY}
        image="/assets/images/logo.png"
        shippingAddress
        billingAddress
        allowRememberMe={false}
        email={orderDetails.email}
      >
        <div className={classes.yourOrdTxt}>
          <Button className={classes.btnStyle}
                  disabled={!cartItems.orderItems?true:false}
          >
            <strong>Express Checkout</strong>
          </Button>
        </div>
      </StripeCheckout>
    </div>
  );
};

Checkout.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRouter(withStyles(styles)(Checkout));
