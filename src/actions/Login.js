import axios from "axios";

export const login = details => dispatch => {
  return axios.get(
    "http://104.198.155.47/api/login-service",
    details
  ).then(res=> dispatch({ TYPE: "LOGIN", payload: res.data })).catch(err=> err)
  
};

export const logout = () => dispatch => {
  dispatch({ TYPE: "LOGIN" });
};
