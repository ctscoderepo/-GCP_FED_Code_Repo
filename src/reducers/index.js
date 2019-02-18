import { combineReducers } from "redux";
import header from "./Header";
import products from "./Products";
import product from "./Plp";

export default combineReducers({
  header,
  products,
  product
});
