export default (state = { products: [] }, action) => {
  switch (action.type) {
    case "ISLOADING":
      return { ...state, isLoading: true };
    case "SEARCHRESULTS":
      return {
        ...state,
        searchProducts: { ...action.payload },
        isLoading: false
      };
    case "CLEARSEARCH":
      return { ...state, searchProducts: {}, isLoading: false };
    default:
      return state;
  }
};
