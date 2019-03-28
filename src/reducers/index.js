import { combineReducers } from "redux";
import header from "./Header";
import products from "./Products";
import product from "./ProductDetails";
import search from "./Search";
import login from './Login';
import register from './Register';
import cart from './Cart';
import checkout from './Checkout';
import storeFinder from './StoreFinder';
import confirmation from './Confirmation';
import airesults from './Airesults';

const appReducer = combineReducers({
  header,
  products,
  product,
  search,
  login,
  register,
  cart,
  checkout,
  storeFinder,
  confirmation ,
  airesults  
});

const rootReducer = (state, action) => {
  return appReducer(state,action);
}

export default rootReducer;
