import {get } from "./BaseApi";
import {URLList} from "../config/URLs";

export const storeFinder = storeInfo => dispatch => {
    const addressId=storeInfo?storeInfo.address:"40222";
    const radius=storeInfo?storeInfo.radius:"5";
    dispatch({type:"ISLOADING"});
    let url = URLList.getHttpsStoreFinderUsingAddress(addressId,radius); //URLList.getStoreFinderUsingAddress(addressId,radius);
  return get(url)
    .then(res => dispatch({ type: "FINDSTORES", payload: res.data }))
    .catch(err => err);
};

export const getStoresByLatLng = latLong=>dispatch=>{
    const lat=latLong?latLong.lat:"38.2580403";
    const lng=latLong?latLong.lng:"-85.6427234";
    dispatch({type:"ISLOADING"});
    let url= URLList.getHttpsStoreFinderUsingLatLng(lat,lng);  //URLList.getStoreFinderUsingLatLng(lat,lng);
    return get(url)
        .then(res => dispatch({ type: "GETSTORESBYLATLNG", payload: res.data }))
    .catch(err => err);
};


