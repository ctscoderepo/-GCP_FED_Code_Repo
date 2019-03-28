export default (state = { products: [], storeData: "" }, action) => {
  switch (action.type) {
    case "ISLOADING":
      return { ...state, isLoading: true };
    case "PRODUCTS":
      return { ...state, products: [...action.payload], isLoading: false };
    case "CLEARPRODUCTS":
      return { ...state, products: [], isLoading: false };
    case "SET_STORE_DATA_ON_PRODUCTS":
      return { ...state, storeData: action.payload };
    default:
      return state;
  }
};
