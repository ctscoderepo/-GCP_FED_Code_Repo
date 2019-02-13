import React, {useEffect} from 'react';
import {withRouter} from 'react-router-dom';
import ProductDetailComponent from '../../components/ProductDetail';
import {connect} from 'react-redux';
import {getProduct} from '../../actions/ProductDetails';

const ProductDetailContainer=(props)=>{
	useEffect(()=>{
		props.fetchProduct(props.match.params.id)
	},[]);
	return (<ProductDetailComponent product={props.product}/>)
}

export default connect(state=>({product:state.product}), dispatch=>({
	fetchProduct(id){
		dispatch(getProduct(id))
	}
}))(withRouter(ProductDetailContainer));