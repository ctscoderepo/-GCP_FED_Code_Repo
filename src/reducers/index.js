import {combineReducers} from 'redux';
import products from './Products';
import product from  './ProductDetails';
import cart from './Cart';

export default combineReducers({
	cart,
	products,
	product
}) 