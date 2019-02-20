import axios from "axios";

export const addToCart = item => async dispatch => {
  const res = await axios.post("");
  dispatch({ TYPE: "ADDTOCART", apyload: res.data });
};
