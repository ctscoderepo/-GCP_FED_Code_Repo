export default (state = { products: [], storeData: "" }, action) => {
  switch (action.type) {
    case "ISLOADING":
      return { ...state, isLoading: true };
    case "SEARCHRESULTS":
      return {
        ...state,
        searchProducts: { ...action.payload },
        isLoading: false
      };
    case "SEARCHRESULTSAI":
      return { ...state, products: action.payload, isLoading: false };

    case "SET_STORE_DATA_ON_SEARCH":
      return { ...state, storeData: action.payload, isLoading: false };

    case "CLEARSEARCH":
      return { ...state, searchProducts: {}, isLoading: false };
    default:
      return state;
  }
};
