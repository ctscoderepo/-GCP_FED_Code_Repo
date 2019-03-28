import { post, get } from "./BaseApi";
import {URLList} from "../config/URLs";

export const checkout = checkoutDetails => dispatch => {
dispatch({type:"ISLOADING"});    
  let url = URLList.getCheckoutURL();
  return post(
    url,
    checkoutDetails
  )
    .then(res => dispatch({ type: "CHECKOUT", payload: res.data }))
    .catch(err => err);
};

export const setCartItemsOnCheckout = (items) =>{
  return ({type : "SET_CART_ITEMS_ON_CHECKOUT", payload: items});
}
