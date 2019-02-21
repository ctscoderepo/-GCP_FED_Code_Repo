import Axios from "axios";

export const getProduct = item => async dispatch => {
  const res = await Axios.get(`http://104.154.92.99/products/${item}`);
  dispatch({ type: "PRODUCT", payload: res.data });
};

export const clearProduct=()=>({type:"CLEARPRODUCT"})
