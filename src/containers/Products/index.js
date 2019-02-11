import React, {useEffect, Fragment} from 'react';
import ProductsComponent from '../../components/Products';
import {connect} from 'react-redux';
import {getProducts} from '../../actions/Products';

const ProductsContainer=(props)=>{
	const {products:{products}}=props;
	useEffect(()=>{
		props.fetchProducts();
	}, []);
	return (<Fragment><ProductsComponent products={products}/></Fragment>)
}

export default connect(({products})=>({products:products}), disptach=>({
	fetchProducts(){
		disptach(getProducts());
	}}
))(ProductsContainer)
