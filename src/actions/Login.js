import axios from "axios";

export const login = details => async dispatch => {
  const res = await axios.get(
    "http://104.198.155.47/api/login-service",
    details
  );
  dispatch({ TYPE: "LOGIN", payload: res.data });
};

export const logout = () => dispatch => {
  dispatch({ TYPE: "LOGIN" });
};
