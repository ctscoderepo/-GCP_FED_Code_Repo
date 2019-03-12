import React, { useEffect } from "react";
import { connect } from "react-redux";
import CheckoutPage from "../../components/Checkout";
import * as actions from "../../actions/Header";

const Checkout = ({ setHeaderStatus, setFooterStatus, checkoutData }) => {
  useEffect(() => {
    setHeaderStatus(false);
    setFooterStatus(false);
  }, []);
  return <CheckoutPage checkoutData={checkoutData} />;
};

export default connect(
  ({ checkout }) => ({ checkoutData: checkout.checkoutData }),
  actions
)(Checkout);
