export default (state = { products: [] }, action) => {
  switch (action.type) {
    case "SEARCHRESULTS":
      return { ...state, products: [...action.payload] };
    case "CLEARSEARCH":return { ...state, products: [] };
    default:
      return state;
  }
};
