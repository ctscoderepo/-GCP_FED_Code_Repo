import { post, deleteCall, get } from './BaseApi';

export const addToCart = addToCartRequest => dispatch => {
  dispatch({type:"ISLOADING"});
  return post("http://35.202.122.135/api/shoppingcart/add", addToCartRequest)
    .then(res => dispatch({ type: "ADDTOCART", payload: res.data }))
    .catch(err => console.log("Error from addToCart", err))

};


export const updateCart = quantityUpdate => dispatch => {
  return post("http://35.202.122.135/api/shoppingcart/update", quantityUpdate)
    .then(res => dispatch({ type: "UPDATECART", payload: res.data }))
    .catch(err => err)
};

export const removeItemsFromCart = removeItems => dispatch => {
  console.log(removeItems);
  return deleteCall(`http://35.202.122.135/api/shoppingcart/delete/${removeItems}`)
    .then(res => dispatch({ type: "REMOVEITEMS", payload: res.data }))
    .catch(err => err)
};

export const getCart = cartData => dispatch => {
  return get("http://35.202.122.135/api/order/" + cartData.memberId)
    .then(res => dispatch({ type: "GETCART", payload: res.data }))
    .catch(err => err);
}




