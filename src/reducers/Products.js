export default (state = { products: [] }, action) => {
  switch (action.type) {
    case "PRODUCTS":
      return { ...state, products: [...action.payload] };
    default:
      return state;
  }
};
