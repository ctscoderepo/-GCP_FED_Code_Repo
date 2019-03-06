import { get } from './BaseApi';

export const getProduct = item => async dispatch => {
  const res = await get(`http://104.154.92.99/products/${item}`);
  if (res && res.data) {
    dispatch({ type: "PRODUCT", payload: res.data });
  } else {
    clearProduct();
  }

};

export const clearProduct = () => ({ type: "CLEARPRODUCT" })
