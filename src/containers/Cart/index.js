import React, { useEffect } from "react";
import CartComponent from "../../components/Cart";
import { connect } from "react-redux";
import {setHeaderStatus,setFooterStatus,setNavBarStatus} from "../../actions/Header";
import {updateCart,removeItemsFromCart} from "../../actions/Cart";

const Cart  = ({ setHeaderStatus,setFooterStatus,setNavBarStatus, cartItems,updateCart, removeItemsFromCart}) => {
  useEffect(() => {
    setHeaderStatus(true); 
    setFooterStatus(true); 
    setNavBarStatus(false);
    return () => {
        setNavBarStatus(true);
    };
  }, []);
  return (
    <div>
      <CartComponent  cartItems={cartItems} updateCart={updateCart} removeItemsFromCart={removeItemsFromCart} />
    </div>
  );
};

export default connect(({cart})=>({cartItems: cart.cartItems}), {setHeaderStatus,setFooterStatus,setNavBarStatus,updateCart,removeItemsFromCart})(Cart);