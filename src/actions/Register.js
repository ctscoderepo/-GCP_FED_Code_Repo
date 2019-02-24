import axios from "axios";

export const registration = userDetails => dispatch => {
	return axios
		.post("http://104.198.155.47/api/register-user", { userDetails })
		.then(res => dispatch({ TYPE: "REGISTRATION", payload: res.data }))
		.catch(err => err);
};
