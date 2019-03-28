import { get } from "./BaseApi";
import { URLList } from "../config/URLs";

export const getProduct = item => async dispatch => {
  let url = URLList.getProductDetailsURL() + item;
  const res = await get(url);
  if (res && res.data) {
    dispatch({ type: "PRODUCT", payload: res.data });
  } else {
    clearProduct();
  }
};

export const clearProduct = () => ({ type: "CLEARPRODUCT" });

export const shipToStore = items => {
  return { type: "SHIP_TO_STORE", payload: items };
};

export const productDetailsToConfirm = items => {
  return { type: "PRODUCT_DETAILS", payload: items };
};

export const setStoreDataToPDP = store => {
  return { type: "SET_STORE_PDP", payload: store };
}
