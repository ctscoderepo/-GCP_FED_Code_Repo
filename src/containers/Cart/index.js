import React, { useEffect } from "react";
import CartComponent from "../../components/Cart";
import { connect } from "react-redux";
import {
  setHeaderStatus,
  setFooterStatus,
  setNavBarStatus,
  setCartItems
} from "../../actions/Header";
import { updateCart, removeItemsFromCart, getCart } from "../../actions/Cart";
import { checkout } from "../../actions/Checkout";

const Cart = ({
  setHeaderStatus,
  setFooterStatus,
  setNavBarStatus,
  setCartItems,
  cartItems,
  updateCart,
  removeItemsFromCart,
  getCart,
  checkout,
  isLoading
}) => {
  useEffect(() => {
    setCartItems(cartItems.orderItems);
    setHeaderStatus(true);
    setFooterStatus(true);
    setNavBarStatus(false);
    //console.log("from Cart", userDetails);
    return () => {
      setNavBarStatus(true);
    };
  }, [cartItems.orderItems]);
  return (
    
    <div>
      <CartComponent
        cartItems={cartItems}
        updateCart={updateCart}
        removeItemsFromCart={removeItemsFromCart}
        getCart={getCart}
        checkout={checkout}
        isLoading={isLoading}
      />
    </div>
  );
};

export default connect(
  ({ cart }) => ({ cartItems: cart.cartItems, isLoading: cart.isLoading }),
  {
    setHeaderStatus,
    setFooterStatus,
    setNavBarStatus,
    setCartItems,
    updateCart,
    removeItemsFromCart,
    getCart,
    checkout
  }
)(Cart);
