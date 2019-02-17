export default (state = { product: null }, action) => {
  switch (action.type) {
    case "PRODUCT":
      return { ...state, product: action.payload };
    default:
      return state;
  }
};
