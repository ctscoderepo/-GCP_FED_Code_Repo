import { post, get } from "./BaseApi";

export const checkout = checkoutDetails => dispatch => {
  return post(
    "http://35.202.122.135/api/shoppingcart/checkout",
    checkoutDetails
  )
    .then(res => dispatch({ type: "CHECKOUT", payload: res.data }))
    .catch(err => err);
};
