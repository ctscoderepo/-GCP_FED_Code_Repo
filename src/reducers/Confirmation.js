export default (state = { checkoutData: {}}, action) => {
  switch (action.type) {
  case "ISLOADING":
  return{...state, isLoading:true} 
    case "CHECKOUT":
      return {
        ...state,
        checkoutData: { ...state.checkoutData, ...action.payload },isLoading:false
      };
    default:
      return state;
  }
};
