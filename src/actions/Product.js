import axios from "axios";
export const getProduct=(id)=> async dispatch=>{
    const res=await axios.get(`http://35.184.60.172/api/product-detail/v1?skuId=${id}`);
    dispatch({type:"PRODUCT", payload:res.data});
}