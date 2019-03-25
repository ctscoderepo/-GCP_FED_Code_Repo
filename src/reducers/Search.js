export default (state = { products: [] }, action) => {
  console.log("action.payload.products: ", action.payload);
  switch (action.type) {
    case "SEARCHRESULTS":
      return { ...state, searchProducts: { ...action.payload } };
    case "SEARCHRESULTS1":
      return { ...state, searchProducts: { ...action.payload.products } };
    case "CLEARSEARCH":
      return { ...state, searchProducts: {} };
    default:
      return state;
  }
};
