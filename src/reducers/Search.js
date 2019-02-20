export default (state = { products: [] }, action) => {
  switch (action.type) {
    case "SEARCHRESULTS":
      return { ...state, products: [...action.payload] };
    default:
      return state;
  }
};
