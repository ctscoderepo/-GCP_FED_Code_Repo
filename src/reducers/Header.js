export default (
  state = {
    showHeader: true,
    showFooter: true,
    showNavbar: true,
    isLoading: false,
    cartItems: [],
    userDetails: {},
    storeData: ""
  },
  action
) => {
  switch (action.type) {
    case "SET_HEADER_STATUS":
      return { ...state, showHeader: action.payload };
    case "SET_FOOTER_STATUS":
      return { ...state, showFooter: action.payload };
    case "SET_NAVBAR_STATUS":
      return { ...state, showNavbar: action.payload };
    case "SET_CART_ITEMS":
      return { ...state, cartItems: action.payload };
    case "SET_USER_DETAILS":
      return { ...state, userDetails: action.payload };
    case "CLEAR_CART_ITEMS":
      return { ...state, cartItems: action.payload };
    case "SET_STORE_DATA":
      return { ...state, storeData: action.payload };

    default:
      return state;
  }
};
