export default (state = { products: [] }, action) => {
  switch (action.type) {
    case "PRODUCTS":
      return { ...state, products: [...action.payload] };
      case "CLEARPRODUCTS": return {...state, products:[]}
    default:
      return state;
  }
};
