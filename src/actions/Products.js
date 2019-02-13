import axios from 'axios';
import URL from "../constants/Urls";

export const getProducts=()=>async dispatch=>{
    const res=await axios.get(URL.HTTP + URL.HOST +URL.getProductsURL);
    dispatch({type:"PRODUCTS", payload:res.data});
}