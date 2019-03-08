import {post, deleteCall } from './BaseApi';

export const addToCart = item => async dispatch => {
  
  let addToCartRequest = {
    "productId" : item.id,
    "price" : item.price,
    "quantity" : 1
  }
  const res=await post("http://35.202.122.135/api/shoppingcart/add", addToCartRequest);  
  dispatch({ type: "ADDTOCART", payload: res.data });
  return Promise.resolve()
};


export const updateCart = quantityUpdate => async dispatch =>{ 
    return await post("http://35.202.122.135/api/shoppingcart/update",quantityUpdate
               ).then(res=>dispatch({type:"UPDATECART", payload:res.data})).catch(err=>err)
};

export const removeItemsFromCart = removeItems => async dispatch =>{  
    return await deleteCall("http://35.202.122.135/api/shoppingcart/delete",removeItems
               ).then(res=>dispatch({type:"REMOVEITEMS", payload:res.data})).catch(err=>err)
};




