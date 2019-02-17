export default (
  state = { showHeader: true, showFooter: true, showNavbar: true },
  action
) => {
  switch (action.type) {
    case "SET_HEADER_STATUS":
      return { ...state, showHeader: action.payload };
    case "SET_FOOTER_STATUS":
      return { ...state, showFooter: action.payload };
    case "SET_NAVBAR_STATUS":
      return { ...state, showNavbar: action.payload };
    default:
      return state;
  }
};
