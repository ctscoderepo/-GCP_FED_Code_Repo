import { combineReducers } from "redux";
import header from "./Header";
import products from "./Products";
import product from "./ProductDetails";
import search from "./Search";
import login from './Login';
import register from './Register';

export default combineReducers({
  header,
  products,
  product,
  search,
  login,
  register    
});
