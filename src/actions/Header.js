export const setHeaderStatus = value => {
  return { type: "SET_HEADER_STATUS", payload: value };
};

export const setFooterStatus = value => {
  return { type: "SET_FOOTER_STATUS", payload: value };
};

export const setNavBarStatus = value => {
  return { type: "SET_NAVBAR_STATUS", payload: value };
};
