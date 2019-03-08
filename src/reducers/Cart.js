export default (state = { cartItems:{}}, action) => {   
    switch (action.type) {
      case "ADDTOCART":
            return { ...state, cartItems: {...state.cartItems,...action.payload} };  
      case "UPDATECART":
            return {...state, cartItems:{...state.cartItems,...action.payload}}
      case "REMOVEITEMS":
            return {...state, cartItems:{...state.cartItems,...action.payload}}
      case "GETCART" :
            return {...state, cartItems:{...state.cartItems, ...action.payload}}
      default:
        return state;
    }
  };
  