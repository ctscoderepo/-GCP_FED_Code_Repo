export default (state = { checkoutData: {} }, action) => {
  console.log("From reducer ", action.payload);
  switch (action.type) {
    case "CHECKOUT":
      return {
        ...state,
        checkoutData: { ...state.checkoutData, ...action.payload }
      };
    default:
      return state;
  }
};
