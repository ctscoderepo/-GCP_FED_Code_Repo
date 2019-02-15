import { combineReducers } from "redux";
import header from "./Header";
import products from "./Products";

export default combineReducers({
  header,
  products
});
