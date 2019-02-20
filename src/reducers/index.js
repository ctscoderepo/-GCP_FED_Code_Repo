import { combineReducers } from "redux";
import header from "./Header";
import products from "./Products";
import product from "./Plp";
import search from "./Search";

export default combineReducers({
  header,
  products,
  product,
  search
});
