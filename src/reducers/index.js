import { combineReducers } from "redux";
import header from "./Header";
import products from "./Products";
import product from "./PDP";
import search from "./Search";
import login from './Login';

export default combineReducers({
  header,
  products,
  product,
  search,
  login
});
