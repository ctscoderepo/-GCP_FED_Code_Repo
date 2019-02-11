import axios from 'axios';
export const getProducts=()=>async dispatch=>{
    const res=await axios.get('http://35.184.60.172/api/product-list/v1');
    dispatch({type:"PRODUCTS", payload:res.data});
}