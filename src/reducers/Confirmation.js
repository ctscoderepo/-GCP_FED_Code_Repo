export default (state = { checkoutData: {}}, action) => {
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
  