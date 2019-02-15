export default (state = { showHeader: true, showFooter: true }, action) => {
  switch (action.type) {
    case "SET_HEADER_STATUS":
      return { ...state, showHeader: action.payload };
    case "SET_FOOTER_STATUS":
      return { ...state, showFooter: action.payload };
    default:
      return state;
  }
};
