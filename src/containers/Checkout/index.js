import React, { useEffect } from "react";
import { connect } from "react-redux";
import CheckOutComponent from "../../components/Checkout";
import * as actions from "../../actions/Header";

const Checkout = ({ setHeaderStatus, setFooterStatus }) => {
  useEffect(() => {
    setHeaderStatus(false);
    setFooterStatus(false);
  }, []);
  return <CheckOutComponent />;
};

export default connect(
  null,
  actions
)(Checkout);
