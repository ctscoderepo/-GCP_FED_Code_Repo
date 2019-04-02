export default (state = { checkoutData: {}, storeProductInfo: "",shipToStoreData:"" }, action) => {
  switch (action.type) {
    case "ISLOADING":
      return { ...state, isLoading: true };
    case "CHECKOUT":
      return {
        ...state,
        checkoutData: { ...state.checkoutData, ...action.payload },
        isLoading: false
      };
    case "PRODUCT_DETAILS":
      return {
        ...state,
        storeProductInfo: { ...state.storeProductInfo, ...action.payload },
        isLoading: false
      };
    case "SHIP_TO_STORE":
      return { ...state, shipToStoreData: action.payload };      
    default:
      return state;
  }
};
