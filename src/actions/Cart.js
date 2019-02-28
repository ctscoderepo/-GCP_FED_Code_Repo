import {post} from './BaseApi';

export const addToCart = item => async dispatch => {
  console.log("add to cart ", item)
  let addToCartRequest = {
    "productId" : item.id,
    "price" : item.price,
    "quantity" : 1
  }

  return post(
          "http://35.202.122.135/api/shoppingcart/add", addToCartRequest
          ).then(res=> dispatch({ TYPE: "ADDTOCART", payload: res.data })).catch(err=> err)
};
