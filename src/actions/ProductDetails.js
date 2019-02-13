import axios from "axios";
import URL from "../constants/Urls";

export const getProduct=(id)=> async dispatch=>{
    console.log("product Details URL :" , URL.HTTP + URL.HOST + URL.getProductDetailsURL+id)
    const res=await axios.get(URL.HTTP + URL.HOST + URL.getProductDetailsURL+id);
    dispatch({type:"PRODUCTDETAILS", payload:res.data});
}