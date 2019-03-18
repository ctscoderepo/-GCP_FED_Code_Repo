import {get } from "./BaseApi";
import {URLList} from "../config/URLs";

export const storeFinder = storeInfo => dispatch => {
    const addressId=storeInfo?storeInfo.address:"40222";
    const radius=storeInfo?storeInfo.radius:"5";
   
    let url = URLList.getStoreFinderUsingAddress(addressId,radius);
  return get(url)
    .then(res => dispatch({ type: "FINDSTORES", payload: res.data }))
    .catch(err => err);
};

export const getStoresByLatLng = latLong=>dispatch=>{
    const lat=latLong?latLong.lat:"38.2580403";
    const lng=latLong?latLong.lng:"-85.6427234";
    
    let url=URLList.getStoreFinderUsingLatLng(lat,lng);
    return get(url)
        .then(res => dispatch({ type: "GETSTORESBYLATLNG", payload: res.data }))
    .catch(err => err);
};


