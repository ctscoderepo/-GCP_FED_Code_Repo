import axios from "axios";
export const getProducts = type => async dispatch => {
  let url = "http://104.154.92.99/search?category1=";
  if (type.subCategory) {
    url = `${url}${type.category}&category2=${type.subCategory}`;
  } else {
    url = `${url}${type.category}`;
  }
  console.log("chandra", url);
  const res = await axios.get(url);
  dispatch({ type: "PRODUCTS", payload: res.data.products });
};
