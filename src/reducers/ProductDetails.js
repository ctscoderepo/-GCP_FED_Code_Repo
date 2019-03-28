export default (
  state = { product: null, shipToStoreData: "", storeName: "" },
  action
) => {
  switch (action.type) {
    case "PRODUCT":
      return { ...state, product: action.payload };
    case "SHIP_TO_STORE":
      return { ...state, shipToStoreData: action.payload };
    case "SET_STORE_PDP":
      return { ...state, storeName: action.payload };
    case "CLEARPRODUCT":
      return { ...state, product: null };
    default:
      return state;
  }
};
