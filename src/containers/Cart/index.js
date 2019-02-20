import React, { useEffect } from "react";
import CartComponent from "../../components/Cart";
import { connect } from "react-redux";
import * as actions from "../../actions/Header";

function Cart(props) {
  useEffect(() => {
    props.setNavBarStatus(false);
    return () => {
      props.setNavBarStatus(true);
    };
  }, []);
  return (
    <div>
      <CartComponent />
    </div>
  );
}
export default connect(
  null,
  actions
)(Cart);
