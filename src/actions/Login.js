import {post} from './BaseApi';

export const login = details => dispatch => {
  return post(
    "http://104.198.155.47/api/login-service",
    details
  ).then(res=> dispatch({ type: "LOGIN", payload: res.data }))
   .catch(err=> console.log("Login Error" , err))
  
};

export const logout = () => dispatch => {
  dispatch({ TYPE: "LOGIN" });
};
